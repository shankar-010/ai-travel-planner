// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function Timeline({ tripId }) {
//   const [days, setDays] = useState([]);

//   const loadTimeline = async () => {
//     try {
//       const data = await authFetch(`/api/timeline/${tripId}`);
//       setDays(Array.isArray(data) ? data : []);
//     } catch (err) {
//       console.error("Timeline error:", err);
//       setDays([]);
//     }
//   };

//   useEffect(() => {
//     if (tripId) loadTimeline();
//   }, [tripId]);

//   if (days.length === 0) {
//     return <p>No timeline generated yet.</p>;
//   }

//   return (
//     <ul>
//       {days.map(day => (
//         <li key={day.id}>
//           <strong>Day {day.dayNumber}:</strong>{" "}
//           {day.description}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Timeline;



// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function Timeline({ tripId, trip }) {
//   const [days, setDays] = useState([]);
//   const [editingDay, setEditingDay] = useState(null);
//   const [form, setForm] = useState({ title: "", description: "" });

//   useEffect(() => {
//     if (!tripId) return;

//     authFetch(`/api/timeline/${tripId}`)
//       .then(data => setDays(Array.isArray(data) ? data : []))
//       .catch(() => setDays([]));
//   }, [tripId]);

//   const todayIndex =
//     Math.floor(
//       (new Date() - new Date(trip.startDate)) / 86400000
//     ) + 1;

//   const startEdit = (day) => {
//     setEditingDay(day.id);
//     setForm({
//       title: day.title,
//       description: day.description
//     });
//   };

//   const saveEdit = async (dayId) => {
//     await authFetch(`/api/timeline/day/${dayId}`, {
//       method: "PUT",
//       body: JSON.stringify(form)
//     });

//     setEditingDay(null);

//     const updated = await authFetch(`/api/timeline/${tripId}`);
//     setDays(updated);
//   };

//   if (!days.length) {
//     return <p>No timeline generated yet.</p>;
//   }

//   return (
//     <div className="space-y-4">
//       {days.map(day => {
//         const isToday = day.dayNumber === todayIndex;

//         return (
//           <div
//             key={day.id}
//             className={`p-4 rounded-xl border-l-4 ${
//               isToday
//                 ? "bg-blue-50 border-blue-600"
//                 : "bg-white border-gray-300"
//             }`}
//           >
//             {editingDay === day.id ? (
//               <>
//                 <input
//                   className="w-full border p-2 rounded mb-2"
//                   value={form.title}
//                   onChange={e =>
//                     setForm({ ...form, title: e.target.value })
//                   }
//                 />

//                 <textarea
//                   className="w-full border p-2 rounded mb-2"
//                   value={form.description}
//                   onChange={e =>
//                     setForm({ ...form, description: e.target.value })
//                   }
//                 />

//                 <button
//                   onClick={() => saveEdit(day.id)}
//                   className="bg-blue-600 text-white px-4 py-1 rounded"
//                 >
//                   Save
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h4 className="font-semibold">
//                   Day {day.dayNumber}
//                   {isToday && (
//                     <span className="ml-2 text-sm text-blue-600">
//                       (Today)
//                     </span>
//                   )}
//                 </h4>

//                 <p className="text-gray-600 mt-1">
//                   {day.description}
//                 </p>

//                 <button
//                   onClick={() => startEdit(day)}
//                   className="text-sm text-blue-600 mt-2"
//                 >
//                   Edit
//                 </button>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Timeline;



// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function Timeline({ tripId, trip }) {

//   const [days, setDays] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [editingDay, setEditingDay] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: ""
//   });

//   // LOAD TIMELINE
//   const loadTimeline = async () => {

//     try {

//       setLoading(true);
//       setError("");

//       const data = await authFetch(
//         `/api/timeline/${tripId}`
//       );

//       console.log("Timeline:", data);

//       if (Array.isArray(data)) {
//         setDays(data);
//       } else {
//         setDays([]);
//       }

//     } catch (err) {

//       console.error("Timeline error:", err);

//       setError("Failed to load timeline");
//       setDays([]);

//     } finally {

//       setLoading(false);

//     }
//   };

//   useEffect(() => {

//     if (tripId) {
//       loadTimeline();
//     }

