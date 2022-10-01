import React, { useEffect, useState } from "react";
import classes from "./userlist.module.css";

import DataTable from "react-data-table-component";
import { getUserList } from "../../services/admin.service";
import { deleteUser } from "../../services/admin.service";


const handle = async(id:any)=>{
  try {
    const res = await deleteUser(id);
    console.log(res);
  } catch (error) {
    console.log(error)
  }
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

  const [userList, setUserList] = useState<any[]>([]);

  useEffect(()=>{
    const apiCall = async()=>{
      const res = await getUserList();
      setUserList(res);
    }
    apiCall();
  },[])

  return (
    <div className="container-fluid pb-md-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className={`card px-3 ${classes.customCard}`}>
            <DataTable columns={columns} data={userList} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
