// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function FavoritePlaces({ tripId }) {
//   const [places, setPlaces] = useState([]);
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState("");

//   const loadPlaces = () => {
// authFetch(`/api/places/${tripId}`)
//   .then(data => setPlaces(Array.isArray(data) ? data : []));
//   }

//   useEffect(() => {
//     loadPlaces();
//   }, [tripId]);

//   const addPlace = async () => {
//     if (!name) return alert("Enter place name");

//     await fetch(
//       `http://localhost:8080/api/places/${tripId}?name=${name}&notes=${notes}`,
//       { method: "POST" }
//     );

//     setName("");
//     setNotes("");
//     loadPlaces();
//   };

//   const toggleVisited = async (placeId, visited) => {
//     await fetch(
//       `http://localhost:8080/api/places/${placeId}/visited?visited=${!visited}`,
//       { method: "PUT" }
//     );
//     loadPlaces();
//   };

//   return (
//     <div className="card">
//       <h2>⭐ Favorite / Must-Visit Places</h2>

//       <input
//         placeholder="Place name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />

//       <input
//         placeholder="Notes (optional)"
//         value={notes}
//         onChange={e => setNotes(e.target.value)}
//       />

//       <br /><br />
//       <button onClick={addPlace}>Add Place</button>

//       <hr />

//       {places.length === 0 && <p>No places added yet.</p>}

//       <ul>
//         {places.map(place => (
//           <li key={place.id}>
//             <input
//               type="checkbox"
//               checked={place.visited}
//               onChange={() => toggleVisited(place.id, place.visited)}
//             />
//             {" "}
//             <strong>{place.placeName}</strong>
//             {place.notes && ` — ${place.notes}`}
//             {place.visited && " ✔️"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FavoritePlaces;




// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function FavoritePlaces({ tripId }) {
//   const [places, setPlaces] = useState([]);
//   const [placeName, setPlaceName] = useState("");
//   const [notes, setNotes] = useState("");

//   const loadPlaces = async () => {
//     try {
//       const data = await authFetch(`/api/places/${tripId}`);
//       setPlaces(Array.isArray(data) ? data : []);
//     } catch {
//       setPlaces([]);
//     }
//   };

//   useEffect(() => {
//     if (tripId) loadPlaces();
//   }, [tripId]);

//   const addPlace = async () => {
//     if (!placeName) {
//       alert("Enter place name");
//       return;
//     }

//     await authFetch(`/api/places/${tripId}`, {
//       method: "POST",
//       body: JSON.stringify({
//         placeName,
//         notes
//       })
//     });

//     setPlaceName("");
//     setNotes("");
//     loadPlaces();
//   };

//   const toggleVisited = async (placeId, visited) => {
//     await authFetch(
//       `/api/places/${placeId}/visited?visited=${!visited}`,
//       { method: "PUT" }
//     );
//     loadPlaces();
//   };

//   const deletePlace = async (placeId) => {
//     await authFetch(`/api/places/${placeId}`, {
//       method: "DELETE"
//     });
//     loadPlaces();
//   };

//   return (
//     <div className="card">
//       <h2>⭐ Favorite / Must-Visit Places</h2>

//       <input
//         placeholder="Place name"
//         value={placeName}
//         onChange={(e) => setPlaceName(e.target.value)}
//       />

//       <input
//         placeholder="Notes (optional)"
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//       />

//       <br /><br />
//       <button onClick={addPlace}>Add Place</button>

//       <hr />

//       {places.length === 0 && <p>No places added yet.</p>}

//       <ul>
//         {places.map((place) => (
//           <li key={place.id}>
//             <input
//               type="checkbox"
//               checked={place.visited}
//               onChange={() =>
//                 toggleVisited(place.id, place.visited)
//               }
//             />
//             {" "}
//             <strong>{place.placeName}</strong>
//             {place.notes && ` — ${place.notes}`}
//             {place.visited && " ✔️"}

//             <button
//               style={{ marginLeft: "10px", color: "red" }}
//               onClick={() => deletePlace(place.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FavoritePlaces;



// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";
// import { MapPin, CheckCircle2, Circle, Trash2, Plus, Sparkles } from "lucide-react";