//   }, [tripId]);

//   // CURRENT DAY
//   const todayIndex = trip?.startDate
//     ? Math.floor(
//         (
//           new Date() -
//           new Date(trip.startDate)
//         ) / 86400000
//       ) + 1
//     : -1;

//   // START EDIT
//   const startEdit = (day) => {

//     setEditingDay(day.id);

//     setForm({
//       title: day.title || "",
//       description: day.description || ""
//     });
//   };

//   // SAVE EDIT
//   const saveEdit = async (dayId) => {

//     try {

//       await authFetch(
//         `/api/timeline/day/${dayId}`,
//         {
//           method: "PUT",
//           body: JSON.stringify(form)
//         }
//       );

//       // UPDATE UI DIRECTLY
//       setDays(prev =>
//         prev.map(day =>
//           day.id === dayId
//             ? {
//                 ...day,
//                 title: form.title,
//                 description: form.description
//               }
//             : day
//         )
//       );

//       setEditingDay(null);

//     } catch (err) {

//       console.error("Save error:", err);

//       alert("Failed to save timeline");

//     }
//   };

//   // LOADING
//   if (loading) {
//     return (
//       <div className="bg-white p-4 rounded-xl shadow">
//         <p className="text-gray-500">
//           Loading timeline...
//         </p>
//       </div>
//     );
//   }

//   // ERROR
//   if (error) {
//     return (
//       <div className="bg-white p-4 rounded-xl shadow">
//         <p className="text-red-500">
//           {error}
//         </p>
//       </div>
//     );
//   }

//   // EMPTY
//   if (!days.length) {
//     return (
//       <div className="bg-white p-4 rounded-xl shadow">
//         <p className="text-gray-500">
//           No timeline generated yet.
//         </p>
//       </div>
//     );
//   }

//   return (

//     <div className="space-y-4">

//       {days.map(day => {

//         const isToday =
//           day.dayNumber === todayIndex;

//         return (

//           <div
//             key={day.id}
//             className={`p-5 rounded-xl border-l-4 shadow-sm ${
//               isToday
//                 ? "bg-blue-50 border-blue-600"
//                 : "bg-white border-gray-300"
//             }`}
//           >

//             {editingDay === day.id ? (

//               <>

//                 <input
//                   className="w-full border p-2 rounded mb-2"
//                   placeholder="Title"
//                   value={form.title}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       title: e.target.value
//                     })
//                   }
//                 />

//                 <textarea
//                   className="w-full border p-2 rounded mb-2"
//                   rows={4}
//                   placeholder="Description"
//                   value={form.description}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       description: e.target.value
//                     })
//                   }
//                 />

//                 <div className="flex gap-2">

//                   <button
//                     onClick={() =>
//                       saveEdit(day.id)
//                     }
//                     className="bg-blue-600 text-white px-4 py-2 rounded"
//                   >
//                     Save
//                   </button>

//                   <button
//                     onClick={() =>
//                       setEditingDay(null)
//                     }
//                     className="bg-gray-200 px-4 py-2 rounded"
//                   >
//                     Cancel
//                   </button>

//                 </div>

//               </>

//             ) : (

//               <>

//                 <h4 className="font-semibold text-lg">

//                   Day {day.dayNumber}

//                   {isToday && (

//                     <span className="ml-2 text-sm text-blue-600">

//                       (Today)

//                     </span>

//                   )}

//                 </h4>

//                 {day.title && (

//                   <p className="font-medium mt-2">

//                     {day.title}

//                   </p>

//                 )}

//                 <p className="text-gray-600 mt-2">

//                   {day.description || "No description"}

//                 </p>

//                 <button
//                   onClick={() =>
//                     startEdit(day)
//                   }
//                   className="text-sm text-blue-600 mt-3"
//                 >
//                   Edit
//                 </button>

//               </>

//             )}

//           </div>

//         );
//       })}

//     </div>
//   );
// }

// export default Timeline;




import { useEffect, useState } from "react";
import { authFetch } from "../api/api";

import {
  CalendarDays,
  Pencil,
  Save,
  X
} from "lucide-react";

