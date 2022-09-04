import React from "react";
import useSWR from "swr";
import { getUser } from "../../services/auth-service";
import { getUserPaymentHistory } from "../../services/user.service";
import Table from "react-bootstrap/Table";

const PaymentHistory = () => {
  const user = getUser();
  const { data, error } = useSWR(
    `http://localhost:4000/v1/user/payment/all/${user.User._id}`,
    getUserPaymentHistory
  );
  if (!data) return <div>No Data</div>;
  if (error) return <div>Error Happen</div>;
  if (data.length <= 0) <div>No Data</div>;

  return (
    <div className="row justify-content-start mt-4 ms-2">
      <div className="col-9 bg-light p-5 custom-campaign">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>Card Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pay:any, index:any)=>{
                return (<tr key={pay._id}>
                <td>{index}</td>
                <td>{pay.transaction}</td>
                <td>{pay.cardtype}</td>
                <td>{pay.amount}</td>
              </tr>)
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
