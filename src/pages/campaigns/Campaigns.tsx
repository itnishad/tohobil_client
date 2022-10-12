import React, { useEffect, useState } from "react";
import CampaignCard from "./campaignCard";
import Category from "../../components/campaign/category";
import SideFilter from "../../components/campaign/sideFilter";
import CountryFilter from "../../components/campaign/countryFilter";
import { getALlCampaign } from "../../services/campaign.service";
import classes from "./campaign.module.css";
import ads from '../../assets/images/onetakameal.png'

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

const sideFilter = (filterArray: any, campaigns: any) => {

  let filterCampaign = [...campaigns];

  if (filterArray.includes("Most Funded")) {
    filterCampaign.sort((a: any, b: any) => {
      return b.Amount - a.Amount;
    });
  }

  if(filterArray.includes("Varified Campaign")){
    filterCampaign = filterCampaign.filter((item:any)=> item.isVerified === true)
  }

  return filterCampaign;
  // campaignData = campaignData.sort((a:any, b:any) => {return b.Amount - a.Amount});
};

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [visible, setVisible] = useState(6);
  const [category, setCategory] = useState("All");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sideSort, setSideSort] = useState<any[]>([]);
  const [countryFilter, setCountryFilter] = useState("All");

  const showMoreCampaigns = () => {
    setVisible((prev) => prev + 3);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  const handleSideSort = (list: any) => {
    setSideSort(list);
  };

  const handleCountry = (country: any) => {
    setCountryFilter(country);
  };

  useEffect(() => {

    getALlCampaign()
      .then((res: any) => {
        setCampaigns(res.filter((item:any)=> item.active === true));
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

  if (searchQuery) {
    campaignData = campaignData.filter((campaign: any) =>
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  campaignData = sideFilter(sideSort, campaignData);

  if (countryFilter !== "All") {
    campaignData = campaignData.filter(
      (campaign: any) => campaign.country === countryFilter
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 my-5">
          <div className="row mb-5 d-none d-lg-block">
            <div className="col-12 pb-5 ">
              <img src={ads} alt="Card"/>
            </div>
          </div>
          <div className="mb-5">
          <SideFilter handleSideSort={handleSideSort} />
          </div>
          <CountryFilter handleCountry={handleCountry} />
        </div>
        <div className="col-lg-9 pt-sm-2 pt-lg-5 mt-sm-2 my-lg-5 ps-sm-2 ps-lg-5">
          {/* Search Component */}
          <div className="text-end">
            <input
              type="text"
              placeholder="Search campaign for fundraisers"
              className={`mb-2 ${classes.custonSearch}`}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="pt-2 pb-5 px-2">
            <Category handle={handleCategory} />
          </div>
          {campaignData.length <= 0 && (
            <div className={classes.noCampaign}>No Campaign Found</div>
          )}
          {error && (
            <div className={`text-center ${classes.error}`}> {error} </div>
          )}
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {campaignData.slice(0, visible).map((camapign: any) => (
              <CampaignCard camapign={camapign} key={camapign._id} />
            ))}
          </div>
          {campaignData.length >= visible && (
            <div className="text-center">
            <button
              className="btn btn-lg btn-primary mt-5 "
              onClick={showMoreCampaigns}
            >
              Load More
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
