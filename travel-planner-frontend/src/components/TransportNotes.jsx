// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function TransportNotes({ tripId }) {
//   const [notes, setNotes] = useState([]);
//   const [type, setType] = useState("");
//   const [details, setDetails] = useState("");

//   const loadNotes = () => {
// authFetch(`/api/transport/${tripId}`)
//   .then(data => setNotes(Array.isArray(data) ? data : []));
//   }

//   useEffect(() => {
//     loadNotes();
//   }, [tripId]);

//   const addNote = async () => {
//     if (!type || !details) return alert("Fill all fields");

// authFetch(`/api/transport/${tripId}?type=${type}&details=${details}`, {
//   method: "POST",
// });


//     setType("");
//     setDetails("");
//     loadNotes();
//   };

//   return (
//     <div>
//       <h3>Add Transport Note</h3>

//       <select value={type} onChange={e => setType(e.target.value)}>
//         <option value="">Select Type</option>
//         <option value="FLIGHT">Flight</option>
//         <option value="TRAIN">Train</option>
//         <option value="BUS">Bus</option>
//       </select>

//       <br /><br />

//       <input
//         placeholder="Details"
//         value={details}
//         onChange={e => setDetails(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={addNote}>Add</button>

//       <h3>Transport Notes</h3>

//       <ul>
// {Array.isArray(notes) && notes.map(note => (
//           <li key={note.id}>
//             <strong>{note.transportType}</strong> — {note.details}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TransportNotes;



// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function TransportNotes({ tripId }) {
//   const [notes, setNotes] = useState([]);
//   const [transportType, setTransportType] = useState("");
//   const [details, setDetails] = useState("");

//   const loadNotes = async () => {
//     try {
//       const data = await authFetch(`/api/transport/${tripId}`);
//       setNotes(Array.isArray(data) ? data : []);
//     } catch {
//       setNotes([]);
//     }
//   };

//   useEffect(() => {
//     if (tripId) loadNotes();
//   }, [tripId]);

//   const addNote = async () => {
//     if (!transportType || !details) {
//       alert("Please fill all fields");
//       return;
//     }

//     await authFetch(`/api/transport/${tripId}`, {
//       method: "POST",
//       body: JSON.stringify({
//         transportType,
//         details
//       })
//     });

//     setTransportType("");
//     setDetails("");
//     loadNotes();
//   };

//   const deleteNote = async (noteId) => {
//     await authFetch(`/api/transport/note/${noteId}`, {
//       method: "DELETE"
//     });
//     loadNotes();
//   };

//   return (
//     <div className="card">
//       <h3>🚆 Transport Notes</h3>

//       <div style={{ marginBottom: "10px" }}>
//         <select
//           value={transportType}
//           onChange={(e) => setTransportType(e.target.value)}
//         >
//           <option value="">Select Type</option>
//           <option value="FLIGHT">✈️ Flight</option>
//           <option value="TRAIN">🚆 Train</option>
//           <option value="BUS">🚌 Bus</option>
//         </select>

//         <input
//           style={{ marginLeft: "10px" }}
//           placeholder="PNR / timing / details"
//           value={details}
//           onChange={(e) => setDetails(e.target.value)}
//         />

//         <button style={{ marginLeft: "10px" }} onClick={addNote}>
//           Add
//         </button>
//       </div>

//       {notes.length === 0 ? (
//         <p>No transport notes added</p>
//       ) : (
//         <ul>
//           {notes.map((note) => (
//             <li key={note.id}>
//               <strong>{note.transportType}</strong> — {note.details}
//               <button
//                 style={{ marginLeft: "10px", color: "red" }}
//                 onClick={() => deleteNote(note.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default TransportNotes;


// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";
// import { Plane, Train, Bus, Trash2, Plus, Ticket, ArrowRight } from "lucide-react";

// function TransportNotes({ tripId }) {
//   const [notes, setNotes] = useState([]);
//   const [transportType, setTransportType] = useState("");
//   const [details, setDetails] = useState("");

//   const loadNotes = async () => {
//     try {
//       const data = await authFetch(`/api/transport/${tripId}`);
//       setNotes(Array.isArray(data) ? data : []);
//     } catch {
//       setNotes([]);
//     }
//   };

//   useEffect(() => {
//     if (tripId) loadNotes();
//   }, [tripId]);

//   const addNote = async () => {
//     if (!transportType || !details) return;
//     await authFetch(`/api/transport/${tripId}`, {
//       method: "POST",
//       body: JSON.stringify({ transportType, details })
//     });
//     setTransportType("");
//     setDetails("");
//     loadNotes();
//   };

//   const deleteNote = async (noteId) => {
//     await authFetch(`/api/transport/note/${noteId}`, { method: "DELETE" });
//     loadNotes();
//   };

//   const getIcon = (type) => {
//     switch (type) {
//       case "FLIGHT": return <Plane size={20} />;
//       case "TRAIN": return <Train size={20} />;
//       case "BUS": return <Bus size={20} />;
//       default: return <Ticket size={20} />;
//     }
//   };

//   return (
//     <div className="space-y-8 animate-in fade-in duration-700">
//       <div className="flex items-center justify-between border-b border-slate-100 pb-4">
//         <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
//           <Ticket className="text-blue-600" size={24} /> 
//           Transit Logistics
//         </h3>
//       </div>

