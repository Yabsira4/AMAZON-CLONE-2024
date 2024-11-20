import React from 'react'
import { IoIosMenu } from "react-icons/io";
import classes from "../Header/header.module.css"
function LowerHeader() {
  return (
    <div className={classes.lower__container} >


        <ul>
            <li>
            <IoIosMenu />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Custemer Service</li>
            <li>Registry</li>
            <li>Gift cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader