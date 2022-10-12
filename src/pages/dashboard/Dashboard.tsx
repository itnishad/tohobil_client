import React, { useEffect, useState } from "react";
import classes from "./dashboard.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [activeState, setActiveState] = useState("myCampaigns");

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard/myDashboard")
      setActiveState("myCampaigns");
  }, [location]);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="row align-items-center">
          <div className="col-6">
            <h3>Dashboard</h3>
          </div>
          <div className="col-6 text-md-end">
            <Link to="../../start-a-campaign">
              <button className={`btn btn-primary ${classes.btnCustom}`}>
                Add New Campaign
              </button>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 mt-2">
            <ListGroup as="ul" variant="flush" bsPrefix="">
              <Link to="myDashboard">
                {" "}
                <ListGroup.Item
                  as="li"
                  action
                  onClick={() => {
                    setActiveState("/dashboard");
                  }}
                  active={activeState === "myCampaigns"}
                >
                  My Campaigns
                </ListGroup.Item>
              </Link>
              <Link to="myAccount">
                {" "}
                <ListGroup.Item
                  as="li"
                  action
                  onClick={() => {
                    setActiveState("myAcount");
                  }}
                  active={activeState === "myAcount"}
                >
                  My Account
                </ListGroup.Item>
              </Link>
              <Link to="myAddress">
                {" "}
                <ListGroup.Item
                  as="li"
                  action
                  onClick={() => {
                    setActiveState("myAddress");
                  }}
                  active={activeState === "myAddress"}
                >
                  Payment History
                </ListGroup.Item>
              </Link>
              <Link to="../../logout">
                {" "}
                <ListGroup.Item as="li">Log Out</ListGroup.Item>
              </Link>
            </ListGroup>
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
