import React from "react";
import { Table } from "react-bootstrap";

const Contributors = (props: any) => {
  let { campaignHistory } = props;
  campaignHistory = campaignHistory.map((item:any)=> {
    return{
      ...item,
      createdAt: new Date(item.createdAt)
    }
  })
  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {campaignHistory.map((item: any, index:any) => {
              return (
                <tr key={item._id}>
                  <td>{++index}</td>
                  <td>{item.user.name}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Contributors;
