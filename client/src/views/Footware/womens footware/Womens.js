import React from 'react'

import logo from './veg-logo.svg'
import { GroceryCard } from '../../../Components/Grocery/GroceryCard'

import sportsshoe from '../womens footware/fuzzy-sports-shoes-img.webp'
import girlshoe from '../womens footware/girls-shoe.webp'
import flatsandals from '../womens footware/suede-flat-sandals.webp'
import womenboots from '../womens footware/women-boots-img.webp'
import womenflats from '../womens footware/women-flats-img.webp'
import girlsflat from '../womens footware/women-flats.webp'



export function Womens() {

const WomensData = [
  {
    productname:"Gorgeous Girls Sports Shoes" ,
    productimg: sportsshoe,
    productprice:"₹400" ,
    aplabazarprice:"₹380",
    offprice:"₹20",
    quantity:"1",
    logo : logo,
  },


  {
    productname:"Clorings Stylish Jutti for Girls" ,
    productimg: girlshoe ,
    productprice:"₹227" ,
    aplabazarprice:"₹200",
    offprice:"₹27",
    quantity:"1",
    logo : logo,
  },


  {
    productname:"Suede Flat Sandals" ,
    productimg: flatsandals,
    productprice:"₹271" ,
    aplabazarprice:"₹250",
    offprice:"₹21",
    quantity:"1 ",
    logo : logo,
  },

  {
    productname:"Gorgeous Girls Boots " ,
    productimg: womenboots ,
    productprice:"₹500" ,
    aplabazarprice:"₹450",
    offprice:"₹50",
    quantity:"1",
    logo : logo,
  },



  {
    productname:"New Flats" ,
    productimg: womenflats,
    productprice:"₹241" ,
    aplabazarprice:"₹200",
    offprice:"₹41",
    quantity:"1",
    logo : logo,
  },


  {
    productname:"Versatile Women Flats" ,
    productimg: girlsflat ,
    productprice:"₹525" ,
    aplabazarprice:"₹500",
    offprice:"₹25",
    quantity:"1 ",
    logo : logo,
  },



 
  

];
return(

<>

{
  WomensData.map(
    (data) => {
    
  return (
    
     <GroceryCard  productname={data.productname} productimg={data.productimg} productprice={data.productprice} aplabazarprice={data.aplabazarprice} offprice={data.offprice} quantity={data.quantity} logo={data.logo} />
  )
}
  )
}

</>
    
  )
}

