import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Sparkles, MapPinned, Wallet, Heart, Calendar } from "lucide-react";

function AiPlanner() {

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState("Medium");
  const [interests, setInterests] = useState("");

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");

  const generateItinerary = async () => {

    if (!destination || !interests) {

      alert("Please fill all fields");

      return;
    }

    setLoading(true);
    setItinerary("");

    try {

      const token = localStorage.getItem("token");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/generate-itinerary`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            destination,
            days,
            budget,
            interests
          })
        }
      );

      const data = await res.json();

      setItinerary(data.itinerary);

    } catch (err) {

      console.error(err);

      alert("Failed to generate itinerary");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <div className="flex items-center gap-3 mb-3">


            <div>

              <h1 className="text-4xl font-black text-slate-900">
                AI Trip Planner
              </h1>

              <p className="text-slate-500 mt-1">
                Generate personalized travel itineraries using AI
              </p>

            </div>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 mb-8">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Destination */}

            <div>

              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-3">
                <MapPinned size={16} />
                Destination
              </label>

              <input
                type="text"
                placeholder="Goa"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            {/* Days */}

            <div>

              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-3">
                <Calendar size={16} />
                Number of Days
              </label>

              <input
                type="number"
                min="1"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            {/* Budget */}

            <div>

              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-3">
                <Wallet size={16} />
                Budget
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>Luxury</option>
              </select>

            </div>

            {/* Interests */}

            <div>

              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-3">
                <Heart size={16} />
                Interests
              </label>

              <input
                type="text"
                placeholder="Beach, nightlife, food"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

          </div>

          <button
            onClick={generateItinerary}
            disabled={loading}
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 disabled:opacity-70"
          >
            {loading ? "Generating Itinerary..." : "Generate AI Itinerary"}
          </button>

        </div>

        {/* RESULT */}

        {itinerary && (

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Sparkles size={22} />
              </div>

              <div>

                <h2 className="text-2xl font-black text-slate-900">
                  Generated Itinerary
                </h2>

                <p className="text-slate-500 text-sm">
                  Personalized AI travel plan
                </p>

              </div>

            </div>

            <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-li:text-slate-700 prose-headings:font-black">

              <ReactMarkdown>
                {itinerary}
              </ReactMarkdown>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default AiPlanner;