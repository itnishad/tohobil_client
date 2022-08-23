import React from 'react'
import { Link } from "react-router-dom";

import classes from './campaign.module.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';

const CampaignDashbordCard = (props: any) => {
    const {campaign} = props;
    let now = Math.floor((campaign.Amount / campaign.goalAmount) * 100)
  return (
    <div className="col-md-4 ">
        <Card className="h-100">
            <Card.Img variant="top" width={"100px"} height={"200px"} src={`http://localhost:4000/public/images/${campaign.filename}`} />
            <Card.Body className={classes.cardBodyCustom}>
                <Card.Title className="mt-2">{campaign.title}</Card.Title>
                <Card.Text>By : {campaign.user.name}</Card.Text>
                <ProgressBar className="mb-4" now={now} label={`${now}%`} />
                <div className="row">
                <div className="col-6">
                  <p className={classes.buttomMargin}><strong>&#2547;</strong> {campaign.goalAmount}</p>
                  <p>Goal</p>
                </div>
                <div className="col-6 custom-amount">
                  <p className={classes.buttomMargin}><strong>&#2547;</strong> {campaign.Amount}</p>
                  <p>Fund Raised</p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <Link to={`../../update/campaign`} state={campaign}>
                    <Button className="btn btn-primary col-12"  variant="primary">Update Campaign</Button>
                  </Link>
                </div>
              </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default CampaignDashbordCard