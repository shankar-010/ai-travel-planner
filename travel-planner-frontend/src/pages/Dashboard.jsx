// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { authFetch } from "../api/api";
// function Dashboard() {
//   const [trip, setTrip] = useState(null);
//   const [trips, setTrips] = useState([]);
//   const navigate = useNavigate();

// useEffect(() => {
//   authFetch("/api/trips")
//     .then(data => {
//       console.log("Trips API data:", data);

//       if (data && data.length > 0) {
//         setTrip(data[0]);
//       }
//     })
//     .catch(err => {
//       console.error("Dashboard error:", err);
//     });
// }, []);



//   if (!trip) return <p>Loading dashboard...</p>;




  
//   return (



    
//     <div className="dashboard">

// <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//   <h1>Dashboard</h1>

//   <Link to="/create">
//     <button style={{
//       backgroundColor: "#2563eb",
//       color: "white",
//       padding: "10px 16px",
//       borderRadius: "8px",
//       border: "none",
//       cursor: "pointer",
//       fontWeight: "600"
//     }}>
//       ➕ Create Trip
//     </button>
//   </Link>
// </div>

//       {/* Trip Overview */}
//       {/* <div className="card">
//         <h2>📍 {trip.destination}</h2>
//         <p>📅 {trip.startDate} → {trip.endDate}</p>
//         <span className="badge">{trip.status}</span>
//       </div> */}
// <div className="card">
//   <h2>📍 {trip.destination}</h2>
//   <p>📅 {trip.startDate} → {trip.endDate}</p>
// </div>

//       {/* Countdown */}
//       <div className="card">
//         <h3>⏳ Trip Info</h3>
//         <p>{trip.dayInfo}</p>
//       </div>

//       {/* Today’s Plan */}
//       <div className="card">
//         <h3>📌 Today’s Plan</h3>
//         {trip.todaysPlan ? (
//           <p>{trip.todaysPlan}</p>
//         ) : (
//           <p>No plan added for today</p>
//         )}
//       </div>

//       {/* Weather (UI placeholder) */}
//       <div className="card">
//         <h3>🌤 Weather</h3>
//         <p>{trip.destination}</p>
//         <p>☀️ 28°C</p>
//       </div>

//       {/* Pending Checklist */}
// <div className="card">
//   <h3>📦 Pending Checklist</h3>

//   {(!trip.pendingChecklist || trip.pendingChecklist.length === 0) ? (
//     <p>All packed 🎉</p>
//   ) : (
//     <ul>
//       {trip.pendingChecklist.slice(0, 3).map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//     </ul>
//   )}
// </div>


//       {/* Quick Actions */}
//       <div className="card">
//         <h3>⚡ Quick Actions</h3>
// <button onClick={() => navigate(`/trip/${trip.id}`)}>
//           View Trip
//         </button>
//       </div>
//       <Link to="/trips">
//   <button style={{ marginLeft: "10px" }}>
//     📂 My Trips
//   </button>
// </Link>


//     </div>
//   );
// }

// export default Dashboard;



// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { authFetch } from "../api/api";
// import { 
//   Plus, 
//   MapPin, 
//   Calendar, 
//   CloudSun, 
//   CheckCircle2, 
//   ChevronRight, 
//   LayoutGrid, 
//   Clock,
//   Navigation
// } from "lucide-react"; // npm install lucide-react

// function Dashboard() {
//   const [trip, setTrip] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     authFetch("/api/trips")
//       .then(data => {
//         if (data && data.length > 0) {
//           setTrip(data[0]);
//         }
//       })
//       .catch(err => console.error("Dashboard error:", err));
//   }, []);

