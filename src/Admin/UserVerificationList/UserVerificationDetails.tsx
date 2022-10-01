import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { verifiedNow } from "../../services/admin.service";

const UserVerificationDetails = () => {

    const handle = async (id: any) => {
        try {  
          const res = await verifiedNow(id)
          console.log(res);
          alert("Verify Complete");
        } catch (error:any) {
            console.log(error);
          alert("Error Occur");
        }
      };

    const User:any = useLocation().state;

    console.log(User)

  return (
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-6">
                    <div className="">User Name: {User.name}</div>
                    <div className="">User Email: {User.email}</div>
                    <div className="">User Address: {User.address}</div>
                    <div className="">User phone: {User.phone}</div>
                    <div className="">User city: {User.city}</div>
                    <div className="">User country: {User.country}</div>
                </div>

                <div className="col-6 text-end">
                    <img width="50%" height="100%" src={`http://localhost:4000/public/Adminimages/${User.photograph}`} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h1>Discription</h1>
                    <div>{User.description}</div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h1>{User.documentType} Photo</h1>
                    <div><img width="80%" height="80%" src={`http://localhost:4000/public/Adminimages/${User.documentFile}`} alt="" /></div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h1>Previous Work Photo</h1>
                    {User.workImg.map((item:any)=>{
                        return <div className='my-4' key={item}><img width="80%" height="80%" src={`http://localhost:4000/public/Adminimages/${item}`} alt="" /></div>
                    })}
                </div>
            </div>
            
        </div>
        <div className="row me-2 mb-4">
            <div className="col-12 text-end">
            <button className='btn btn-success btn-lg' onClick={() => handle(User.campaignId._id)}> Verify Now</button>
            </div>
        </div>
        
    </div>
  )
}

export default UserVerificationDetails