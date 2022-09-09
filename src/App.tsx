import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import FAQ from "./pages/faq/faq";
import CampaignDashboard from "./components/campaignDashboard/CampaignDashboard";
import UpdateCampaign from "./components/campaignDashboard/updateCampaign";
import ProfileForm from "./components/profile/ProfileForm";
import PaymentHistory from "./components/campaignDashboard/PaymentHistory";

import UserLayout from "./components/layout/UserLayout";
import AdminLayout from "./components/layout/AdminLayout";
import PageNotFound from "./components/PageNotFound/PageNotFound";

//Admin Page

import AdminHome from "./Admin/Home/AdminHome";
import UserList from "./Admin/UserList/UserList";
import ActiveCampaignList from "./Admin/ActiveCampaignList/ActiveCampaignList";
import InacviveCampaignList from "./Admin/InactiveCampaignList/InacviveCampaignList";
import WithdrawRequest from "./Admin/WithdrawRequest/WithdrawRequest";

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="col-12">
        {/* <AuthContext.Provider value={{ state, dispatch }}> */}
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/campaigns">
              <Route index element={<Campaigns />} />

              <Route path="details/:campaignId" element={<CampaignDetails />} />
            </Route>

            <Route element={<RequireUnAuth />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Route>

            <Route element={<RequireAuth />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="logout" element={<Logout />} />
              <Route path="start-a-campaign" element={<StartACampaign />} />
              <Route path="/dashboard/*" element={<Dashboard />}>
                <Route index element={<Navigate to="myDashboard" />} />
                <Route path="myDashboard" element={<CampaignDashboard />} />
                <Route path="myAccount" element={<ProfileForm />} />
                <Route path="myAddress" element={<PaymentHistory />} />
              </Route>
              <Route path="/update/campaign" element={<UpdateCampaign />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route path="" element={<AdminHome />}>
              <Route index element={<UserList />} />
              <Route path="activeList" element={<ActiveCampaignList />} />
              <Route path="inActiveList" element={<InacviveCampaignList />} />
              <Route path="withdrawRequest" element={<WithdrawRequest />} />
            </Route>
            <Route path="*" element={<div>No Route Match Component</div>} />
          </Route>

          <Route path="*" element={<div>No Route Match Component</div>} />
        </Routes>
        {/* </AuthContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
