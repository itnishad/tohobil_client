import React, { useState, Suspense } from "react";


import SiteCategory from "./siteCategory";
import CampaignCard from "./campaignCard";

import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";
import { getALlCampaign } from "../../services/campaign.service";

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
  const {data, error} = useSWR("http://localhost:4000/v1/campaign/get-all-campaigns", getALlCampaign, 
  {suspense: true,});

  if(!data) return <div>No Data Present</div>
  if(error) return <div>Error</div>
  if(data.length<=0) return <div>Data Length Is Null</div>
  

  if(category !== 'All'){
    campaigns = data.filter((campaign:any)=> campaign.category=== category )
  }else{
    campaigns= data;
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
