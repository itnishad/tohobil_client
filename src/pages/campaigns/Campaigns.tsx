import React, { useState, useEffect, Suspense, useContext } from "react";

import CampaignContext from "../../context-api/campaignsContext";

import SiteCategory from "./siteCategory";
import CampaignCard from "./campaignCard";

import Spinner from "react-bootstrap/Spinner";

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
  let campaigns:any;
  const [category, setCategory] = useState("All");

  // const {campaigns, isLoding, isError} = useCampaigns();

   campaigns = useContext(CampaignContext);

  useEffect(() => {
    // console.log(category);
  }, [category]);

  if(category !== 'All'){
    campaigns = campaigns.filter((campaign:any)=> campaign.category=== category )
    // console.log(campaigns);
  }

  const handleCategory = (value: string) => {
    setCategory(value);
  };

 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2 my-5 category-bg">
          <SiteCategory handle={handleCategory} />
        </div>
        <div className="col-10 pt-5 my-5">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {campaigns.map((camapign: any) => (
              <Suspense fallback={<></>} key={camapign._id}>
                <CampaignCard camapign={camapign} />
              </Suspense>
            ))}
          </div>
          <Suspense
            fallback={
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            }
          >
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
