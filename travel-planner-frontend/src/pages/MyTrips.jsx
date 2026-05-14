// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { authFetch } from "../api/api";
// function MyTrips() {
//   const [trips, setTrips] = useState([]);
//   const navigate = useNavigate();

// useEffect(() => {
//   authFetch("/api/trips").then(setTrips);
// }, []);

//   const deleteTrip = async (id) => {
//     if (!window.confirm("Delete this trip?")) return;

//     await fetch(`http://localhost:8080/api/trips/${id}`, {
//       method: "DELETE"
//     });

//     setTrips(trips.filter(t => t.id !== id));
//   };

//   return (
//     <div>
//       <h1>🧳 My Trips</h1>

//       {trips.length === 0 && <p>No trips created yet.</p>}

//       {trips.map(trip => (
//         <div key={trip.id} className="card">
//           <h3>{trip.destination}</h3>
//           <p>{trip.startDate} → {trip.endDate}</p>

//           <button onClick={() => navigate(`/trip/${trip.id}`)}>
//             View
//           </button>
// <Link to={`/trip/edit/${trip.id}`}>
//   <button>Edit</button>
// </Link>


//           <button
//             onClick={() => deleteTrip(trip.id)}
//             style={{ color: "red" }}
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyTrips;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { authFetch } from "../api/api";

// function MyTrips() {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     authFetch("/api/trips")
//       .then(data => setTrips(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div style={{ maxWidth: "900px", margin: "40px auto" }}>
//       <h2>🧳 My Trips</h2>

//       {trips.length === 0 ? (
//         <p>No trips yet</p>
//       ) : (
//         trips.map(trip => (
//           <div key={trip.id} className="card">
//             <h3>{trip.destination}</h3>
//             <p>📅 {trip.startDate} → {trip.endDate}</p>

//             <Link to={`/trip/${trip.id}`}>
//               <button>View</button>
//             </Link>

//             <Link to={`/trip/edit/${trip.id}`}>
//               <button>Edit</button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyTrips;



// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { authFetch } from "../api/api";
// import { 
//   MapPin, 
//   Calendar, 
//   ArrowRight, 
//   Settings2, 
//   Plus, 
//   ChevronLeft,
//   PlaneTakeoff 
// } from "lucide-react";

// function MyTrips() {
//   const [trips, setTrips] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     authFetch("/api/trips")
//       .then(data => setTrips(Array.isArray(data) ? data : []))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#FBFBFE] p-6 lg:p-12 font-sans text-slate-900">
      
//       {/* --- HEADER --- */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
//         <div className="flex items-center gap-4">
//           <button 
//             onClick={() => navigate("/dashboard")}
//             className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-slate-900 transition-all"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <div>
//             <h1 className="text-4xl font-black tracking-tight text-slate-900">Your Archive</h1>
//             <p className="text-slate-500 font-medium">All your past and future memories.</p>
//           </div>
//         </div>

//         <Link to="/create" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-[1.5rem] font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
//           <Plus size={20} />
//           Plan New Journey
//         </Link>
//       </div>

//       {/* --- CONTENT --- */}
//       <div className="max-w-7xl mx-auto">
//         {trips.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
//             <PlaneTakeoff size={48} className="text-slate-200 mb-4" />
//             <p className="text-slate-400 font-bold">No trips found in your archive.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {trips.map((trip) => (
//               <div 
//                 key={trip.id} 
//                 className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 border border-slate-100"
//               >
//                 {/* Visual Header (Placeholder Image based on destination) */}
//                 <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
//                   <img 
//                     src={`https://source.unsplash.com/800x600/?${trip.destination},travel`} 
//                     alt={trip.destination}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
//                 </div>

