import React from "react";
import classes from "./AdminHome.module.css";
import Sitebar from "./Sitebar";
import {Link, Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <main role="main" className={`container-fluid ${classes.noBorder}`}>
      <div className="row">
        <Sitebar/>

        <div id={classes.mainContent} className="col">
          <nav className="navbar no-border flex-md-nowrap container-fluid">
            <div className="col-auto ms-auto me-5">
            <Link to="../../logout"> <button type="button" className="btn btn-txt">
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-right ms-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </button></Link>
            </div>
          </nav>
          <div className="container-fluid pb-md-5 mb-5">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
