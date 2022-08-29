import React, { useContext, Suspense } from "react";
import useSWR from "swr";

import authContext from "../../context-api/authContext";
import CampaignContext from "../../context-api/campaignsContext";
import { getALlCampaign } from "../../services/campaign.service";

import CampaignDashbordCard from "./CampaignDashbordCard";

const CampaignDashboard = () => {
  let campaigns:any
  const user = useContext(authContext).state.User
  
  const {data, error} = useSWR("http://localhost:4000/v1/campaign/get-all-campaigns", getALlCampaign, 
  {suspense: true,});

  if (!user) return <div>Sorry, Login</div>;
  if(!data) return <div>No Data Present</div>
  if(error) return <div>Error</div>
  if(data.length<=0) return <div>Data Length Is Null</div>

  campaigns = data.filter(
    (campaign: any) => campaign.user._id === user._id
  );

  if (campaigns.length <= 0) {
    return <div>Sorry, no Campaigns Found.</div>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 mt-2">
      {campaigns.map((camapign: any) => (
        <Suspense fallback={<></>} key={camapign._id}>
          <CampaignDashbordCard campaign={camapign} />
        </Suspense>
      ))}
    </div>
    // <div>Dashboard</div>
  );
};

export default CampaignDashboard;
