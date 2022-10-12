import React from "react";
import { Link } from "react-router-dom";

import classes from './campaign.module.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';
import verifyIcon from '../../assets/images/quality-3602.svg'



const CampaignCard = (props: any) => {
    const {camapign} = props
    console.log(camapign);
    let now = Math.floor((camapign.Amount / camapign.goalAmount) * 100);
    return(
        <div className="col-md-4 ">
          <Card className="h-100">
            <Card.Img variant="top" width={"100px"} height={"200px"} src={`http://localhost:4000/public/images/${camapign.filename}`} />
            <Card.Body className={classes.cardBodyCustom}>
              <div className="text-end">{camapign.isVerified ? <img alt={"Verify"} src={verifyIcon} height={"25px"} width={"25px"}/> : null } </div>
             <Link to={`../../campaigns/details/${camapign._id}`}><Card.Title className="mt-2">{camapign.title}</Card.Title></Link>
              <Link to={`../../profile/${camapign.user._id}`}><Card.Text>By : {camapign.user.name}</Card.Text></Link>
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
                <div className="col-sm-12">
                <Link to={`../../campaigns/details/${camapign._id}`}>
                <Button className="btn btn-primary col-12"  variant="primary">Make a Donation</Button>
                </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
    )
}

export default CampaignCard;