function Timeline({ tripId, trip }) {

  const [days, setDays] = useState([]);

  const [loading, setLoading] = useState(true);

  const [editingDay, setEditingDay] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  // LOAD TIMELINE
  const loadTimeline = async () => {

    try {

      setLoading(true);

      const data = await authFetch(
        `/api/timeline/${tripId}`
      );

      setDays(Array.isArray(data) ? data : []);

    } catch (err) {

      console.error(err);

      setDays([]);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    if (tripId) {
      loadTimeline();
    }

  }, [tripId]);

  // CURRENT DAY
  const todayIndex = trip?.startDate
    ? Math.floor(
        (
          new Date() -
          new Date(trip.startDate)
        ) / 86400000
      ) + 1
    : -1;

  // START EDIT
  const startEdit = (day) => {

    setEditingDay(day.id);

    setForm({
      title: day.title || "",
      description: day.description || ""
    });
  };

  // SAVE EDIT
  const saveEdit = async (dayId) => {

    try {

      await authFetch(
        `/api/timeline/day/${dayId}`,
        {
          method: "PUT",
          body: JSON.stringify(form)
        }
      );

      setDays(prev =>
        prev.map(day =>
          day.id === dayId
            ? {
                ...day,
                title: form.title,
                description: form.description
              }
            : day
        )
      );

      setEditingDay(null);

    } catch (err) {

      console.error(err);

      alert("Failed to save timeline");
    }
  };

  // LOADING
  if (loading) {

    return (

      <div className="flex items-center justify-center py-10">

        <div className="w-7 h-7 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

      </div>
    );
  }

  // EMPTY
if (!days.length) {

  const generateTimeline = async () => {

    try {

      await authFetch(
        `/api/timeline/generate/${tripId}`,
        {
          method: "POST"
        }
      );

      loadTimeline();

    } catch (err) {

      console.error(err);

      alert("Failed to generate timeline");
    }
  };

  return (

    <div className="border rounded-2xl p-8 text-center">

      <p className="text-slate-500 mb-5">

        No timeline generated yet.

      </p>

      <button
        onClick={generateTimeline}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-medium transition"
      >
        Generate Timeline
      </button>

    </div>
  );
}

  return (

    <div className="space-y-5">

      {days.map(day => {

        const isToday =
          day.dayNumber === todayIndex;

        return (

          <div
            key={day.id}
            className={`border rounded-2xl p-6 transition ${
              isToday
                ? "border-indigo-300 bg-indigo-50"
                : "bg-white border-slate-200"
            }`}
          >

            {/* HEADER */}

            <div className="flex items-start justify-between gap-4 mb-4">

              <div>

                <div className="flex items-center gap-2">

                  <CalendarDays
                    size={18}
                    className="text-indigo-600"
                  />

                  <h3 className="text-lg font-bold text-slate-900">

                    Day {day.dayNumber}

                  </h3>

                  {isToday && (

                    <span className="text-xs font-semibold bg-indigo-600 text-white px-2 py-1 rounded-full">
                      Today
                    </span>

                  )}

                </div>

                {editingDay !== day.id && day.title && (

                  <p className="mt-2 font-medium text-slate-700">
                    {day.title}
                  </p>

                )}

              </div>

              {/* ACTIONS */}

              {editingDay !== day.id && (

                <button
                  onClick={() => startEdit(day)}
                  className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  <Pencil size={15} />
                  Edit
                </button>

              )}

            </div>

            {/* EDIT MODE */}

            {editingDay === day.id ? (

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Title"
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value
                    })
                  }
                  className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <textarea
                  rows={5}
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value
                    })
                  }
                  className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <div className="flex gap-3">

                  <button
                    onClick={() => saveEdit(day.id)}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-medium"
                  >
                    <Save size={16} />
                    Save
                  </button>

                  <button
                    onClick={() => setEditingDay(null)}
                    className="flex items-center gap-2 border border-slate-200 hover:bg-slate-100 px-5 py-2 rounded-xl font-medium"
                  >
                    <X size={16} />
                    Cancel
                  </button>

                </div>

              </div>

            ) : (

              <p className="text-slate-600 leading-7 whitespace-pre-wrap">
                {day.description || "No activities planned."}
              </p>

            )}

          </div>

        );
      })}

    </div>
  );
}

export default Timeline;