//   if (!trip) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-50">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//           <p className="text-slate-500 font-medium">Loading your world...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 lg:p-12 font-sans text-slate-900">
//       {/* --- TOP NAV BAR --- */}
//       <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
//             Dashboard
//           </h1>
//           <p className="text-slate-500 font-medium mt-1">Welcome back, Traveler.</p>
//         </div>
//         <div className="flex gap-3">
//             <Link to="/trips" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
//                 <LayoutGrid size={18}/> My Trips
//             </Link>
//             <Link to="/create" className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
//                 <Plus size={18}/> <span className="hidden xs:inline">Create Trip</span>
//             </Link>
//         </div>
//       </div>

//       {/* --- BENTO GRID START --- */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
        
//         {/* MAIN DESTINATION CARD (Large) */}
//         <div className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl group cursor-pointer" onClick={() => navigate(`/trip/${trip.id}`)}>
//           <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          
//           <div className="relative h-full flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
//                 Active Trip
//               </span>
//               <button className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">
//                 <Navigation size={20}/>
//               </button>
//             </div>
            
//             <div>
//               <div className="flex items-center gap-2 mb-2 text-blue-400">
//                  <MapPin size={24} />
//                  <span className="text-xl font-bold tracking-tight">Main Target</span>
//               </div>
//               <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">{trip.destination}</h2>
//               <div className="flex items-center gap-4 text-slate-300 font-medium">
//                  <div className="flex items-center gap-2">
//                    <Calendar size={18}/>
//                    <span>{trip.startDate}</span>
//                  </div>
//                  <ChevronRight size={16} />
//                  <span>{trip.endDate}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* WEATHER WIDGET (Small) */}
//         <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden">
//           <div className="flex justify-between items-start">
//             <div className="p-3 bg-amber-50 rounded-2xl text-amber-500">
//                <CloudSun size={24} />
//             </div>
//             <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Local Weather</span>
//           </div>
//           <div>
//             <span className="text-4xl font-black text-slate-900 leading-none">28°C</span>
//             <p className="text-slate-500 font-medium text-sm mt-1 capitalize">{trip.destination}</p>
//           </div>
//         </div>

//         {/* COUNTDOWN/DAY INFO (Small) */}
//         <div className="bg-indigo-600 rounded-[2.5rem] p-6 text-white flex flex-col justify-between shadow-xl shadow-indigo-100">
//           <div className="flex justify-between items-start">
//             <div className="p-3 bg-white/10 rounded-2xl">
//                <Clock size={24} />
//             </div>
//             <span className="text-[10px] font-black uppercase text-white/60 tracking-widest">Journey Status</span>
//           </div>
//           <div>
//             <p className="text-lg font-bold leading-tight">{trip.dayInfo || "Adventure is calling!"}</p>
//           </div>
//         </div>

//         {/* TODAY'S PLAN (Medium) */}
//         <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm md:col-span-1 flex flex-col gap-4">
//            <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//               <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest">Today's Focus</h3>
//            </div>
//            <p className="text-slate-900 font-bold leading-snug">
//             {trip.todaysPlan || "No plan added. Time to explore spontaneously!"}
//            </p>
//         </div>

//         {/* PENDING CHECKLIST (Medium) */}
//         <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm md:col-span-1 flex flex-col justify-between">
//            <div>
//              <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">Unpacked Items</h3>
//              <ul className="space-y-3">
//                {(!trip.pendingChecklist || trip.pendingChecklist.length === 0) ? (
//                  <li className="flex items-center gap-2 text-emerald-600 font-bold text-sm italic">
//                     <CheckCircle2 size={16}/> Fully Packed!
//                  </li>
//                ) : (
//                  trip.pendingChecklist.slice(0, 2).map((item, i) => (
//                    <li key={i} className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
//                       <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
//                       {item}
//                    </li>
//                  ))
//                )}
//              </ul>
//            </div>
//            <button onClick={() => navigate(`/trip/${trip.id}`)} className="text-blue-600 font-bold text-xs hover:underline flex items-center gap-1 mt-4">
//              Full List <ChevronRight size={14}/>
//            </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { authFetch } from "../api/api";
// import {
//   Plus,
//   LayoutGrid,
//   LogOut,
//   CloudSun,
//   Clock,
//   CheckCircle2,
//   MapPin,
//   Calendar
// } from "lucide-react";

