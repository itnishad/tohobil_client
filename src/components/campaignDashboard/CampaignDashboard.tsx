import React, { useContext, Suspense } from "react";

import authContext from "../../context-api/authContext";
import CampaignContext from "../../context-api/campaignsContext";

import CampaignDashbordCard from "./CampaignDashbordCard";

const CampaignDashboard = () => {
  const user = useContext(authContext).state.User
  console.log(user)
  let campaigns = useContext(CampaignContext);

  if (!user) return <div>Sorry, Login</div>;

  campaigns = campaigns.filter(
    (campaign: any) => campaign.user._id === user._id
  );

  console.log(campaigns);

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
