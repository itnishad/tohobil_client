import React, { useState } from 'react'
import classes from './category.module.css'
import Button from 'react-bootstrap/Button';

const Category = (props:any) => {
    const [isActive, setIsActive] = useState(true);
  return (
    <>
        {/* <p className={`ps-2 ${classes.category}`}>CATEGORIES</p> */}
        <span className={`me-4 ${classes.category}`}> Showing Campaign for  :</span>
        <Button variant='outline-dark' type={"button"} className={`mx-2 ${classes.customBtn}`} onClick={()=> {props.handle("All"); setIsActive(true) }} active={isActive}>All</Button>
        <Button variant='outline-dark' className={`mx-2 ${classes.customBtn}`} onClick={()=> {props.handle("Nonprofit"); setIsActive(false) }} >Nonprofit</Button>
        <Button variant='outline-dark' className={`mx-2 ${classes.customBtn}`} onClick={()=> {props.handle("Education"); setIsActive(false) }}>Education</Button>
        <Button variant='outline-dark' className={`mx-2 ${classes.customBtn}`} onClick={()=> {props.handle("Food"); setIsActive(false) }}>Food</Button>
        <Button variant='outline-dark' className={`mx-2 ${classes.customBtn}`} onClick={()=> {props.handle("Helthcare"); setIsActive(false) }}>Helthcare</Button>
        <Button variant='outline-dark' className={`mx-2 ${classes.customBtn}`} onClick={()=> {props.handle("Environment"); setIsActive(false) }}>Environment</Button>
        <Button variant='outline-dark' className={`mx-2 ${classes.customBtn}`} onClick={()=> {props.handle("test"); setIsActive(false) }}>test</Button>
    </>
  )
}

export default Category