import React, { useState, useEffect } from "react";
import "./App.css";
import BasicExample from "./component/BasicExample";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AddTeam from "./component/addTeam";
import Tmain from "./component/tournamnet/Tmain";
import GroupMain from "./component/groups/groupMain";
import MatchMain from "./component/matchs/matchMain";
import AreaMain from "./component/Arena/areaMain";
import Controller from "./component/controller/Controller";
import Result from "./component/display/Result";
import Alive from "./component/display/Alive";
import Banner from "./component/display/Banner";
import Malert from "./component/display/Malert";
import Alert from "./component/display/Alert";
import Login from "./Login/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./firebase"; // Import your initialized Firebase app instance

const auth = getAuth(firebaseApp);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // State to handle initial Firebase authentication loading

  // Check Firebase auth state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false); // Set loading to false once auth state is determined
    });

    return () => unsubscribe(); // Clean up auth listener on unmount
  }, []);

  const handleLogout = () => {
    // Implement logout functionality using Firebase Auth if needed
   auth.signOut().then(() => setLoggedIn(false));
  };

  if (loading) {
    return <p>Loading...</p>; // Optional: Add a loading indicator while Firebase auth state is being checked
  }

  return (
    <BrowserRouter>
      {loggedIn ? (
        <>
          <ConditionalBasicExample />
          <AppRoutes />
          <button onClick={handleLogout}>Logout</button> {/* Example logout button */}
        </>
      ) : (
        <Login />
      )}
      <AppRoutes2 />
    </BrowserRouter>
  );
}

function ConditionalBasicExample() {
  const { pathname } = useLocation();
  const excludedPathsPattern = /^\/(banner|matchalert|alert|display)\/[^/]+$/;

  if (!excludedPathsPattern.test(pathname)) {
    return <BasicExample />;
  }
  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Tmain />} />
      <Route path="/addteam" element={<AddTeam />} />
      <Route path="/controller" element={<Controller />} />
      <Route path="/tournament/:tournamentId" element={<GroupMain />} />
      <Route path="/groupstage/:groupStageId" element={<MatchMain />} />
      <Route path="/match/:matchId" element={<AreaMain />} />
    </Routes>
  );
}

function AppRoutes2() {
  return (
    <Routes>
      <Route path="/display/:tournamentId" element={<Result />} />
      <Route path="/alive/:tournamentId" element={<Alive />} />
      <Route path="/banner/:tournamentId" element={<Banner />} />
      <Route path="/alert/:tournamentId" element={<Alert />} />
      <Route path="/matchalert/:tournamentId" element={<Malert />} />
    </Routes>
  );
}

export default App;
