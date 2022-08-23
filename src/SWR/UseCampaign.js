import useSWR from "swr";
import {getALlCampaign} from '../services/campaign.service'
function useCampaigns(){
    const {data, error} =  useSWR("http://localhost:4000/v1/campaign/get-all-campaigns", getALlCampaign, 
    {suspense: true,});

    return{
        campaigns: data,
        isLoding: !error && !data,
        isError: error
    }
}

export default useCampaigns;