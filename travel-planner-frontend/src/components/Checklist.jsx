// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function Checklist({ tripId }) {
//   const [items, setItems] = useState([]);

//   const loadChecklist = () => {
// authFetch(`/api/checklist/${tripId}`)
//   .then(data => setItems(Array.isArray(data) ? data : []));
//   }

//   useEffect(() => {
//     loadChecklist();
//   }, [tripId]);

// const togglePacked = async (itemId, packed) => {
//   try {
//     await fetch(
//       `http://localhost:8080/api/checklist/${itemId}/packed?packed=${!packed}`,
//       {
//         method: "PUT"
//       }
//     );

//     loadChecklist(); // refresh after update
//   } catch (error) {
//     console.error("Error updating checklist item", error);
//     alert("Failed to update checklist item");
//   }
// };


//   if (items.length === 0) {
//     return <p>No checklist items yet.</p>;
//   }

//   return (
//     <ul>
// {Array.isArray(items) && items.map(item => (
//         <li key={item.id}>
//           <input
//             type="checkbox"
//             checked={item.packed}
//             onChange={() => togglePacked(item.id, item.packed)}
//           />
//           {" "}
//           {item.itemName} ({item.category})
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Checklist;


// import { useEffect, useState } from "react";
// import { authFetch } from "../api/api";

// function Checklist({ tripId }) {
//   const [items, setItems] = useState([]);

//   const loadChecklist = async () => {
//     try {
//       const data = await authFetch(`/api/checklist/${tripId}`);
//       setItems(Array.isArray(data) ? data : []);
//     } catch {
//       setItems([]);
//     }
//   };

//   useEffect(() => {
//     if (tripId) loadChecklist();
//   }, [tripId]);

//   const togglePacked = async (itemId, packed) => {
//     try {
//       await authFetch(
//         `/api/checklist/${itemId}/packed?packed=${!packed}`,
//         { method: "PUT" }
//       );
//       loadChecklist();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update checklist item");
//     }
//   };

//   if (!items.length) return <p>No checklist items yet.</p>;

//   // ✅ GROUP ITEMS BY CATEGORY (THIS WAS MISSING)
//   const grouped = items.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="bg-white rounded-xl p-4 shadow">
//       <h3 className="font-semibold mb-3">📦 Packing Checklist</h3>

//       {Object.entries(grouped).map(([category, list]) => (
//         <div key={category} className="mb-4">
//           <h4 className="text-sm font-semibold text-gray-600 mb-2">
//             {category}
//           </h4>

//           {list.map(item => (
//             <label
//               key={item.id}
//               className="flex items-center gap-2 mb-1"
//             >
//               <input
//                 type="checkbox"
//                 checked={item.packed}
//                 onChange={() => togglePacked(item.id, item.packed)}
//               />
//               <span
//                 className={
//                   item.packed
//                     ? "line-through text-gray-400"
//                     : ""
//                 }
//               >
//                 {item.itemName}
//               </span>
//             </label>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Checklist;



import { useEffect, useState } from "react";

import {
  Plus,
  CheckCircle2,
  Package
} from "lucide-react";

import { authFetch } from "../api/api";

function Checklist({ tripId }) {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [itemName, setItemName] = useState("");

  const [category, setCategory] = useState("General");

  // LOAD
  const loadChecklist = async () => {

    try {

      setLoading(true);

      const data = await authFetch(
        `/api/checklist/${tripId}`
      );

      setItems(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (err) {

      console.error(err);

      setError("Failed to load checklist");

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    if (tripId) {
      loadChecklist();
    }

  }, [tripId]);

  // ADD ITEM
  const addChecklistItem = async () => {

    if (!itemName.trim()) {
      return;
    }

    try {

      const saved = await authFetch(

        `/api/checklist/${tripId}`,

        {
          method: "POST",

          body: JSON.stringify({
            itemName,
            category
          })
        }
      );

      setItems(prev => [

        ...prev,

        saved || {
          id: Date.now(),
          itemName,
          category,
          packed: false
        }

      ]);

      setItemName("");

      setCategory("General");

    } catch (err) {

      console.error(err);

      setError("Failed to add item");
    }
  };

  // TOGGLE
  const togglePacked = async (
    itemId,
    packed
  ) => {

    try {

      await authFetch(

        `/api/checklist/${itemId}/packed?packed=${!packed}`,

        {
          method: "PUT"
        }
      );

      setItems(prev =>
        prev.map(item =>
          item.id === itemId
            ? {
                ...item,
                packed: !packed
              }
            : item
        )
      );

    } catch (err) {

      console.error(err);

      setError("Failed to update item");
    }
  };

  // LOADING
  if (loading) {

    return (

      <div className="text-slate-500">
        Loading checklist...
      </div>

    );
  }

  // GROUP ITEMS
  const grouped = items.reduce((acc, item) => {

    const key =
      item.category || "General";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;

  }, {});

  return (

    <div>

      {/* ERROR */}

      {error && (

        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm mb-5">
          {error}
        </div>

      )}

      {/* ADD FORM */}

      <div className="flex flex-col gap-3 mb-8">

        <input
          type="text"
          placeholder="Add checklist item"
          value={itemName}
          onChange={(e) =>
            setItemName(e.target.value)
          }
          className="border border-slate-200 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex gap-3">

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          >

            <option>General</option>
            <option>Clothes</option>
            <option>Documents</option>
            <option>Electronics</option>
            <option>Medicine</option>

          </select>

          <button
            onClick={addChecklistItem}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl font-semibold transition"
          >

            <Plus size={16} />

            Add

          </button>

        </div>

      </div>

      {/* EMPTY */}

      {!items.length ? (

        <div className="border border-dashed border-slate-200 rounded-2xl p-8 text-center">

          <Package
            size={34}
            className="mx-auto text-slate-300 mb-3"
          />

          <p className="text-slate-500">
            No checklist items yet
          </p>

        </div>

      ) : (

        <div className="space-y-6">

          {Object.entries(grouped).map(

            ([groupName, list]) => (

              <div key={groupName}>

                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">
                  {groupName}
                </h3>

                <div className="space-y-3">

                  {list.map(item => (

                    <label
                      key={item.id}
                      className="flex items-center gap-3 border border-slate-100 rounded-2xl px-4 py-3 hover:border-indigo-200 transition cursor-pointer"
                    >

                      <input
                        type="checkbox"
                        checked={item.packed}
                        onChange={() =>
                          togglePacked(
                            item.id,
                            item.packed
                          )
                        }
                        className="w-4 h-4"
                      />

                      <span
                        className={`flex-1 ${
                          item.packed
                            ? "line-through text-slate-400"
                            : "text-slate-700"
                        }`}
                      >

                        {item.itemName}

                      </span>

                      {item.packed && (

                        <CheckCircle2
                          size={18}
                          className="text-emerald-500"
                        />

                      )}

                    </label>

                  ))}

                </div>

              </div>

            )

          )}

        </div>

      )}

    </div>
  );
}

export default Checklist;