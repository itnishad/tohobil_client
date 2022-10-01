import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getCampaign} from "../../services/campaign.service";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useParams } from "react-router-dom";
import classes from "./campaign.module.css";
import { getUser } from "../../services/auth-service";
import PaymentForm from "../../components/paymentModal/PaymentForm";
// import {Table} from "react-bootstrap";
import DonorAndSupporter from "./DonorAndSupporter";
import Contributors from "./Contributors";
import { getCampaignPaymentHistory } from "../../services/payment.service";


interface campaigns {
  id: string,
  title: string,
  subtitle: string,
  content: string,
  Amount: number,
  goalAmount: number,
  deadline: string,
  category: string,
  filename: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
  user: {
    _id: string,
    createdAt: string,
    email: string,
    name: string,
    password: string,
    updatedAt: string,
  }
}

const CampaignDetails = () => {
  const [show, setShow] = useState(false);
  const [campaign, setCampaign] = useState<campaigns>({
    id: "",
    title: "",
    subtitle: "",
    content: "",
    Amount: 0,
    goalAmount: 0,
    deadline: "",
    category: "",
    filename: "",
    active: false,
    createdAt: "",
    updatedAt: "",
    user: {
      _id: "",
      createdAt: "",
      email: "",
      name: "",
      password: "",
      updatedAt: "",
    }
  });
  const [error, setError] = useState("");
  const { campaignId } = useParams();
  const [campaignHistory, setCampaignHistory] = useState<any[]>([]);

  useEffect(()=>{
    const apiCall = async()=>{
      try {
        const getCampaignbody = await getCampaign(campaignId);
        const getpayHistory = await getCampaignPaymentHistory(campaignId);

        setCampaign(getCampaignbody);
        setCampaignHistory(getpayHistory);
        // console.log(getpayHistory);
      } catch (error: any) {
        console.log(error);
        setError(error.response.data.message);
      }
    }
    apiCall();

    // getCampaign(campaignId)
    // .then(res =>{
    //   setCampaign(res);
    // })
    // .catch(error=>{
    //   setError(error.message)
    // })
  },[campaignId])


  let now = Math.floor((campaign.Amount / campaign.goalAmount) * 100);

  let user = getUser();
  // if(user === null) return <Navigate to={"../../login"}/>
  let sessionUser:any = user?.User._id || 0;
  let localUser:any = campaign?.user._id || 1;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className={`container mt-5 ${classes.marginBottom}`}>
      <div className="row">
        <div className="col-8">
          
            <img
              className="mb-4"
              alt="Content Details"
              height={"50%"}
              width={"100%"}
              src={`http://localhost:4000/public/images/${campaign.filename}`}
            />
          <span className={classes.categoryDesign}>
            <svg className="me-3" viewBox="0 0 32 32" height="24" width="24">
              <path d="M28.4 13.2l-11.467-11.467c-0.267-0.267-0.533-0.4-0.933-0.4h-13.333c-0.8 0-1.333 0.533-1.333 1.333v13.333c0 0.4 0.133 0.667 0.4 0.933l11.467 11.467c0.8 0.8 1.867 1.2 2.8 1.2 1.067 0 2-0.4 2.8-1.2l9.6-9.6c0 0 0 0 0 0 1.6-1.6 1.6-4 0-5.6zM26.533 16.933l-9.6 9.6c-0.533 0.533-1.333 0.533-1.867 0l-11.067-11.067v-11.467h11.467l11.067 11.067c0.533 0.533 0.533 1.333 0 1.867z"></path>
              <path d="M8.4 8.4c-0.267 0.267-0.4 0.533-0.4 0.933s0.133 0.667 0.4 0.933c0.267 0.267 0.533 0.4 0.933 0.4s0.667-0.133 0.933-0.4c0.267-0.267 0.4-0.533 0.4-0.933s-0.133-0.667-0.4-0.933c-0.533-0.533-1.333-0.533-1.867 0z"></path>
            </svg>
            {campaign.category}
          </span>
          {error && <div className={`text-center ${classes.error}`}> {error} </div>}
          <h6 className="mt-4 mb-3 text-secondary">By : {campaign.user.name}</h6>

          <h2 className="mb-5">{campaign.title}</h2>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Story">
              <div className="row d-block">
              <div className="col-12 d-block">
              <div dangerouslySetInnerHTML={{ __html: campaign.content }} />
              </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Update News">
              <div>Update</div>
            </Tab>
            <Tab eventKey="contact" title="Contributors">
              <div>Contributors</div>
              <Contributors campaignHistory={campaignHistory}/>
            </Tab>
          </Tabs>
        </div>
        <div className="col-3 ms-5">
          <p>
            <strong>&#2547;</strong>
            {campaign.Amount} Raised of <strong>&#2547;</strong>
            {campaign.goalAmount} Goal
          </p>
          <ProgressBar animated  className="mb-4" now={now} label={`${now}%`} />
          <p className={classes.fundRaised}>
            <strong>&#2547;</strong> {campaign.Amount}
          </p>
          <p className={classes.fund}>Funds Raised</p>
          <p className={classes.fundGoal}>
            <strong>&#2547;</strong> {campaign.goalAmount}
          </p>
          <p className={classes.fund}>Funds Goal</p>
          <p className={classes.fundConti}>{campaignHistory.length}</p>
          <p className={classes.fund}>Contributors</p>
          {sessionUser === localUser ?<Link to={`../../update/campaign`} state={campaign}> <button className={`btn btn-primary btn-lg ${classes.btnCustom}`}>
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
          <PaymentForm show={show} handleClose={handleClose} campaign={campaign}/>
          {/*Added top donors and supporter card here*/}
          <DonorAndSupporter  campaignHistory = {campaignHistory}/>
          {/* #Todo Copy link */}
          {/* Share Link */}
          {/* Top Donar list */}
        </div>
      </div>
    </div>

  );
};

export default CampaignDetails;
