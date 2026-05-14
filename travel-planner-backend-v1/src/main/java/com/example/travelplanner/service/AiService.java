// package com.example.travelplanner.service;

// import com.example.travelplanner.dto.AiTripRequest;
// import com.google.genai.Client;
// import com.google.genai.types.GenerateContentResponse;

// import jakarta.annotation.PostConstruct; 
// import java.util.Map;
// import java.util.concurrent.ConcurrentHashMap;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;

// @Service
// public class AiService {

//     @Value("${gemini.api.key}")
//     private String apiKey;

//     private Client client;

//     // 1. Static Cache: Stays alive as long as the server is running.
//     // This prevents hitting the API for the same request multiple times.
//     private static final Map<String, String> DEV_CACHE = new ConcurrentHashMap<>();

//     @PostConstruct
//     public void init() {
//         // Initialize the client once to improve performance
//         this.client = Client.builder()
//                 .apiKey(apiKey)
//                 .build();
//     }

//     public String generateItinerary(AiTripRequest request) {
//         // 2. Generate a unique key for this specific request
//         String destination = request.getDestination() != null ? request.getDestination().toLowerCase().trim() : "unknown";
//         String cacheKey = destination + "_" + request.getDays();

//         // 3. Check Cache First (Saves your Quota!)
//         if (DEV_CACHE.containsKey(cacheKey)) {
//             System.out.println(">>> DEBUG: Returning CACHED itinerary for " + cacheKey);
//             return DEV_CACHE.get(cacheKey);
//         }

//         try {
//             System.out.println(">>> DEBUG: Calling Gemini API for " + destination);
            
//             String prompt = """
//                     Create a %d-day travel itinerary for %s.
//                     Budget: %s
//                     Interests: %s
                    
//                     Please provide:
//                     - Day-wise plan (Morning, Afternoon, Evening)
//                     - Food suggestions
//                     - Travel tips
                    
//                     Output format: Clean Markdown.
//                     """.formatted(
//                         request.getDays(), 
//                         request.getDestination(), 
//                         request.getBudget(), 
//                         request.getInterests()
//                     );

//             // 4. Use "gemini-2.0-flash-lite" - much higher free quota than standard "flash"
//             GenerateContentResponse response = client.models.generateContent(
//                     "gemini-2.0-flash-lite", 
//                     prompt,
//                     null
//             );

//             String result = response.text();
            
//             // 5. Save successful response to cache
//             if (result != null && !result.isEmpty()) {
//                 DEV_CACHE.put(cacheKey, result);
//             }
            
//             return result;

//         } catch (Exception e) {
//             e.printStackTrace();
            
//             // 6. User-friendly error messaging for Quota issues
//            if (e.getMessage().contains("429") || e.getMessage().toLowerCase().contains("quota")) {

//     return """
// # AI Generated Itinerary (Demo Mode)

// ## Day 1
// - Arrival and hotel check-in
// - Explore local attractions
// - Evening food tour

// ## Day 2
// - Adventure activities
// - Cultural sightseeing
// - Sunset dinner

// ## Day 3
// - Shopping and relaxation
// - Local market visit
// - Departure preparation

// Travel Tips:
// - Carry essential documents
// - Stay hydrated
// - Use local transport apps
// """;
// }

//            return """
// # AI Generated Itinerary (Demo Mode)

// ## Day 1
// - Arrival and hotel check-in
// - Explore local attractions
// - Evening food tour

// ## Day 2
// - Adventure activities
// - Cultural sightseeing
// - Sunset dinner

// ## Day 3
// - Shopping and relaxation
// - Local market visit
// - Departure preparation

// Travel Tips:
// - Carry essential documents
// - Stay hydrated
// - Use local transport apps
// """;
//         }
//     }
// }       









package com.example.travelplanner.service;

import com.example.travelplanner.dto.AiTripRequest;

import com.example.travelplanner.entity.Trip;
import com.example.travelplanner.entity.TripDayPlan;

import com.example.travelplanner.repository.TripDayPlanRepository;
import com.example.travelplanner.repository.TripRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class AiService {

    @Value("${groq.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    private final TripRepository tripRepository;
    private final TripDayPlanRepository dayPlanRepository;

    // ✅ CONSTRUCTOR
    public AiService(
            TripRepository tripRepository,
            TripDayPlanRepository dayPlanRepository
    ) {

        this.tripRepository = tripRepository;
        this.dayPlanRepository = dayPlanRepository;
    }

    // ✅ GENERATE AI ITINERARY
    public String generateItinerary(AiTripRequest request) {

        try {

            String prompt = """
                    Create a %d-day travel itinerary for %s.

                    Budget: %s

                    Interests: %s

                    Please provide:
                    - Day-wise plan
                    - Morning, Afternoon, Evening activities
                    - Food suggestions
                    - Travel tips

                    Keep output clean and readable.
                    """
                    .formatted(
                            request.getDays(),
                            request.getDestination(),
                            request.getBudget(),
                            request.getInterests()
                    );

            HttpHeaders headers = new HttpHeaders();

            headers.setContentType(MediaType.APPLICATION_JSON);

            headers.setBearerAuth(apiKey);

            Map<String, Object> requestBody = Map.of(

                    "model", "llama-3.1-8b-instant",

                    "messages", List.of(
                            Map.of(
                                    "role", "user",
                                    "content", prompt
                            )
                    )

            );

            HttpEntity<Map<String, Object>> entity =
                    new HttpEntity<>(requestBody, headers);

            ResponseEntity<Map> response = restTemplate.exchange(

                    "https://api.groq.com/openai/v1/chat/completions",

                    HttpMethod.POST,

                    entity,

                    Map.class

            );

            List choices =
                    (List) response.getBody().get("choices");

            Map firstChoice =
                    (Map) choices.get(0);

            Map message =
                    (Map) firstChoice.get("message");

            return (String) message.get("content");

        } catch (Exception e) {

            e.printStackTrace();

            return "AI Error: " + e.getMessage();

        }
    }

    // ✅ SAVE AI ITINERARY TO TRIP
    public void saveItineraryToTrip(

            Long tripId,
            String itinerary

    ) {

        try {

            if (itinerary == null || itinerary.isEmpty()) {

                throw new RuntimeException("Itinerary is empty");
            }

            Trip trip = tripRepository.findById(tripId)
                    .orElseThrow(() -> new RuntimeException("Trip not found"));

            // ✅ remove old timeline
            List<TripDayPlan> existing =
                    dayPlanRepository.findByTripIdOrderByDayNumber(tripId);

            dayPlanRepository.deleteAll(existing);

            // ✅ create ONE timeline item
            TripDayPlan plan = new TripDayPlan();

            plan.setDayNumber(1);

            plan.setTitle("AI Generated Itinerary");

            plan.setDescription(itinerary);

            plan.setTrip(trip);

            dayPlanRepository.save(plan);

            System.out.println("✅ AI itinerary saved successfully");

        } catch (Exception e) {

            e.printStackTrace();

            throw new RuntimeException(e.getMessage());
        }
    }
}