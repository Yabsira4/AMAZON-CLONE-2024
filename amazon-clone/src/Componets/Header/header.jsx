import React from 'react'
import classes from "../Header/header.module.css"
import { MdLocationPin } from "react-icons/md";
import { GoSearch } from "react-icons/go"
import LowerHeader from './LowerHeader';
import { FaShoppingCart } from "react-icons/fa";


function header() {
  return (
    <>
    
        <section>
            <div className={ classes.header__container}>
                {/* logo */}
             <div className= { classes.log__container}>
                <a href="">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                 </a>
                 <div className= {classes.delevery }>
                    <span>
                       {/* icon  */}
                       <MdLocationPin />
                    </span>
                    <div>
                        <p> Deliver to</p>
                        <span>Ethiopia</span>
                    </div>
                  </div>
                 </div>
              
            
              {/* search section */}
            <div className= {classes.search}>
              
                <select name="" id="">
                    <option value="">All</option>
                </select>
               <input type="text" name='' id='' placeholder='search product' />
               {/* icon */}
               <GoSearch  size={25}/>
               
            </div>
            {/* right side link  */}
            <div className={ classes.order__container}>
              < a href="" className={ classes.language}>
                {/* flag of unitedstate */}
               <img src="https://www.shutterstock.com/shutterstock/photos/1906241347/display_1500/stock-photo-usa-flag-red-star-nation-america-unitedstate-of-amrica-flag-1906241347.jpg" alt="" /> 
               <select>
                <option value="">EN</option>
               </select>
             </a>
              {/* three components */}
              <a href="">
                
                    <p>Sign in</p>
                    <span>Account & Lists</span>
                
              </a>
             {/* orders */}
             <a href="">
                <p>Returns</p>
                <span>& Orders</span>
             </a>
             {/* cart */}
             <a href=''className={classes.cart} >
             <FaShoppingCart size={35}/>
             <span>0</span>
             </a>
            </div>
            </div>
        </section>
       <LowerHeader/>
    </>
  );
};

export default header;