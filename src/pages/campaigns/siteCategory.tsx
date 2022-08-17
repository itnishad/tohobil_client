import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import classes from './campaign.module.css'
const SiteCategory = (props:any)=>{
    return(
        <div className=" py-2">
            <p className={classes.category}>CATEGORIES</p>
            <ListGroup>
                <ListGroup.Item onClick={()=>{props.handle("All")}}>All</ListGroup.Item>
                <ListGroup.Item onClick={()=>{props.handle("Nonprofit")}}>Nonprofit</ListGroup.Item>
                <ListGroup.Item onClick={()=>{props.handle("Education")}}>Education</ListGroup.Item>
                <ListGroup.Item onClick={()=>{props.handle("Food")}}>Food</ListGroup.Item>
                <ListGroup.Item onClick={()=>{props.handle("Helthcare")}}>Helthcare</ListGroup.Item>
                <ListGroup.Item onClick={()=>{props.handle("Environment")}}>Environment</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SiteCategory