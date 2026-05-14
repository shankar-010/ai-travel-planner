// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import CreateTrip from './pages/CreateTrip';
// import TripDetails from './pages/TripDetails';
// import './App.css';
// import "./styles/main.css";
// import MyTrips from "./pages/MyTrips";
// import EditTrip from "./pages/EditTrip";
// import Login from "./pages/Login";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Dashboard />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />

//         <Route path="/create" element={<CreateTrip />} />
//         <Route path="/trip/:id" element={<TripDetails />} />
//         <Route path="/trips" element={<MyTrips />} />
//         <Route path="/trip/edit/:id" element={<EditTrip />} />
//         <Route path="/login" element={<Login />} />


//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import CreateTrip from "./pages/CreateTrip";
// import TripDetails from "./pages/TripDetails";
// import MyTrips from "./pages/MyTrips";
// import EditTrip from "./pages/EditTrip";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// import PrivateRoute from "./components/PrivateRoute";
// import { Navigate } from "react-router-dom";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* PUBLIC */}
//         <Route path="/login" element={<Login />} />
// <Route path="/signup" element={<Signup />} />

//         {/* PROTECTED */}
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/create"
//           element={
//             <PrivateRoute>
//               <CreateTrip />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/trips"
//           element={
//             <PrivateRoute>
//               <MyTrips />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/trip/:id"
//           element={
//             <PrivateRoute>
//               <TripDetails />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/trip/edit/:id"
//           element={
//             <PrivateRoute>
//               <EditTrip />
//             </PrivateRoute>
//           }
//         />
// <Route path="/" element={<Navigate to="/dashboard" />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import TripDetails from "./pages/TripDetails";
import MyTrips from "./pages/MyTrips";
import EditTrip from "./pages/EditTrip";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import PrivateRoute from "./components/PrivateRoute";

import AiPlanner from "./pages/AiPlanner";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateTrip />
            </PrivateRoute>
          }
        />

        <Route
          path="/trips"
          element={
            <PrivateRoute>
              <MyTrips />
            </PrivateRoute>
          }
        />

        <Route
          path="/trip/:id"
          element={
            <PrivateRoute>
              <TripDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/trip/edit/:id"
          element={
            <PrivateRoute>
              <EditTrip />
            </PrivateRoute>
          }
        />

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
  path="/ai-planner"
  element={
    <PrivateRoute>
      <AiPlanner />
    </PrivateRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
