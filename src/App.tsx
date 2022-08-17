import React, { Suspense, useReducer } from "react";
// import logo from './assets/images/logo.png';
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Campaigns from "./pages/campaigns/Campaigns";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Logout from "./pages/login/logout";
import StartACampaign from "./pages/startACampaign/startACampaign";
import CampaignDetails from "./pages/campaigns/campaignDetails";
import RequireAuth from "./components/RequireAuth";
import RequireUnAuth from "./components/RequireUnAuth";

import AuthContext from "./context-api/authContext";
import { initialState, reducer } from "./reducer/AuthReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="col-12">
        <AuthContext.Provider value={{ state, dispatch }}>
          <Navbar />

          <Routes>
            {/* public route */}
            <Route path="/" element={<Home />} />
            
            <Route path="/camd" element={<CampaignDetails/>}/>
            <Route
              path="/campaigns"
              element={
                <Suspense
                  fallback={
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  }
                >
                  <Campaigns />
                </Suspense>
              }
            />
            <Route element={<RequireUnAuth />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Route>

            {/* private route */}
            <Route element={<RequireAuth />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="logout" element={<Logout />} />
              <Route path="start-a-campaign" element={<StartACampaign />} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