//       {/* --- INPUT AREA: MINIMALIST ROW --- */}
//       <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-[1.5rem] border border-slate-100 shadow-sm transition-all focus-within:shadow-md">
//         <select
//           className="bg-slate-50 border-none outline-none text-xs font-black uppercase tracking-widest p-3 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors"
//           value={transportType}
//           onChange={(e) => setTransportType(e.target.value)}
//         >
//           <option value="">Mode</option>
//           <option value="FLIGHT">Flight</option>
//           <option value="TRAIN">Train</option>
//           <option value="BUS">Bus</option>
//         </select>

//         <input
//           className="flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder:text-slate-300"
//           placeholder="Flight number, gate, or seat..."
//           value={details}
//           onChange={(e) => setDetails(e.target.value)}
//         />

//         <button 
//           onClick={addNote}
//           className="bg-slate-900 text-white p-3 rounded-xl hover:bg-blue-600 transition-all active:scale-95"
//         >
//           <Plus size={18} />
//         </button>
//       </div>

//       {/* --- LIST AREA: TICKET STUBS --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {notes.length === 0 ? (
//           <div className="col-span-full py-10 text-center rounded-[2rem] border-2 border-dashed border-slate-50">
//             <p className="text-slate-300 font-serif italic">No transit details logged yet.</p>
//           </div>
//         ) : (
//           notes.map((note) => (
//             <div 
//               key={note.id} 
//               className="group flex items-center justify-between bg-white border border-slate-100 p-6 rounded-[2rem] hover:border-blue-200 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-50/50"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
//                   {getIcon(note.transportType)}
//                 </div>
//                 <div>
//                   <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
//                     {note.transportType}
//                   </div>
//                   <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
//                     {note.details}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={() => deleteNote(note.id)}
//                 className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-rose-500 transition-all hover:bg-rose-50 rounded-lg"
//               >
//                 <Trash2 size={16} />
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="pt-4 flex items-center gap-2 text-slate-400">
//         <ArrowRight size={14} />
//         <span className="text-[10px] font-bold uppercase tracking-widest">Safe Travels</span>
//       </div>
//     </div>
//   );
// }

// export default TransportNotes;



import { useEffect, useState } from "react";

import {
  Plane,
  Train,
  Bus,
  Ticket,
  Trash2,
  Plus
} from "lucide-react";

import { authFetch } from "../api/api";

function TransportNotes({ tripId }) {

  const [notes, setNotes] = useState([]);

  const [transportType, setTransportType] = useState("");

  const [details, setDetails] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // LOAD
  const loadNotes = async () => {

    try {

      setLoading(true);

      const data = await authFetch(
        `/api/transport/${tripId}`
      );

      setNotes(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (err) {

      console.error(err);

      setError(
        "Failed to load transport notes"
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    if (tripId) {
      loadNotes();
    }

  }, [tripId]);

  // ADD
  const addNote = async () => {

    if (
      !transportType ||
      !details.trim()
    ) {
      return;
    }

    try {

      const saved = await authFetch(

        `/api/transport/${tripId}`,

        {
          method: "POST",

          body: JSON.stringify({
            transportType,
            details
          })
        }
      );

      setNotes(prev => [

        ...prev,

        saved || {
          id: Date.now(),
          transportType,
          details
        }

      ]);

      setTransportType("");

      setDetails("");

    } catch (err) {

      console.error(err);

      setError(
        "Failed to add note"
      );
    }
  };

  // DELETE
  const deleteNote = async (
    noteId
  ) => {

    try {

      await authFetch(

        `/api/transport/note/${noteId}`,

        {
          method: "DELETE"
        }
      );

      setNotes(prev =>
        prev.filter(
          note => note.id !== noteId
        )
      );

    } catch (err) {

      console.error(err);

      setError(
        "Failed to delete note"
      );
    }
  };

  // ICON
  const getIcon = (type) => {

    switch (type) {

      case "FLIGHT":
        return <Plane size={18} />;

      case "TRAIN":
        return <Train size={18} />;

      case "BUS":
        return <Bus size={18} />;

      default:
        return <Ticket size={18} />;
    }
  };

  // LOADING
  if (loading) {

    return (

      <div className="text-slate-500">
        Loading transport notes...
      </div>

    );
  }

  return (

    <div>

      {/* ERROR */}

      {error && (

        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm mb-5">
          {error}
        </div>

      )}

      {/* FORM */}

      <div className="space-y-3 mb-8">

        <select
          value={transportType}
          onChange={(e) =>
            setTransportType(e.target.value)
          }
          className="w-full border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        >

          <option value="">
            Select Transport Type
          </option>

          <option value="FLIGHT">
            Flight
          </option>

          <option value="TRAIN">
            Train
          </option>

          <option value="BUS">
            Bus
          </option>

        </select>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Flight number, seat, timing..."
            value={details}
            onChange={(e) =>
              setDetails(e.target.value)
            }
            className="flex-1 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={addNote}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl font-semibold transition"
          >

            <Plus size={16} />

            Add

          </button>

        </div>

      </div>

      {/* EMPTY */}

      {!notes.length ? (

        <div className="border border-dashed border-slate-200 rounded-2xl p-10 text-center">

          <Ticket
            size={34}
            className="mx-auto text-slate-300 mb-3"
          />

          <p className="text-slate-500">
            No transport notes added yet
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {notes.map(note => (

            <div
              key={note.id}
              className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4"
            >

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-indigo-600">

                  {getIcon(note.transportType)}

                </div>

                <div>

                  <p className="text-sm font-bold text-slate-800">

                    {note.transportType}

                  </p>

                  <p className="text-sm text-slate-500 mt-1">

                    {note.details}

                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  deleteNote(note.id)
                }
                className="text-slate-300 hover:text-red-500 transition"
              >

                <Trash2 size={18} />

              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default TransportNotes;