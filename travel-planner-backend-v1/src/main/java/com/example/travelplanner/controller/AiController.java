// package com.example.travelplanner.controller;

// import com.example.travelplanner.dto.AiTripRequest;
// import com.example.travelplanner.service.AiService;

// import org.springframework.web.bind.annotation.*;

// import java.util.Map;

// @RestController
// @RequestMapping("/api/ai")
// public class AiController {

//     private final AiService aiService;

//     public AiController(AiService aiService) {
//         this.aiService = aiService;
//     }

//     @PostMapping("/generate-itinerary")
//     public Map<String, String> generate(
//             @RequestBody AiTripRequest request
//     ) {

//         String result =
//                 aiService.generateItinerary(request);

//         return Map.of(
//                 "itinerary",
//                 result
//         );
//     }

//     @PostMapping("/save-to-trip/{tripId}")
// public Map<String, String> saveToTrip(

//         @PathVariable Long tripId,

//         @RequestBody Map<String, String> body

// ) {

//     aiService.saveItineraryToTrip(
//             tripId,
//             body.get("itinerary")
//     );

//     return Map.of(
//             "message",
//             "AI itinerary saved successfully"
//     );
// }
// }


package com.example.travelplanner.controller;

import com.example.travelplanner.dto.AiTripRequest;
import com.example.travelplanner.service.AiService;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    // ✅ GENERATE AI ITINERARY
    @PostMapping("/generate-itinerary")
    public Map<String, String> generate(
            @RequestBody AiTripRequest request
    ) {

        String result =
                aiService.generateItinerary(request);

        return Map.of(
                "itinerary",
                result
        );
    }

    // ✅ SAVE AI ITINERARY TO TRIP
    @PostMapping("/save-to-trip/{tripId}")
    public Map<String, String> saveToTrip(

            @PathVariable Long tripId,

            @RequestBody Map<String, String> body

    ) {

        // ✅ DEBUG
        String itinerary = body.get("itinerary");

        System.out.println("========== AI ITINERARY ==========");
        System.out.println(itinerary);
        System.out.println("==================================");

        if (itinerary == null || itinerary.isEmpty()) {

            throw new RuntimeException("Itinerary is empty");
        }

        aiService.saveItineraryToTrip(
                tripId,
                itinerary
        );

        return Map.of(
                "message",
                "AI itinerary saved successfully"
        );
    }
}