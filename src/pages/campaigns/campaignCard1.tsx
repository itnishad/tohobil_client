import React, { useState, useEffect, useMemo } from "react";
import { getImage } from "../../services/campaign.service";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";

const CampaignCard = (props: any) => {
    const {data, error} = useSWR(`http://localhost:4000/v1/campaign/image/:${props.campaign.filename}`, getImage)

  let campaign = props.campaign ? (
    props.campaign.map((campaign: any) => {
      return (
        <div className="col-sm-4 " key={campaign._id}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{campaign.title}</Card.Title>
              <Card.Text>{campaign.subtitle}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      );
    })
  ) : (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  return <div className="row row-cols-1 row-cols-md-3 g-3">{campaign}</div>;
};

export default CampaignCard;
