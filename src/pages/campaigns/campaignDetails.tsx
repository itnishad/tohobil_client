import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ProgressBar from 'react-bootstrap/ProgressBar';

const CampaignDetails = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8 ">
          <img src="" alt="Cover Image" />
          <p>Reverse Blade</p>
          <p>Category</p>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
            <p><strong>&#2547;</strong>2,020 Raised of <strong>&#2547;</strong>50000 Goal</p>
            <ProgressBar className="mb-4" now={50} label={`$40`} />
            <button className="btn btn-primary btn-lg">DONATE NOW</button>
            {/* #Todo Copy link */}
            {/* Share Link */}
            
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
