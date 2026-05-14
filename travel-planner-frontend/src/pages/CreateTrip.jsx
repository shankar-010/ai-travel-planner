// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";

// function CreateTrip() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     destination: "",
//     startDate: "",
//     endDate: "",
//     tripType: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const token = localStorage.getItem("token");

//     await fetch("http://localhost:8080/api/trips", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify(form),
//     });

//     // navigate("/trips"); // go to My Trips after creation
//     navigate(`/trip/${trip.id}`);

//   } catch (err) {
//     console.error("Create trip failed", err);
//   }
// };


//   return (
//     <div>
//       <h1>Create Trip</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="destination"
//           placeholder="Destination"
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="date"
//           name="startDate"
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="date"
//           name="endDate"
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           name="tripType"
//           placeholder="Trip Type (beach, work...)"
//           onChange={handleChange}
//         /><br /><br />

//         <button>Create</button>
//       </form>
//     </div>
//   );
// }

// export default CreateTrip;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { authFetch } from "../api/api";

// function CreateTrip() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     destination: "",
//     startDate: "",
//     endDate: "",
//     tripType: ""
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await authFetch("/api/trips", {
//         method: "POST",
//         body: JSON.stringify(form)
//       });

//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Create trip failed", err);
//       alert("Failed to create trip");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "40px auto" }}>
//       <h1>Create Trip</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="destination"
//           placeholder="Destination"
//           value={form.destination}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="date"
//           name="startDate"
//           value={form.startDate}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           type="date"
//           name="endDate"
//           value={form.endDate}
//           onChange={handleChange}
//           required
//         /><br /><br />

//         <input
//           name="tripType"
//           placeholder="Trip Type (beach, work...)"
//           value={form.tripType}
//           onChange={handleChange}
//         /><br /><br />

//         <button type="submit">Create Trip</button>
//       </form>
//     </div>
//   );
// }

// export default CreateTrip;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { authFetch } from "../api/api";
// import { ArrowLeft, Compass, Calendar, Plane, Send, Sparkles } from "lucide-react";

// function CreateTrip() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     destination: "",
//     startDate: "",
//     endDate: "",
//     tripType: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await authFetch("/api/trips", {
//         method: "POST",
//         body: JSON.stringify(form)
//       });
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Create trip failed", err);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-blue-100">
      
//       {/* --- TOP BAR --- */}
//       <nav className="p-8 flex items-center justify-between">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-slate-400 hover:text-slate-900"
//         >
//           <ArrowLeft size={24} />
//         </button>
//         <div className="flex items-center gap-2">
//            <Sparkles className="text-blue-600" size={20} />
//            <span className="text-xs font-black uppercase tracking-[0.3em]">Drafting Adventure</span>
//         </div>
//         <div className="w-10" /> {/* Spacer */}
//       </nav>

//       <main className="max-w-3xl mx-auto px-8 py-12">
//         <header className="mb-16">
//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
//             Where to <br /> Next?
//           </h1>
//           <p className="mt-6 text-slate-400 font-medium text-lg italic font-serif">
//             The first step of every journey is a single detail.
//           </p>
//         </header>

//         <form onSubmit={handleSubmit} className="space-y-12 pb-24">
          
//           {/* Destination Field */}
//           <div className="group relative">
//             <label className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 block">
//               The Destination
//             </label>
//             <div className="flex items-center gap-4 border-b-2 border-slate-200 group-focus-within:border-slate-900 transition-colors pb-4">
//               <Compass className="text-slate-300 group-focus-within:text-blue-600 transition-colors" size={28} />
//               <input
//                 name="destination"
//                 autoFocus
//                 placeholder="Ex: Kyoto, Japan"
//                 value={form.destination}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent text-3xl font-bold outline-none placeholder:text-slate-200"
//               />
//             </div>
//           </div>

//           {/* Dates Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div className="group relative">
//               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-blue-600 transition-colors">
//                 Departure
//               </label>
//               <div className="flex items-center gap-4 border-b-2 border-slate-200 group-focus-within:border-slate-900 transition-colors pb-4">
//                 <Calendar className="text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={form.startDate}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent text-xl font-bold outline-none"
//                 />
//               </div>
//             </div>

//             <div className="group relative">
//               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-blue-600 transition-colors">
//                 Return
//               </label>
//               <div className="flex items-center gap-4 border-b-2 border-slate-200 group-focus-within:border-slate-900 transition-colors pb-4">
//                 <Calendar className="text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={form.endDate}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent text-xl font-bold outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Trip Type */}
//           <div className="group relative">
//             <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-blue-600 transition-colors">
//               Nature of the Trip
//             </label>
//             <div className="flex items-center gap-4 border-b-2 border-slate-200 group-focus-within:border-slate-900 transition-colors pb-4">
//               <Plane className="text-slate-300 group-focus-within:text-blue-600 transition-colors" size={24} />
//               <input
//                 name="tripType"
//                 placeholder="Ex: Solo Adventure, Work Retreat"
//                 value={form.tripType}
//                 onChange={handleChange}
//                 className="w-full bg-transparent text-xl font-bold outline-none placeholder:text-slate-200"
//               />
//             </div>
//           </div>

//           {/* SUBMIT BUTTON */}
//           <div className="pt-8">
//             <button
//               type="submit"
//               disabled={loading}
//               className="group flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 shadow-2xl shadow-blue-100"
//             >
//               {loading ? "Creating..." : (
//                 <>
//                   Register Journey
//                   <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default CreateTrip;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  MapPin,
  Calendar,
  Briefcase,
  Plus
} from "lucide-react";

import { authFetch } from "../api/api";

function CreateTrip() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    tripType: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setError("");
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDATION
    if (
      new Date(form.endDate) <
      new Date(form.startDate)
    ) {

      setError(
        "End date cannot be before start date."
      );

      return;
    }

    try {

      setLoading(true);

      await authFetch("/api/trips", {

        method: "POST",

        body: JSON.stringify(form)

      });

      navigate("/dashboard");

    } catch (err) {

      console.error(err);

      setError(
        "Failed to create trip."
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-3xl mx-auto">

        {/* TOP BAR */}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 mb-8 font-medium transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Create New Trip
          </h1>

          <p className="text-slate-500">
            Plan your next journey with ease
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8 space-y-8"
        >

          {/* ERROR */}

          {error && (

            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm">
              {error}
            </div>

          )}

          {/* DESTINATION */}

          <div>

            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
              <MapPin size={16} />
              Destination
            </label>

            <input
              type="text"
              name="destination"
              placeholder="Goa"
              value={form.destination}
              onChange={handleChange}
              required
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>

          {/* DATES */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <Calendar size={16} />
                Start Date
              </label>

              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
                className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            <div>

              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <Calendar size={16} />
                End Date
              </label>

              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
                className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

          </div>

          {/* TRIP TYPE */}

          <div>

            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
              <Briefcase size={16} />
              Trip Type
            </label>

            <input
              type="text"
              name="tripType"
              placeholder="Vacation / Work / Family"
              value={form.tripType}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition active:scale-95 disabled:opacity-70"
          >

            <Plus size={18} />

            {loading
              ? "Creating Trip..."
              : "Create Trip"}

          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateTrip;