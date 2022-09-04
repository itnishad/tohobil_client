import React from 'react'
import DataTable from 'react-data-table-component';
import useSWR from 'swr';
import { getALlCampaign } from '../../services/campaign.service';

const ActiveCampaignList = () => {
  const {data, error} = useSWR("http://localhost:4000/v1/campaign/get-all-campaigns", getALlCampaign);

  if(error) return <div>Error</div>
  if(!data) return <div>No Data Found</div>

  const activeCampaign = data ? data.filter((campain:any)=> campain.active === true ): [];
  
    const columns = [
        // {
        //     name: 'Create By',
        //     selector: (row:any) => row.user.name,
        // },
        {
            name: 'Created By',
            selector: (row:any) => row.user.name,
            sortable: true,
        },
        {
          name: 'Category',
          selector: (row:any) => row.category,
          sortable: true,
        },
        {
          name: 'Deadline',
          selector: (row:any) => row.deadline,
          sortable: true,
        },
        {
          name: 'Goal Amount',
          selector: (row:any) => row.goalAmount,
          sortable: true,
        },
        {
          name: 'Present Amount',
          selector: (row:any) => row.Amount,
          sortable: true,
        },
        {
          name: "Active",
          selector: (row: any) => <button className="btn btn-warning" >In Active Now</button>,
          sortable: false,
        }
        
    ];

  return (
    <div className="container-fluid pb-md-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className={`card px-3`}>
          {/* ${classes.customCard} */}
          <DataTable
            columns={columns}
            data={activeCampaign}
            pagination
        />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveCampaignList