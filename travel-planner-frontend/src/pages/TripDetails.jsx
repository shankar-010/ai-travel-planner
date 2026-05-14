// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Checklist from "../components/Checklist";
// import Timeline from "../components/Timeline";
// import TransportNotes from "../components/TransportNotes";
// import EmergencyHelper from "../components/EmergencyHelper";
// import FavoritePlaces from "../components/FavoritePlaces";
// import TripMap from "../components/TripMap";

// import { authFetch } from "../api/api";



// function TripDetails() {
//   const { id } = useParams();
//   const [trip, setTrip] = useState(null);
// const [places, setPlaces] = useState([]);
// //   useEffect(() => {
// //     fetch(`http://localhost:8080/api/trips/${id}`)
// //       .then(res => res.json())
// //       .then(data => setTrip(data));


// //   //     fetch(`http://localhost:8080/api/places/${id}`)
// //   // .then(res => res.json())
// //   // .then(data => setPlaces(data));

// // fetch(`http://localhost:8080/api/places/${id}`)
// //   .then(res => res.json())
// //   .then(data => {
// //     if (Array.isArray(data)) {
// //       setPlaces(data);
// //     } else if (data && Array.isArray(data.places)) {
// //       setPlaces(data.places);
// //     } else {
// //       setPlaces([]);
// //     }
// //   })
// //   .catch(() => setPlaces([]));


// //   }, [id]);
// useEffect(() => {
//   if (!id) return;

//   authFetch(`/api/trips/${id}`)
//     .then(data => setTrip(data))
//     .catch(() => setTrip(null));

//   authFetch(`/api/places/${id}`)
//     .then(data => setPlaces(Array.isArray(data) ? data : []))
//     .catch(() => setPlaces([]));

// }, [id]);


// if (!trip || !trip.id) {
//   return <p>Loading trip...</p>;
// }
// return (
//   <div>
//     <h1>{trip.destination}</h1>

//     <p>
//       📅 {trip.startDate} → {trip.endDate}
//     </p>

//     <p>🧳 Trip Type: {trip.tripType}</p>

//     <div className="card">
//       <h2>Checklist</h2>

// <button
//   onClick={async () => {
//     await authFetch(`/api/checklist/generate/${trip.id}`, { method: "POST" });
//   }}
// >
//   Generate Checklist
// </button>


//       <Checklist tripId={trip.id} />
//     </div>

//     <div className="card">
//       <h2>Timeline</h2>

//       <button
//         onClick={() =>
//           fetch(`http://localhost:8080/api/timeline/generate/${trip.id}`, {
//             method: "POST"
//           }).then(() => window.location.reload())
//         }
//       >
//         Generate Timeline
//       </button>

//       <Timeline tripId={trip.id} />
//     </div>

//     <div className="card">
//       <h2>Transport Notes</h2>
//       <TransportNotes tripId={trip.id} />
//     </div>

//     <FavoritePlaces tripId={trip.id} />

//     <div className="card">
//       <h2>Emergency Helper</h2>
//       <EmergencyHelper city={trip.destination} />
//     </div>

//     {/* ✅ MAP MUST BE INSIDE RETURN */}
//     <TripMap destination={trip.destination} places={places} />
//   </div>
// );



// }

// export default TripDetails;





// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Checklist from "../components/Checklist";
// import Timeline from "../components/Timeline";
// import TransportNotes from "../components/TransportNotes";
// import EmergencyHelper from "../components/EmergencyHelper";
// import FavoritePlaces from "../components/FavoritePlaces";
// import TripMap from "../components/TripMap";
// import { authFetch } from "../api/api";

// function TripDetails() {
//   const { id } = useParams();

//   const [trip, setTrip] = useState(null);
//   const [places, setPlaces] = useState([]);
//   const [timelineRefresh, setTimelineRefresh] = useState(false); // ✅ MOVED HERE

//   useEffect(() => {
//     if (!id) return;

//     authFetch(`/api/trips/${id}`)
//       .then(data => setTrip(data))
//       .catch(() => setTrip(null));

//     authFetch(`/api/places/${id}`)
//       .then(data => setPlaces(Array.isArray(data) ? data : []))
//       .catch(() => setPlaces([]));
//   }, [id]);

//   if (!trip || !trip.id) {
//     return <p>Loading trip...</p>;
//   }

//   return (
//     <div>
//       <h1>{trip.destination}</h1>

//       <p>
//         📅 {trip.startDate} → {trip.endDate}
//       </p>

//       <p>🧳 Trip Type: {trip.tripType}</p>

//       {/* CHECKLIST */}
//       <div className="card">
//         <h2>Checklist</h2>

//         <button
//           onClick={async () => {
//             await authFetch(`/api/checklist/generate/${trip.id}`, {
//               method: "POST"
//             });
//           }}
//         >
//           Generate Checklist
//         </button>

//         <Checklist tripId={trip.id} />
//       </div>

//       {/* TIMELINE */}
//       <div className="card">
//         <h2>Timeline</h2>

//         <button
//           onClick={async () => {
//             try {
//               await authFetch(`/api/timeline/generate/${trip.id}`, {
//                 method: "POST"
//               });
//               setTimelineRefresh(prev => !prev); // ✅ trigger reload
//             } catch (err) {
//               console.error("Generate timeline failed", err);
//               alert("Failed to generate timeline");
//             }
//           }}
//         >
//           Generate Timeline
//         </button>

//         <Timeline
//           tripId={trip.id}
//           trip={trip}
//           refresh={timelineRefresh}
//         />
//       </div>

//       {/* TRANSPORT */}
//       <div className="card">
//         <h2>Transport Notes</h2>
//         <TransportNotes tripId={trip.id} />
//       </div>

//       {/* FAVORITES */}
//       <FavoritePlaces tripId={trip.id} />

//       {/* EMERGENCY */}
//       <div className="card">
//         <h2>Emergency Helper</h2>
//         <EmergencyHelper city={trip.destination} />
//       </div>

//       {/* MAP */}
//       <TripMap destination={trip.destination} places={places} />
//     </div>
//   );
// }

// export default TripDetails;


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { 
//   Calendar, MapPin, Briefcase, Zap, 
//   ArrowLeft, ShieldAlert, TrainFront, Star, ListChecks 
// } from "lucide-react";
// import Checklist from "../components/Checklist";
// import Timeline from "../components/Timeline";
// import TransportNotes from "../components/TransportNotes";
// import EmergencyHelper from "../components/EmergencyHelper";
// import FavoritePlaces from "../components/FavoritePlaces";
// import TripMap from "../components/TripMap";
// import { authFetch } from "../api/api";

// function TripDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [trip, setTrip] = useState(null);
//   const [places, setPlaces] = useState([]);
//   const [timelineRefresh, setTimelineRefresh] = useState(false);
//   const [isGenerating, setIsGenerating] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     authFetch(`/api/trips/${id}`)
//       .then(data => setTrip(data))
//       .catch(() => setTrip(null));

//     authFetch(`/api/places/${id}`)
//       .then(data => setPlaces(Array.isArray(data) ? data : []))
//       .catch(() => setPlaces([]));
//   }, [id]);

//   const handleGenerateTimeline = async () => {
//     setIsGenerating(true);
//     try {
//       await authFetch(`/api/timeline/generate/${trip.id}`, { method: "POST" });
//       setTimelineRefresh(prev => !prev);
//     } catch (err) {
//       console.error("Generate timeline failed", err);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   if (!trip) return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-50">
//       <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#FBFBFE] text-slate-900 font-sans">
//       {/* --- HERO HEADER --- */}
//       <div className="relative h-[300px] w-full overflow-hidden bg-slate-900">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFE] via-transparent to-transparent" />
        
//         <div className="relative max-w-7xl mx-auto px-6 pt-10">
//           <button 
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-white/80 hover:text-white font-bold transition-all bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
//           >
//             <ArrowLeft size={18} /> Back
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* --- LEFT SIDEBAR (Info) --- */}
//           <div className="lg:col-span-4 space-y-6">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
//             >
//               <h1 className="text-4xl font-black tracking-tighter mb-4">{trip.destination}</h1>
              
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3 text-slate-600 font-medium">
//                   <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Calendar size={18}/></div>
//                   <span>{trip.startDate} — {trip.endDate}</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-slate-600 font-medium">
//                   <div className="p-2 bg-slate-50 text-slate-600 rounded-lg"><Briefcase size={18}/></div>
//                   <span className="capitalize">{trip.tripType} Adventure</span>
//                 </div>
//               </div>

//               <hr className="my-8 border-slate-100" />

//               {/* MAP MINI PREVIEW */}
//               <div className="rounded-3xl overflow-hidden h-48 bg-slate-100 border border-slate-200">
//                 <TripMap destination={trip.destination} places={places} />
//               </div>
//             </motion.div>

//             {/* EMERGENCY HELPER WIDGET */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-rose-50 rounded-[2.5rem] p-8 border border-rose-100"
//             >
//               <div className="flex items-center gap-2 text-rose-600 mb-4 font-black text-xs uppercase tracking-widest">
//                 <ShieldAlert size={16} /> Emergency Helper
//               </div>
//               <EmergencyHelper city={trip.destination} />
//             </motion.div>
//           </div>

