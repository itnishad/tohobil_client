import React from "react";

import classes from './campaign.module.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';



const CampaignCard = (props: any) => {
    const {camapign} = props
    // console.log(camapign);
    let now = Math.floor((camapign.Amount / camapign.goalAmount) * 100)
    return(
        <div className="col-sm-4 ">
          <Card >
            <Card.Img variant="top" width={"100px"} height={"200px"} src={`http://localhost:4000/public/images/${camapign.filename}`} />
            <Card.Body>
              <Card.Title className="mt-2">{camapign.title}</Card.Title>
              <Card.Text>By : {camapign.user.name}</Card.Text>
              <ProgressBar className="mb-4" now={now} label={`${now}%`} />
              <div className="row">
                <div className="col-6">
                  <p className={classes.buttomMargin}><strong>&#2547;</strong> {camapign.goalAmount}</p>
                  <p>Goal</p>
                </div>
                <div className="col-6 custom-amount">
                  <p className={classes.buttomMargin}><strong>&#2547;</strong> {camapign.Amount}</p>
                  <p>Fund Raised</p>
                </div>
              </div>

              {/* <Button className="btn btn-primary btn-lg btn-block" variant="primary">Go somewhere</Button> */}

              <div className="row">
                <div className="col-sm-12 ">
                <Button className="btn btn-primary col-12"  variant="primary">Make a Donation</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
    )
}

export default CampaignCard;