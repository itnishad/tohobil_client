import React from 'react';
import {Card, Image, ListGroup} from "react-bootstrap";
import donorImg1 from "../../assets/images/Nikky_V.jpg";
// import donorImg2 from "../../assets/images/Nitasha_Nanda.jpg";
// import donorImg3 from "../../assets/images/imran.jpg";

const DonorAndSupporter = (props: any) => {
  let {campaignHistory} = props;
  campaignHistory = campaignHistory.map((item:any)=> {
    return{
      ...item,
      createdAt: new Date(item.createdAt)
    }
  })
  // console.log(campaignHistory)
  return (
    <>
      <Card style={{maxWidth: "18rem", marginTop:"30px"}}>
        <Card.Header>
          <i className="fa-solid fa-trophy" style={{fontSize: "35px", marginRight:"10px"}}></i>
          Top Donors
        </Card.Header>
        
        <ListGroup variant="flush">

        {campaignHistory.sort((a: any, b:any) => (b.amount - a.amount)).slice(0,3).map((item:any)=>{
          return(
            <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}} key={item._id}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg1}
              roundedCircle
            />
            {item.user.name} <p>${item.amount}</p>
          </ListGroup.Item>
          );
        })}
        
          {/* <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg1}
              roundedCircle
            />
            Kamal Khanna <p>$1155</p>
          </ListGroup.Item>
          <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg2}
              roundedCircle
            />
            Nitasha Nanda <p>$945</p>
          </ListGroup.Item>
          <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg3}
              roundedCircle
            />
            Imran<p>$785</p></ListGroup.Item> */}
        </ListGroup>
      </Card>

      <Card style={{maxWidth: "18rem", marginTop:"30px"}}>
        <Card.Header>
          <i className="fa-solid fa-users" style={{fontSize: "35px", marginRight:"10px"}}></i>
          Recent Supporters
        </Card.Header>
        <ListGroup variant="flush" >
        {campaignHistory.sort((a: any, b:any) => (b.createdAt - a.createdAt)).slice(0,3).map((item:any)=>{
          return(
            <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}} key={item._id}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg1}
              roundedCircle
            />
            {item.user.name} <p>${item.amount}</p>
          </ListGroup.Item>
          );
        })}
          {/* <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg3}
              roundedCircle
            />
            Imran<p>$75</p>
          </ListGroup.Item>
          <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg1}
              roundedCircle
            />
            Well Wisher <p>$20</p>
          </ListGroup.Item>
          <ListGroup.Item style={{display: "flex", justifyContent:"space-between"}}>
            <Image
              style={{height: "32px", width: "32px"}}
              src={donorImg2}
              roundedCircle
            />
            Nikky V <p>$50</p>
          </ListGroup.Item> */}
        </ListGroup>
      </Card>
    </>
  );
};

export default DonorAndSupporter;