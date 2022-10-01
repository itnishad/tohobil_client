import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getALlCampaign } from "../../services/campaign.service";
import { inActiveCampaign } from "../../services/admin.service";

const ActiveCampaignList = () => {
  const [activeCampaigns, setActiveCampaigns] = useState<any[]>([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const apiCall = async () => {
      const res = await getALlCampaign();
      setActiveCampaigns(res);
    };
    apiCall();
  }, [reload]);

  const handleActive = async (row: any) => {
    try {
      const res = await inActiveCampaign(row._id);
      setReload(!reload);
      if(res.status === 200){
        alert("Campaign Updated");
      }
    } catch (error) {
      alert("Server Response Failed")
    }
    
  };

  const activeCampaign = activeCampaigns.filter(
    (campain: any) => campain.active === true
  );

  const columns = [
    // {
    //     name: 'Create By',
    //     selector: (row:any) => row.user.name,
    // },
    {
      name: "Created By",
      selector: (row: any) => row.user.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row: any) => row.category,
      sortable: true,
    },
    {
      name: "Deadline",
      selector: (row: any) => row.deadline,
      sortable: true,
    },
    {
      name: "Goal Amount",
      selector: (row: any) => row.goalAmount,
      sortable: true,
    },
    {
      name: "Present Amount",
      selector: (row: any) => row.Amount,
      sortable: true,
    },
    {
      name: "Active",
      selector: (row: any) => (
        <button className="btn btn-warning" onClick={()=>handleActive(row)}>
          In Active Now
        </button>
      ),
      sortable: false,
    },
  ];

  return (
    <div className="container-fluid pb-md-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className={`card px-3`}>
            {/* ${classes.customCard} */}
            <DataTable columns={columns} data={activeCampaign} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaignList;
