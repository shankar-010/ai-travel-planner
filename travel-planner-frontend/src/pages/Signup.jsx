// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!res.ok) {
//         throw new Error(await res.text());
//       }

//       navigate("/login");
//     } catch (err) {
//       setError(err.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-50">
//       <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

//         {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

//         <input
//           type="email"
//           required
//           placeholder="Email"
//           className="w-full p-3 border rounded mb-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           required
//           placeholder="Password"
//           className="w-full p-3 border rounded mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           disabled={loading}
//           className="w-full bg-indigo-600 text-white py-3 rounded font-semibold"
//         >
//           {loading ? "Creating..." : "Sign up"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Signup;



import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import {
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {

    e.preventDefault();

    setError("");

    setLoading(true);

    try {

      const res = await fetch(

        "http://localhost:8080/api/auth/register",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            password
          })
        }

      );

      if (!res.ok) {

        throw new Error(
          await res.text()
        );
      }

      navigate("/login");

    } catch (err) {

      setError(
        err.message ||
        "Signup failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#f6f7fb] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* TOP */}

        <div className="text-center mb-10">

          <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-5 shadow-sm">

            <MapPin size={24} />

          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-sm font-medium mb-5">

            <Sparkles size={14} />

            AI Travel Planner

          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">

            Create account

          </h1>

          <p className="text-slate-500 leading-7">

            Start planning and organizing
            smarter journeys with AI.

          </p>

        </div>

        {/* CARD */}

        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8">

          {error && (

            <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-2xl mb-5">

              {error}

            </div>

          )}

          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">

                Email

              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="name@email.com"
                className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">

                Password

              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Create password"
                className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-medium transition flex items-center justify-center gap-2"
            >

              {loading
                ? "Creating..."
                : "Create Account"}

              {!loading && (
                <ArrowRight size={16} />
              )}

            </button>

          </form>

          <p className="text-sm text-slate-500 text-center mt-8">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-slate-900 font-medium hover:underline"
            >
              Sign in
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Signup;