// function Dashboard() {
//   const [trip, setTrip] = useState(null);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   authFetch("/api/trips")
//   //     .then(data => {
//   //       if (data?.length) setTrip(data[0]);
//   //     })
//   //     .catch(console.error);
//   // }, []);
// useEffect(() => {
//   const fetchTrips = async () => {
//     try {
//       const data = await authFetch("/api/trips");

//       console.log("Trips response:", data);

//       if (data && data.length > 0) {
//         setTrip(data[0]);
//       }

//     } catch (err) {
//       console.error("Dashboard fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchTrips();
// }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
//         <div className="flex flex-col items-center gap-3">
//           <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin" />
//           <p className="text-sm text-slate-500">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#FAFAFA] px-6 py-8">
//       <div className="max-w-6xl mx-auto space-y-10">

//         {/* ───────── TOP BAR ───────── */}
//         <header className="flex flex-col sm:flex-row justify-between gap-6">
//           <div>
//             <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
//               Dashboard
//             </h1>
//             <p className="text-sm text-slate-500 mt-1">
//               Welcome back, traveler
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <Link
//               to="/trips"
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border text-sm font-medium text-slate-700 hover:bg-slate-50"
//             >
//               <LayoutGrid size={16} /> My Trips
//             </Link>

//             <Link
//               to="/create"
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
//             >
//               <Plus size={16} /> Create Trip
//             </Link>

//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border text-sm font-medium text-red-600 hover:bg-red-50"
//             >
//               <LogOut size={16} /> Logout
//             </button>
//           </div>
//         </header>

//         {/* ───────── ACTIVE TRIP SUMMARY ───────── */}
//         <section className="bg-white border rounded-2xl p-6 space-y-4">
//           <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
//             Active Trip
//           </h2>

//           <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
//             <MapPin size={18} /> {trip.destination}
//           </h3>

//           <p className="text-sm text-slate-500 flex items-center gap-2">
//             <Calendar size={16} />
//             {trip.startDate} → {trip.endDate}
//           </p>

//           <button
//             onClick={() => navigate(`/trip/${trip.id}`)}
//             className="text-sm font-medium text-blue-600 hover:underline"
//           >
//             View Trip Details →
//           </button>
//         </section>

//         {/* ───────── INFO GRID ───────── */}
//         <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">

//           <InfoCard
//             title="Weather"
//             value="28°C"
//             icon={<CloudSun />}
//           />

//           <InfoCard
//             title="Journey Status"
//             value={trip.dayInfo || "Ready to begin"}
//             icon={<Clock />}
//           />

//           <InfoCard
//             title="Progress"
//             value="On Track"
//             icon={<CheckCircle2 />}
//           />

//         </section>

//         {/* ───────── DETAILS ───────── */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           <SimpleCard title="Today’s Plan">
//             <p className="text-sm text-slate-700">
//               {trip.todaysPlan || "No plan added yet."}
//             </p>
//           </SimpleCard>

//           <SimpleCard title="Pending Checklist">
//             {(!trip.pendingChecklist || trip.pendingChecklist.length === 0) ? (
//               <p className="text-sm text-emerald-600 font-medium">
//                 Fully packed ✔
//               </p>
//             ) : (
//               <ul className="space-y-2">
//                 {trip.pendingChecklist.slice(0, 4).map((item, i) => (
//                   <li key={i} className="text-sm text-slate-600">
//                     • {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </SimpleCard>

//         </section>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// /* ───────── SMALL COMPONENTS ───────── */

// function InfoCard({ title, value, icon }) {
//   return (
//     <div className="bg-white border rounded-2xl p-5 flex items-center gap-4">
//       <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
//         {icon}
//       </div>
//       <div>
//         <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
//           {title}
//         </p>
//         <p className="font-semibold text-slate-800 mt-1">
//           {value}
//         </p>
//       </div>
//     </div>
//   );
// }

// function SimpleCard({ title, children }) {
//   return (
//     <div className="bg-white border rounded-2xl p-6">
//       <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
//         {title}
//       </p>
//       {children}
//     </div>
//   );
// }




import { useEffect, useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import { authFetch } from "../api/api";

import {
  Sparkles,
  Plus,
  Calendar,
  MapPin,
  LogOut,
  ArrowUpRight
} from "lucide-react";

function Dashboard() {

  const [trips, setTrips] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchTrips = async () => {

      try {

        const data = await authFetch("/api/trips");

        setTrips(
          Array.isArray(data)
            ? data
            : []
        );

      } catch (err) {

        console.error(err);

        setTrips([]);

      } finally {

        setLoading(false);
      }
    };

    fetchTrips();

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen bg-[#f6f7fb] flex items-center justify-center">

        <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin"></div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-[#f6f7fb]">

      {/* TOPBAR */}

      <header className="bg-white border-b border-slate-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          <div>

            <h1 className="text-lg font-semibold text-slate-900 tracking-tight">
              Travel Planner
            </h1>

          </div>

          <div className="flex items-center gap-3">

            <Link
              to="/trips"
              className="text-sm px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"
            >
              My Trips
            </Link>

            <button
              onClick={handleLogout}
              className="text-sm px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {/* CONTENT */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* HEADER */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">

              Welcome back

            </h2>

            <p className="text-slate-500 mt-2">

              Manage your journeys and plan smarter trips.

            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() =>
                navigate("/ai-planner")
              }
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl shadow-sm transition"
            >

              <Sparkles size={17} />

              AI Planner

            </button>

            <button
              onClick={() =>
                navigate("/create")
              }
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-5 py-3 rounded-2xl transition"
            >

              <Plus size={17} />

              New Trip

            </button>

          </div>

        </div>

        {/* STATS */}

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

          <StatCard
            title="Total Trips"
            value={trips.length}
          />

          <StatCard
            title="Upcoming"
            value={
              trips.filter(
                trip =>
                  new Date(
                    trip.startDate
                  ) > new Date()
              ).length
            }
          />

          <StatCard
            title="Completed"
            value={
              trips.filter(
                trip =>
                  new Date(
                    trip.endDate
                  ) < new Date()
              ).length
            }
          />

          <StatCard
            title="Planned Days"
            value={trips.length * 3}
          />

        </section>

        {/* RECENT TRIPS */}

        <section className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">

          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">

            <div>

              <h3 className="text-lg font-semibold text-slate-900">
                Recent Trips
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Your latest planned journeys
              </p>

            </div>

            <Link
              to="/trips"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
            >
              View all
            </Link>

          </div>

          {!trips.length ? (

            <div className="p-12 text-center">

              <p className="text-slate-500 mb-6">
                No trips created yet
              </p>

              <button
                onClick={() =>
                  navigate("/create")
                }
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition"
              >
                Create Trip
              </button>

            </div>

          ) : (

            <div>

              {trips.slice(0, 5).map((trip) => (

                <div
                  key={trip.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 px-6 py-5 border-b border-slate-100 last:border-none hover:bg-slate-50 transition"
                >

                  <div>

                    <div className="flex items-center gap-2 text-sm font-medium text-slate-800">

                      <MapPin size={15} />

                      {trip.destination}

                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">

                      <Calendar size={14} />

                      {trip.startDate}
                      {" — "}
                      {trip.endDate}

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      navigate(`/trip/${trip.id}`)
                    }
                    className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition"
                  >

                    Open Trip

                    <ArrowUpRight size={15} />

                  </button>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>

  );
}

export default Dashboard;

// STATS CARD

function StatCard({
  title,
  value
}) {

  return (

    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">

      <p className="text-sm text-slate-500 mb-2">
        {title}
      </p>

      <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </h3>

    </div>

  );
}