import React, { Suspense, useReducer } from "react";
import useSWR from "swr";
// import logo from './assets/images/logo.png';
import "./App.css";
import { Routes, Route, Navigate  } from "react-router-dom";

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
import Footer from "./components/footer/footer";
import FAQ from "./pages/faq/faq";
import CampaignDashboard from "./components/campaignDashboard/CampaignDashboard"
import UpdateCampaign from "./components/campaignDashboard/updateCampaign";
import ProfileForm from "./components/profile/ProfileForm";

import AuthContext from "./context-api/authContext";
import CampaignContext from "./context-api/campaignsContext";

import { getALlCampaign } from "./services/campaign.service";

import { initialState, reducer } from "./reducer/AuthReducer";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {data, error} = useSWR("http://localhost:4000/v1/campaign/get-all-campaigns", getALlCampaign, 
  {suspense: true,});

  if(error) return <div>Error</div>
  if(!data) return <div>NO Data Found</div>
  if(data.length<=0) return <>Hello</>

  return (
    <div className="App">
      <div className="col-12">
        <AuthContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <CampaignContext.Provider value={data}>
          <Routes>
            {/* public route */}
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />}/>
            <Route path="/campaigns">
              <Route index  element={
                <Suspense
                  fallback={
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  }
                >
                  <Campaigns />
                </Suspense>
              }/>

              <Route path="details/:campaignId"  element={
                <Suspense
                fallback={
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                }
              >
                 <CampaignDetails/>
              </Suspense>
            }/>
            </Route>
            <Route element={<RequireUnAuth />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Route>

            {/* private route */}
            <Route element={<RequireAuth />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="logout" element={<Logout />} />
              <Route path="start-a-campaign" element={<StartACampaign />} />
              <Route path="/dashboard/*" element={<Dashboard/>}>
                  <Route index element={<Navigate to="myDashboard" />}/>
                  <Route path="myDashboard" element={<CampaignDashboard />} />
                  <Route path="myAccount" element={<ProfileForm />} />
                  <Route path="myAddress" element={<p>My Address</p>} />
              </Route>
              <Route path="/update/campaign" element={<UpdateCampaign />}/>
            </Route>
          </Routes>
          </CampaignContext.Provider>
          <Footer/>
        </AuthContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
