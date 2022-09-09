import React, { useEffect, useState } from "react";
import CampaignCard from "./campaignCard";
import Category from "../../components/campaign/category";
import { getALlCampaign } from "../../services/campaign.service";
import classes from './campaign.module.css'
// interface campaigns {
//   id: string,
//   title: string,
//   subtitle: string,
//   content: string,
//   Amount: number,
//   goalAmount: number,
//   deadline: Date,
//   category: string,
//   filename: string
// }
const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [visible, setVisible] = useState(6);
  const [category, setCategory] = useState("All");
  const [error, setError] = useState("");

  const showMoreCampaigns = ()=>{
    setVisible(prev=> prev + 3);
  }

  useEffect(() => {
    getALlCampaign()
      .then((res: any) => {
        setCampaigns(res);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  let campaignData: any = [];

  if (category !== "All") {
    campaignData = campaigns.filter(
      (campaign: any) => campaign.category === category
    );
  } else {
    campaignData = campaigns;
  }

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3 my-5 category-bg">
        </div>
        <div className="col-9 pt-5 my-5 ps-5">
        <div className="pt-2 pb-5 px-2"><Category handle={handleCategory}/></div>
        {campaignData.length<=0 && <div className={classes.noCampaign}>No Campaign Found</div>}
        {error && <div className={`text-center ${classes.error}`}> {error} </div>}
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {campaignData.slice(0, visible).map((camapign: any) => (
                <CampaignCard camapign={camapign}  key={camapign._id}/>
            ))}
          </div>
          {campaignData.length>=visible && <button className="btn btn-primary my-5" onClick={showMoreCampaigns}>Load More</button>}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