//           {/* --- RIGHT CONTENT (Dynamic Tabs/Cards) --- */}
//           <div className="lg:col-span-8 space-y-8">
            
//             {/* TIMELINE SECTION */}
//             <motion.section 
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-[3rem] p-8 md:p-10 shadow-sm border border-slate-100"
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <div className="flex items-center gap-3">
//                   <div className="h-10 w-10 bg-indigo-600 text-white rounded-2xl flex items-center justify-center">
//                     <Zap size={20} />
//                   </div>
//                   <h2 className="text-2xl font-black tracking-tight">Daily Timeline</h2>
//                 </div>
//                 {/* <button
//                   onClick={handleGenerateTimeline}
//                   disabled={isGenerating}
//                   className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-all shadow-lg disabled:opacity-50"
//                 >
//                   {isGenerating ? "Planning..." : "AI Generate"}
//                 </button> */}
//               </div>
//               <Timeline tripId={trip.id} trip={trip} refresh={timelineRefresh} />
//             </motion.section>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* CHECKLIST */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-white rounded-[2.5rem] p-8 border border-slate-100"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="font-black text-lg flex items-center gap-2">
//                     <ListChecks className="text-indigo-500" /> Checklist
//                   </h3>
//                 </div>
//                 <Checklist tripId={trip.id} />
//               </motion.div>

//               {/* TRANSPORT */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-white rounded-[2.5rem] p-8 border border-slate-100"
//               >
//                 <h3 className="font-black text-lg flex items-center gap-2 mb-6">
//                   <TrainFront className="text-blue-500" /> Transport
//                 </h3>
//                 <TransportNotes tripId={trip.id} />
//               </motion.div>
//             </div>

//             {/* FAVORITE PLACES */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-white rounded-[3rem] p-8 border border-slate-100"
//             >
//               <h3 className="font-black text-lg flex items-center gap-2 mb-8">
//                 <Star className="text-amber-500 fill-amber-500" size={20} /> Favorite Spots
//               </h3>
//               <FavoritePlaces tripId={trip.id} />
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TripDetails;



import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Calendar,
  MapPin,
  Briefcase,
  ArrowLeft,
  ListChecks,
  TrainFront,
  Star
} from "lucide-react";

import Checklist from "../components/Checklist";
import Timeline from "../components/Timeline";
import TransportNotes from "../components/TransportNotes";
import FavoritePlaces from "../components/FavoritePlaces";

import { authFetch } from "../api/api";

function TripDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [trip, setTrip] = useState(null);

  const [places, setPlaces] = useState([]);

  useEffect(() => {

    if (!id) return;

    authFetch(`/api/trips/${id}`)
      .then(data => setTrip(data))
      .catch(() => setTrip(null));

    authFetch(`/api/places/${id}`)
      .then(data => setPlaces(Array.isArray(data) ? data : []))
      .catch(() => setPlaces([]));

  }, [id]);

  if (!trip) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-slate-50">

        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP BAR */}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 mb-6 font-semibold transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* TRIP HEADER */}

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <h1 className="text-4xl font-black text-slate-900 mb-3">
                {trip.destination}
              </h1>

              <div className="flex flex-wrap gap-4 text-slate-600">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {trip.startDate} → {trip.endDate}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  <span>
                    {trip.tripType || "Personal Trip"}
                  </span>
                </div>

              </div>

            </div>

            <div className="bg-indigo-50 text-indigo-600 px-5 py-3 rounded-2xl font-bold">
              Trip Details
            </div>

          </div>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 space-y-8">

            {/* TIMELINE */}

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">

              <div className="flex items-center gap-3 mb-8">

                <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                  <MapPin size={20} />
                </div>

                <div>

                  <h2 className="text-2xl font-black">
                    Timeline
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Plan your daily activities
                  </p>

                </div>

              </div>

              <Timeline tripId={trip.id} trip={trip} />

            </div>

            {/* FAVORITE PLACES */}

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">

              <div className="flex items-center gap-3 mb-8">

                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Star size={20} />
                </div>

                <div>

                  <h2 className="text-2xl font-black">
                    Favorite Places
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Save memorable spots
                  </p>

                </div>

              </div>

              <FavoritePlaces tripId={trip.id} />

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            {/* CHECKLIST */}

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <ListChecks size={20} />
                </div>

                <div>

                  <h2 className="text-xl font-black">
                    Checklist
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Important travel items
                  </p>

                </div>

              </div>

              <Checklist tripId={trip.id} />

            </div>

            {/* TRANSPORT */}

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <TrainFront size={20} />
                </div>

                <div>

                  <h2 className="text-xl font-black">
                    Transport Notes
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Save travel details
                  </p>

                </div>

              </div>

              <TransportNotes tripId={trip.id} />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TripDetails;