// function FavoritePlaces({ tripId }) {
//   const [places, setPlaces] = useState([]);
//   const [placeName, setPlaceName] = useState("");
//   const [notes, setNotes] = useState("");

//   const loadPlaces = async () => {
//     try {
//       const data = await authFetch(`/api/places/${tripId}`);
//       setPlaces(Array.isArray(data) ? data : []);
//     } catch {
//       setPlaces([]);
//     }
//   };

//   useEffect(() => {
//     if (tripId) loadPlaces();
//   }, [tripId]);

//   const addPlace = async () => {
//     if (!placeName) return;
//     await authFetch(`/api/places/${tripId}`, {
//       method: "POST",
//       body: JSON.stringify({ placeName, notes })
//     });
//     setPlaceName("");
//     setNotes("");
//     loadPlaces();
//   };

//   const toggleVisited = async (placeId, visited) => {
//     await authFetch(`/api/places/${placeId}/visited?visited=${!visited}`, { method: "PUT" });
//     loadPlaces();
//   };

//   const deletePlace = async (placeId) => {
//     await authFetch(`/api/places/${placeId}`, { method: "DELETE" });
//     loadPlaces();
//   };

//   return (
//     <div className="space-y-10 animate-in fade-in duration-700">
      
//       {/* --- HEADER --- */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
//         <div>
//           <h2 className="text-4xl font-black tracking-tighter">The Bucket List.</h2>
//           <p className="text-slate-400 font-serif italic mt-2">Curated spots for this journey.</p>
//         </div>
        
//         {/* --- INLINE ADD FORM --- */}
//         <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-50">
//           <input
//             className="px-4 py-2 text-sm font-medium outline-none w-40 md:w-56"
//             placeholder="Search or add place..."
//             value={placeName}
//             onChange={(e) => setPlaceName(e.target.value)}
//           />
//           <input
//             className="hidden md:block px-4 py-2 text-sm text-slate-400 outline-none w-40 border-l border-slate-100"
//             placeholder="Short note..."
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//           />
//           <button 
//             onClick={addPlace}
//             className="bg-slate-900 text-white p-2.5 rounded-xl hover:bg-blue-600 transition-all active:scale-90"
//           >
//             <Plus size={18} />
//           </button>
//         </div>
//       </div>

//       {/* --- PLACES GRID --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {places.length === 0 ? (
//           <div className="col-span-full py-20 text-center rounded-[3rem] border-2 border-dashed border-slate-100 bg-white/50">
//             <Sparkles className="mx-auto text-slate-200 mb-4" size={32} />
//             <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">No spots discovered yet</p>
//           </div>
//         ) : (
//           places.map((place) => (
//             <div 
//               key={place.id}
//               className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 border ${
//                 place.visited 
//                 ? "bg-slate-50 border-transparent" 
//                 : "bg-white border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
//               }`}
//             >
//               <button 
//                 onClick={() => toggleVisited(place.id, place.visited)}
//                 className={`absolute top-6 right-6 transition-colors ${
//                   place.visited ? "text-emerald-500" : "text-slate-200 hover:text-blue-500"
//                 }`}
//               >
//                 {place.visited ? <CheckCircle2 size={24} /> : <Circle size={24} />}
//               </button>

//               <div className="flex flex-col h-full">
//                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
//                   <MapPin size={12} className={place.visited ? "text-emerald-400" : "text-blue-400"} />
//                   {place.visited ? "Checked Off" : "To Discover"}
//                 </div>

//                 <h3 className={`text-xl font-black tracking-tight mb-3 ${place.visited ? "text-slate-400 line-through decoration-2" : "text-slate-900"}`}>
//                   {place.placeName}
//                 </h3>

//                 {place.notes && (
//                   <p className={`text-sm leading-relaxed mb-8 ${place.visited ? "text-slate-300" : "text-slate-500"}`}>
//                     {place.notes}
//                   </p>
//                 )}

//                 <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-50/50">
//                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Ref: #{place.id.toString().slice(-4)}</span>
//                    <button 
//                     onClick={() => deletePlace(place.id)}
//                     className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-rose-500 transition-all"
//                    >
//                      <Trash2 size={16} />
//                    </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default FavoritePlaces;