//                 <div className="p-8 pt-2 relative">
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="space-y-1">
//                       <div className="flex items-center gap-1 text-blue-600 text-[10px] font-black uppercase tracking-widest">
//                         <MapPin size={12} />
//                         {trip.tripType || "Adventure"}
//                       </div>
//                       <h3 className="text-2xl font-black text-slate-900">{trip.destination}</h3>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 text-slate-500 font-medium text-sm mb-8">
//                     <Calendar size={16} className="text-slate-300" />
//                     <span>{trip.startDate} — {trip.endDate}</span>
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Link 
//                       to={`/trip/${trip.id}`} 
//                       className="flex-1 bg-slate-900 text-white text-center py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
//                     >
//                       View Plan <ArrowRight size={16} />
//                     </Link>
//                     <Link 
//                       to={`/trip/edit/${trip.id}`} 
//                       className="p-3.5 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-100"
//                     >
//                       <Settings2 size={18} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyTrips;


// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { authFetch } from "../api/api";
// import { 
//   MapPin, 
//   Calendar, 
//   ArrowRight, 
//   Settings2, 
//   Plus, 
//   ChevronLeft,
//   PlaneTakeoff,
//   Globe,
//   Compass,
//   Mountain,
//   Search
// } from "lucide-react";

// // Animation Variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1 }
// };

// function MyTrips() {
//   const [trips, setTrips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Attempt to fetch from API
//     authFetch("/api/trips")
//       .then(data => {
//         if (data && Array.isArray(data) && data.length > 0) {
//           setTrips(data);
//         } else {
//           // MOCK DATA: So you can see the design even if API is empty/offline
//           // setTrips([
//           //   { id: 1, destination: "Paris, France", startDate: "May 10", endDate: "May 15", tripType: "Leisure" },
//           //   { id: 2, destination: "New York, USA", startDate: "Jun 22", endDate: "Jun 28", tripType: "Business" },
//           //   { id: 3, destination: "Tokyo, Japan", startDate: "Sep 05", endDate: "Sep 20", tripType: "Adventure" }
//           // ]);
//           setTrips(Array.isArray(data) ? data : []);
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
//         <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] p-6 lg:p-16 font-sans text-slate-900">
      
//       {/* --- HEADER SECTION --- */}
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
//       >
//         <div className="flex items-center gap-6">
//           <button 
//             onClick={() => navigate("/dashboard")}
//             className="group p-4 bg-white rounded-[1.5rem] shadow-sm border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all"
//           >
//             <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
//           </button>
//           <div>
//             <div className="flex items-center gap-2 mb-1 text-indigo-600">
//               <Compass size={16} />
//               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Collections</span>
//             </div>
//             <h1 className="text-5xl font-black tracking-tighter text-slate-900">Your Archive</h1>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <Link to="/create" className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
//             <Plus size={20} />
//             <span>Plan New</span>
//           </Link>
//         </div>
//       </motion.div>

//       {/* --- CONTENT GRID --- */}
//       <div className="max-w-7xl mx-auto">
//         {trips.length === 0 ? (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//             className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100"
//           >
//             <div className="p-6 bg-slate-50 rounded-full mb-6 text-slate-300">
//               <PlaneTakeoff size={40} />
//             </div>
//             <p className="text-slate-400 font-bold text-lg">Your archive is empty</p>
//             <Link to="/create" className="text-indigo-600 font-bold mt-2 hover:underline">Create your first trip</Link>
//           </motion.div>
//         ) : (
//           <motion.div 
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//           >
//             {trips.map((trip) => (
//               <motion.div 
//                 key={trip.id} 
//                 variants={item}
//                 className="group relative bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-500 border border-slate-100 flex flex-col min-h-[340px]"
//               >
//                 {/* Visual Identity Block */}
//                 <div className="flex justify-between items-start mb-8">
//                   <div className="h-16 w-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
//                     {trip.tripType === "Business" ? <Globe size={28} /> : <Mountain size={28} />}
//                   </div>
//                   <div className="text-right">
//                     <span className="block text-[10px] font-black uppercase tracking-widest text-slate-300">Ticket No.</span>
//                     <span className="text-[10px] font-mono font-bold text-slate-400">#TRP-{trip.id}</span>
//                   </div>
//                 </div>

//                 {/* Info Block */}
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-3">
//                     <MapPin size={12} />
//                     {trip.tripType || "Adventure"}
//                   </div>
//                   <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-indigo-600 transition-colors">
//                     {trip.destination}
//                   </h3>
                  
//                   <div className="flex items-center gap-3 text-slate-400 font-bold text-xs bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
//                     <Calendar size={14} className="text-indigo-300" />
//                     <span>{trip.startDate} — {trip.endDate}</span>
//                   </div>
//                 </div>

//                 {/* Actions Block */}
//                 <div className="mt-10 flex items-center gap-3">
//                   <Link 
//                     to={`/trip/${trip.id}`} 
//                     className="flex-1 bg-slate-900 text-white text-center py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200"
//                   >
//                     View Plan <ArrowRight size={16} />
//                   </Link>
//                   <Link 
//                     to={`/trip/edit/${trip.id}`} 
//                     className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-white hover:text-indigo-600 hover:border-indigo-100 transition-all border border-transparent"
//                   >
//                     <Settings2 size={20} />
//                   </Link>
//                 </div>

//                 {/* Decorative Background Icon */}
//                 <div className="absolute -bottom-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none scale-150 rotate-12">
//                    <Globe size={150} />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyTrips;












import { useEffect, useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  ArrowLeft,
  Plus,
  Calendar,
  MapPin,
  Briefcase,
  ArrowRight
} from "lucide-react";

import { authFetch } from "../api/api";

function MyTrips() {

  const [trips, setTrips] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    authFetch("/api/trips")

      .then(data => {

        setTrips(
          Array.isArray(data)
            ? data
            : []
        );

      })

      .catch(err => {

        console.error(err);

        setTrips([]);

      })

      .finally(() => {

        setLoading(false);
      });

  }, []);

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen bg-slate-50 flex items-center justify-center">

        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>

            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 mb-4 transition"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <h1 className="text-4xl font-black text-slate-900 mb-2">
              My Trips
            </h1>

            <p className="text-slate-500">
              Manage and explore your travel plans
            </p>

          </div>

          <Link
            to="/create"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-2xl font-bold transition active:scale-95"
          >

            <Plus size={18} />

            Create Trip

          </Link>

        </div>

        {/* EMPTY */}

        {trips.length === 0 ? (

          <div className="bg-white border border-slate-100 rounded-3xl p-16 text-center">

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              No trips yet
            </h2>

            <p className="text-slate-500 mb-8">
              Start planning your next adventure
            </p>

            <Link
              to="/create"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >

              <Plus size={18} />

              Create Your First Trip

            </Link>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {trips.map((trip) => (

              <div
                key={trip.id}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:border-indigo-200 transition"
              >

                {/* TOP */}

                <div className="flex items-start justify-between mb-6">

                  <div>

                    <div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold mb-2">

                      <MapPin size={15} />

                      {trip.tripType || "Trip"}

                    </div>

                    <h2 className="text-2xl font-black text-slate-900">
                      {trip.destination}
                    </h2>

                  </div>

                </div>

                {/* DATES */}

                <div className="flex items-center gap-3 text-slate-600 mb-6">

                  <Calendar size={16} />

                  <span className="text-sm">

                    {trip.startDate}
                    {" → "}
                    {trip.endDate}

                  </span>

                </div>

                {/* TYPE */}

                <div className="flex items-center gap-3 text-slate-600 mb-8">

                  <Briefcase size={16} />

                  <span className="text-sm">

                    {trip.tripType || "Personal"}

                  </span>

                </div>

                {/* ACTION */}

                <Link
                  to={`/trip/${trip.id}`}
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white py-3 rounded-2xl font-semibold transition"
                >

                  Open Trip

                  <ArrowRight size={16} />

                </Link>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyTrips;