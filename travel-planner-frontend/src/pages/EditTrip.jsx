// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function EditTrip() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [trip, setTrip] = useState({
//     destination: "",
//     startDate: "",
//     endDate: "",
//     tripType: ""
//   });

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/trips/${id}`)
//       .then(res => res.json())
//       .then(data => setTrip(data));
//   }, [id]);

//   const handleChange = (e) => {
//     setTrip({ ...trip, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch(`http://localhost:8080/api/trips/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(trip)
//     }).then(() => navigate("/trips"));
//   };

//   return (
//     <div>
//       <h1>Edit Trip</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="destination"
//           value={trip.destination}
//           onChange={handleChange}
//           placeholder="Destination"
//           required
//         />

//         <input
//           type="date"
//           name="startDate"
//           value={trip.startDate}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="date"
//           name="endDate"
//           value={trip.endDate}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="tripType"
//           value={trip.tripType}
//           onChange={handleChange}
//           placeholder="Trip type (beach, city...)"
//         />

//         <button type="submit">Update Trip</button>
//       </form>
//     </div>
//   );
// }

// export default EditTrip;



import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Globe, Calendar, Tag, Trash2 } from "lucide-react";
import { authFetch } from "../api/api";
function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    tripType: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Note: Switched to localhost:8080 as per your source code
    authFetch(`/api/trips/${id}`)
      .then(res => res.json())
      .then(data => {
        setTrip(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch failed", err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await authFetch(`/api/trips/${id}`, {
      method: "PUT",
      body: JSON.stringify(trip)
    });

    navigate(`/trip/${id}`);

  } catch (err) {

    console.error(err);
    alert("Failed to update trip");

  }
};

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-[#FAF9F6]">
      <div className="text-xs font-black uppercase tracking-[0.4em] text-slate-300 animate-pulse">
        Retrieving Manifest...
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-blue-100">
      
      {/* --- MINIMAL HEADER --- */}
      <nav className="p-8 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-all"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Discard Changes
        </button>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Editing Mode</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-8 py-12">
        <header className="mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Update Trip Details</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight mt-2">
            Refine your <br /> Journey.
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12 pb-32">
          
          {/* Destination */}
          <div className="group space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-blue-600 transition-colors">
              Destination
            </label>
            <div className="flex items-center gap-4 border-b-2 border-slate-100 group-focus-within:border-slate-900 transition-all pb-4">
              <Globe className="text-slate-300" size={24} />
              <input
                name="destination"
                value={trip.destination}
                onChange={handleChange}
                placeholder="Where to?"
                className="w-full bg-transparent text-3xl font-bold outline-none placeholder:text-slate-200"
                required
              />
            </div>
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-blue-600 transition-colors">
                Departure
              </label>
              <div className="flex items-center gap-4 border-b-2 border-slate-100 group-focus-within:border-slate-900 transition-all pb-4">
                <Calendar className="text-slate-300" size={20} />
                <input
                  type="date"
                  name="startDate"
                  value={trip.startDate}
                  onChange={handleChange}
                  className="w-full bg-transparent text-xl font-bold outline-none"
                  required
                />
              </div>
            </div>

            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-blue-600 transition-colors">
                Return
              </label>
              <div className="flex items-center gap-4 border-b-2 border-slate-100 group-focus-within:border-slate-900 transition-all pb-4">
                <Calendar className="text-slate-300" size={20} />
                <input
                  type="date"
                  name="endDate"
                  value={trip.endDate}
                  onChange={handleChange}
                  className="w-full bg-transparent text-xl font-bold outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Trip Type */}
          <div className="group space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-blue-600 transition-colors">
              Vibe / Category
            </label>
            <div className="flex items-center gap-4 border-b-2 border-slate-100 group-focus-within:border-slate-900 transition-all pb-4">
              <Tag className="text-slate-300" size={20} />
              <input
                name="tripType"
                value={trip.tripType}
                onChange={handleChange}
                placeholder="Ex: Architecture Tour, Surf Trip..."
                className="w-full bg-transparent text-xl font-bold outline-none placeholder:text-slate-200"
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-12 flex flex-col md:flex-row items-center gap-6">
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full font-black text-sm hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-200"
            >
              <Save size={18} />
              Save Changes
            </button>
            
            <button
              type="button"
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-5 rounded-full font-bold text-xs text-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
            >
              <Trash2 size={16} />
              Delete Trip
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditTrip;