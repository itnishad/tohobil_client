import React from 'react'
import classes from './category.module.css'
const Category = (props:any) => {
  return (
    <>
        <p className={`ps-2 ${classes.category}`}>CATEGORIES</p>
        <button className={`mx-2 ${classes.customBtn}`} onClick={()=> props.handle("All")} >All</button>
        <button className={`mx-2 ${classes.customBtn}`} onClick={()=> props.handle("Nonprofit")} >Nonprofit</button>
        <button className={`mx-2 ${classes.customBtn}`} onClick={()=> props.handle("Education")}>Education</button>
        <button className={`mx-2 ${classes.customBtn}`} onClick={()=> props.handle("Food")}>Food</button>
        <button className={`mx-2 ${classes.customBtn}`} onClick={()=> props.handle("Helthcare")}>Helthcare</button>
        <button className={`mx-2 ${classes.customBtn}`} onClick={()=> props.handle("Environment")}>Environment</button>
    </>
  )
}

export default Category