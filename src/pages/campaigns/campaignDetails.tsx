import React, { useState } from "react";
import useSWR from "swr";
import { Link, Navigate } from "react-router-dom";
import { getCampaign } from "../../services/campaign.service";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useParams } from "react-router-dom";
import classes from "./campaign.module.css";
import { getUser } from "../../services/auth-service";
import PaymentForm from "../../components/paymentModal/PaymentForm";

const CampaignDetails = () => {
  const [show, setShow] = useState(false);
  const { campaignId } = useParams();
  const { data, error } = useSWR(
    `http://localhost:4000/v1/campaign/details/${campaignId}`,
    getCampaign,
    { suspense: true }
  );
  if (error) return <div>failed to load</div>;
  if (data.length <= 0) return <div>loading...</div>;
  let now = Math.floor((data[0].Amount / data[0].goalAmount) * 100);

  let user = getUser();
  if(user === null) return <Navigate to={"../../login"}/>
  let sessionUser = user.User._id;
  let localUser = data[0].user._id;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`container mt-5 ${classes.marginBottom}`}>
      <div className="row">
        <div className="col-8">
          <img
            className="mb-4"
            alt="Content Details"
            height={"500px"}
            width={"850px"}
            src={`http://localhost:4000/public/images/${data[0].filename}`}
          />
          <span className={classes.categoryDesign}>
            <svg className="me-3" viewBox="0 0 32 32" height="24" width="24">
              <path d="M28.4 13.2l-11.467-11.467c-0.267-0.267-0.533-0.4-0.933-0.4h-13.333c-0.8 0-1.333 0.533-1.333 1.333v13.333c0 0.4 0.133 0.667 0.4 0.933l11.467 11.467c0.8 0.8 1.867 1.2 2.8 1.2 1.067 0 2-0.4 2.8-1.2l9.6-9.6c0 0 0 0 0 0 1.6-1.6 1.6-4 0-5.6zM26.533 16.933l-9.6 9.6c-0.533 0.533-1.333 0.533-1.867 0l-11.067-11.067v-11.467h11.467l11.067 11.067c0.533 0.533 0.533 1.333 0 1.867z"></path>
              <path d="M8.4 8.4c-0.267 0.267-0.4 0.533-0.4 0.933s0.133 0.667 0.4 0.933c0.267 0.267 0.533 0.4 0.933 0.4s0.667-0.133 0.933-0.4c0.267-0.267 0.4-0.533 0.4-0.933s-0.133-0.667-0.4-0.933c-0.533-0.533-1.333-0.533-1.867 0z"></path>
            </svg>
            {data[0].category}
          </span>
          <h6 className="mt-4 mb-3 text-secondary">By : {data[0].user.name}</h6>

          <h2 className="mb-5">{data[0].title}</h2>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Story">
              <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
            </Tab>
            <Tab eventKey="profile" title="Update News">
              <div>Update</div>
            </Tab>
            <Tab eventKey="contact" title="Contributors">
              <div>Contributors</div>
            </Tab>
          </Tabs>
        </div>
        <div className="col-3 ms-5">
          <p>
            <strong>&#2547;</strong>
            {data[0].Amount} Raised of <strong>&#2547;</strong>
            {data[0].goalAmount} Goal
          </p>
          <ProgressBar animated  className="mb-4" now={now} label={`${now}%`} />
          <p className={classes.fundRaised}>
            <strong>&#2547;</strong> {data[0].Amount}
          </p>
          <p className={classes.fund}>Funds Raised</p>
          <p className={classes.fundGoal}>
            <strong>&#2547;</strong> {data[0].goalAmount}
          </p>
          <p className={classes.fund}>Funds Goal</p>
          <p className={classes.fundConti}>25</p>
          <p className={classes.fund}>Contributors</p>
          {sessionUser === localUser ?<Link to={`../../update/campaign`} state={data[0]}> <button className={`btn btn-primary btn-lg ${classes.btnCustom}`}>
            <svg
              style={{color: "white"}}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="me-3"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                fill="white"
              ></path>{" "}
            </svg>
            Edit Campaign
          </button > </Link>: <button onClick={handleShow} className={`btn btn-primary btn-lg ${classes.btnCustom}`}>
            <svg
              style={{color: "white"}}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="me-3"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                fill="white"
              ></path>{" "}
            </svg>
            DONATE NOW
          </button>}
          <PaymentForm show={show} handleClose={handleClose} campaign = {data[0]}/>
          {/* #Todo Copy link */}
          {/* Share Link */}
          {/* Top Donar list */}
        </div>
      </div>
    </div>

  );
};

export default CampaignDetails;
