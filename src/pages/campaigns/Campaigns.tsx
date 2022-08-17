import React, { useState, useEffect, Suspense } from "react";
import { getALlCampaign } from "../../services/campaign.service";
import useSWR from "swr";

import SiteCategory from "./siteCategory";
import CampaignCard from "./campaignCard";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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

  const { data, error } = useSWR(
    "http://localhost:4000/v1/campaign/get-all-campaigns",
    getALlCampaign,
    {
      suspense: true,
    }
  );

  const [category, setCategory] = useState("Nonprofit");

  if(category === 'All'){
    campaigns = data 
  }else{
    campaigns = data.filter((campaign:any)=> campaign.category=== category )
    console.log(campaigns);
  }

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    // console.log(category);
  }, [category]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3 my-5 category-bg">
          <SiteCategory handle={handleCategory} />
        </div>
        <div className="col-9 pt-5 my-5">
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
