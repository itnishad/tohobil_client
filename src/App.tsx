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
import PageNotFound from "./components/PageNotFound/PageNotFound";

import UserLayout from "./components/layout/UserLayout";
import AdminLayout from "./components/layout/AdminLayout";
import UserVerification from "./pages/userVerification/userVerification";

//Admin Page

import AdminHome from "./Admin/Home/AdminHome";
import UserList from "./Admin/UserList/UserList";
import ActiveCampaignList from "./Admin/ActiveCampaignList/ActiveCampaignList";
import InacviveCampaignList from "./Admin/InactiveCampaignList/InacviveCampaignList";
import WithdrawRequest from "./Admin/WithdrawRequest/WithdrawRequest";
import Profile from "./pages/profile";
import AdminLogin from "./Admin/login/AdminLogin";
import AdminRequireAuth from "./Admin/AdminRequireAuth";
import AdminRequireUnAuth from "./Admin/AdminRequireUnAuth";
import AdminLogout from './Admin/login/Adminlogout'
import UserVerifyList from "./Admin/UserVerificationList/UserVerifyList";
import UserVerificationDetails from "./Admin/UserVerificationList/UserVerificationDetails";

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
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/user/verification" element={<UserVerification/>}/>

            <Route path="/campaigns">
              <Route
                index
                element={
                  <Suspense
                    fallback={
                      <div
                        className="spinner-border text-warning"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    }
                  >
                    <Campaigns />
                  </Suspense>
                }
              />

              <Route
                path="details/:campaignId"
                element={
                  <Suspense
                    fallback={
                      <div
                        className="spinner-border text-warning"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    }
                  >
                    <CampaignDetails />
                  </Suspense>
                }
              />
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

            <Route path="*" element={<PageNotFound/>} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route element={<AdminRequireUnAuth />}>
              <Route path="login" element={<AdminLogin />} />
            </Route>
            <Route element={<AdminRequireAuth />}>
              <Route path="" element={<AdminHome />}>
                <Route index element={<UserList />} />
                <Route path="activeList" element={<ActiveCampaignList />} />
                <Route path="inActiveList" element={<InacviveCampaignList />} />
                <Route path="user/verification" element={<UserVerifyList/>}/>
                <Route path="withdrawRequest" element={<WithdrawRequest />} />
                <Route path="VerificationDetails" element={<UserVerificationDetails/>}/>
              </Route>
              <Route path="logout" element={<AdminLogout />} />
              <Route path="*" element={<PageNotFound/>} />
            </Route >
          </Route>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        {/* </AuthContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
