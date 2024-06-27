import { useState } from "react";
import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./page/About";
import CreateStratagem from "./page/CreateStratagem";
import ErrorPage from "./page/ErrorPage";
import Homepage from "./page/Homepage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import StratagemDetails from "./page/StratagemDetails";
import StratagemList from "./page/StratagemList";
import TraitorofSuperEarth from "./page/TraitorofSuperEarth";
import { Toaster } from "react-hot-toast";

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  };

  const IsNotLoggedIn = () => {
    return !localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  };

  return (
    <>
      <div className="background">
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stratagems" element={<StratagemList />} />
          <Route
            path="/stratagems/:stratagemId"
            element={<StratagemDetails />}
          />

          <Route path="/stratagems/add" element={<CreateStratagem />} />
          <Route element={<IsNotLoggedIn />}>
            <Route path="/signup" element={<SignupPage></SignupPage>} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/traitor" element={<TraitorofSuperEarth />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
