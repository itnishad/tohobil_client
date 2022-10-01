import React, { useEffect, useState } from "react";
import { UserVerifiList } from "../../services/admin.service";
import classes from "./userVerifyList.module.css";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const UserVerifyList = () => {
  const [verificationList, setVerificationList] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    UserVerifiList()
      .then((res) => {
        console.log(res.data)
        setVerificationList(res.data.filter((item:any)=> item.campaignId.isVerified === true));
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  const columns = [
    {
      name: "Username",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row: any) => row.country,
      sortable: true,
    },
    {
      name: "Verify Now",
      selector: (row: any) => (
        // <button className="btn btn-success" onClick={() => handle(row.campaignId)}>
        //   Verify Now
        // </button>
        <Link to="../../VerificationDetails" state={row}><button className="btn btn-success">Details</button></Link>
      ),
      sortable: false,
    },
  ];

  return (
    <>
      {error && <div className={`text-center ${classes.error}`}> {error} </div>}

      <div className="container-fluid pb-md-5 mb-5">
        <div className="row">
          <div className="col-12">
            <div className={`card px-3 ${classes.customCard}`}>
              <DataTable columns={columns} data={verificationList} pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserVerifyList;
