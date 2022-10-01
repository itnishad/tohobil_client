import React, { useEffect, useState} from 'react';
import { Image} from "react-bootstrap";
import help from '../../assets/images/help.jpg'
import pic from '../../assets/images/imran.jpg'
import Button from "react-bootstrap/Button";
import {AiOutlineArrowRight} from "react-icons/ai";
// import CampaignDashbordCard from "../../components/campaignDashboard/CampaignDashbordCard";
import CampaignCard from "../campaigns/campaignCard";
import { getALlCampaign } from '../../services/campaign.service';
import { getUserProfileAsyncAwait } from '../../services/user.service';
import classes from './profile.module.css'
import {useParams } from 'react-router-dom';

// interface profile {
//   id: string,
//   bio: string,
//   firstName: string,
//   lastName: number,
//   website: string,
//   createdAt: string,
//   updatedAt: string,
//   user: {
//     _id: string,
//     createdAt: string,
//     email: string,
//     name: string,
//     password: string,
//     updatedAt: string,
//   }
// }

const Profile = () => {


  const[campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState("");
  const[userProfile,setUserProfile]=useState<any[]>([]);
  let { userId } = useParams();

  useEffect(()=>{
    getALlCampaign()
    .then((res: any) => {
      setCampaigns(res.filter((item:any)=> item.user._id === userId));
    })
    .catch((error) => {
      // console.log(error);
      setError(error.message);
    });
    
  },[userId]);

  useEffect(()=>{
    getUserProfileAsyncAwait(userId)
    .then((res:any)=>{
      // console.log(res);
      setUserProfile(res);
    })
    .catch((error:any)=>{
      setError(error.message);
    })
  },[userId]);

  useEffect(()=>{
    console.log(userProfile)
  },[userProfile])

  
  return (
    <>
    {/* {console.log(userProfile)} */}
      <div style={{display: "flex", marginTop: "20px", marginBottom: "20px"}}>
        <div style={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "70px",
          marginRight: "20px"
        }}>
          <Image
            src={pic}
            roundedCircle
            style={{width: 100, height: 100, marginBottom: 20}}
          />
          <div>
            <h2>{userProfile[0]?.user.name || "No Name"}</h2>
          </div>
          <span style={{color: "grey", fontWeight: 300, marginBottom: 10}}>Profile Page</span>
          <p style={{textAlign: "center"}}>
            {/* Support emergency relief efforts for the rampant floods in Pakistan. Nearly 1,000 people have died and 30
            million without shelter. */}
            {userProfile[0]?.bio || ""}
          </p>

          <div style={{
            backgroundColor: "#EEF9F2",
            borderRadius: "25px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            minHeight: 70,
            alignItems: "center",
            padding: "10px",
            marginBottom: "30px",
            flexWrap: "wrap"
          }}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              $1,896,041
              <span style={{color: "grey", fontWeight: 300, marginBottom: 10}}>raised in USD</span>
            </div>
            <div className="vr" style={{marginRight: 10, marginLeft: 10, color: "green"}}></div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              25.9K
              <span style={{color: "grey", fontWeight: 300, marginBottom: 10}}>supporters</span>
            </div>
            <div className="vr" style={{marginRight: 10, marginLeft: 10, color: "green"}}></div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
             {campaigns.length}
              <span style={{color: "grey", fontWeight: 300, marginBottom: 10}}>campaigns</span>
            </div>
          </div>

          <Button variant="success"
                  style={{width: "80%", display: "flex", alignItems: "center", justifyContent: "center"}}>GIVE
            DIRECTLY<AiOutlineArrowRight/></Button>

        </div>

        <div style={{width: "70%"}}>
          <Image
            rounded
            src={help}
            style={{maxHeight: 550, width: "90%"}}
          />
        </div>
      </div>
      <div className="col-9 pt-5 my-5 ps-5">
        <h3>Campaigns</h3>
        <hr/>
        {error && (
            <div className={`text-center ${classes.error}`}> {error} </div>
          )}
        {campaigns.length <= 0 && (
            <div className={classes.noCampaign}>No Campaign Found</div>
          )}
          
        {/*Add dummy card*/}
        <div className="row row-cols-1 row-cols-md-3 g-3">
        
          {campaigns.map((camapign: any) => (
              <CampaignCard camapign={camapign} key={camapign._id} />
            ))}
          {/*End*/}
        </div>
        <hr style={{marginBottom: 50, marginTop: 50}}/>
      </div>

    </>
  );
};

export default Profile;