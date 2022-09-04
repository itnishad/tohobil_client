import React from "react";
import classes from "./userlist.module.css";

import DataTable from "react-data-table-component";
import useSWR from "swr";
import { getUserList } from "../../services/user.service";
import { deleteUser } from "../../services/admin.service";


const handle = async(id:any)=>{
  const res = await deleteUser(id);
  console.log(res);
}


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
    name: "Delete",
    selector: (row: any) => <button className="btn btn-danger" onClick={()=> handle(row._id)}>Delete</button>,
    sortable: false,
  },
];

const UserList = () => {

  const {data, error} = useSWR("http://localhost:4000/v1/user/getAllUser", getUserList);

  if(error){
    return <div>Error</div>
  }
  if(!data){
    return <div>No Data</div>
  }

  return (
    <div className="container-fluid pb-md-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className={`card px-3 ${classes.customCard}`}>
            <DataTable columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