import { useEffect, useState } from "react";

import {
  MapPin,
  Plus,
  Trash2,
  CheckCircle2,
  Circle
} from "lucide-react";

import { authFetch } from "../api/api";

function FavoritePlaces({ tripId }) {

  const [places, setPlaces] = useState([]);

  const [placeName, setPlaceName] = useState("");

  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // LOAD
  const loadPlaces = async () => {

    try {

      setLoading(true);

      const data = await authFetch(
        `/api/places/${tripId}`
      );

      setPlaces(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (err) {

      console.error(err);

      setError("Failed to load places");

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    if (tripId) {
      loadPlaces();
    }

  }, [tripId]);

  // ADD
  const addPlace = async () => {

    if (!placeName.trim()) {
      return;
    }

    try {

      const saved = await authFetch(

        `/api/places/${tripId}`,

        {
          method: "POST",

          body: JSON.stringify({
            placeName,
            notes
          })
        }
      );

      setPlaces(prev => [

        ...prev,

        saved || {
          id: Date.now(),
          placeName,
          notes,
          visited: false
        }

      ]);

      setPlaceName("");

      setNotes("");

    } catch (err) {

      console.error(err);

      setError("Failed to add place");
    }
  };

  // TOGGLE
  const toggleVisited = async (
    placeId,
    visited
  ) => {

    try {

      await authFetch(

        `/api/places/${placeId}/visited?visited=${!visited}`,

        {
          method: "PUT"
        }
      );

      setPlaces(prev =>
        prev.map(place =>
          place.id === placeId
            ? {
                ...place,
                visited: !visited
              }
            : place
        )
      );

    } catch (err) {

      console.error(err);

      setError("Failed to update place");
    }
  };

  // DELETE
  const deletePlace = async (
    placeId
  ) => {

    try {

      await authFetch(
        `/api/places/${placeId}`,
        {
          method: "DELETE"
        }
      );

      setPlaces(prev =>
        prev.filter(
          place => place.id !== placeId
        )
      );

    } catch (err) {

      console.error(err);

      setError("Failed to delete place");
    }
  };

  // LOADING
  if (loading) {

    return (

      <div className="text-slate-500">
        Loading places...
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

        <input
          type="text"
          placeholder="Add favorite place"
          value={placeName}
          onChange={(e) =>
            setPlaceName(e.target.value)
          }
          className="w-full border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Short note"
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            className="flex-1 border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={addPlace}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl font-semibold transition"
          >

            <Plus size={16} />

            Add

          </button>

        </div>

      </div>

      {/* EMPTY */}

      {!places.length ? (

        <div className="border border-dashed border-slate-200 rounded-2xl p-10 text-center">

          <MapPin
            size={34}
            className="mx-auto text-slate-300 mb-3"
          />

          <p className="text-slate-500">
            No favorite places added yet
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {places.map(place => (

            <div
              key={place.id}
              className={`border rounded-2xl p-5 transition ${
                place.visited
                  ? "bg-slate-50 border-slate-100"
                  : "bg-white border-slate-200"
              }`}
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex gap-3 flex-1">

                  <button
                    onClick={() =>
                      toggleVisited(
                        place.id,
                        place.visited
                      )
                    }
                    className="mt-1"
                  >

                    {place.visited ? (

                      <CheckCircle2
                        size={22}
                        className="text-emerald-500"
                      />

                    ) : (

                      <Circle
                        size={22}
                        className="text-slate-300 hover:text-indigo-500"
                      />

                    )}

                  </button>

                  <div>

                    <h3
                      className={`font-bold text-lg ${
                        place.visited
                          ? "line-through text-slate-400"
                          : "text-slate-900"
                      }`}
                    >

                      {place.placeName}

                    </h3>

                    {place.notes && (

                      <p
                        className={`text-sm mt-1 ${
                          place.visited
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >

                        {place.notes}

                      </p>

                    )}

                  </div>

                </div>

                <button
                  onClick={() =>
                    deletePlace(place.id)
                  }
                  className="text-slate-300 hover:text-red-500 transition"
                >

                  <Trash2 size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default FavoritePlaces;