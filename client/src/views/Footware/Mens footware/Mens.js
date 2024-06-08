import React from 'react'

import logo from './veg-logo.svg'
import { GroceryCard } from '../../../Components/Grocery/GroceryCard'


import shoecleaner from '../Mens footware/shoe-cleaner-img.webp'
import chappal from '../Mens footware/mens-chappal-img.webp'
import flipflop from '../Mens footware/flipflop-img.webp'
import menshoe from '../Mens footware/men-shoes-img.webp'
import whiteshoe from '../Mens footware/white-men-shoes-img.webp'


export function Mens() {

const MensData = [
  {
    productname:"Shoe Cleaner Wet Wipes " ,
    productimg: shoecleaner ,
    productprice:"₹325" ,
    aplabazarprice:"₹325",
    offprice:"₹0",
    quantity:"50 pcs",
    logo : logo,
  },


  {
    productname:"Slippers for Mens" ,
    productimg: chappal ,
    productprice:"₹200" ,
    aplabazarprice:"₹190",
    offprice:"₹10",
    quantity:"1",
    logo : logo,
  },


  {
    productname:"MAAN white-green branded flip flops" ,
    productimg: flipflop ,
    productprice:"₹599" ,
    aplabazarprice:"₹493",
    offprice:"₹18",
    quantity:"1 ",
    logo : logo,
  },

  {
    productname:"Unique Attractive Men Shoes " ,
    productimg: menshoe ,
    productprice:"₹500" ,
    aplabazarprice:"₹480",
    offprice:"₹20",
    quantity:"1",
    logo : logo,
  },



  {
    productname:"White Stylish sneakers for men" ,
    productimg: whiteshoe ,
    productprice:"₹200" ,
    aplabazarprice:"₹195",
    offprice:"₹5",
    quantity:"1",
    logo : logo,
  },


 
  

];
return(

<>

{
  MensData.map(
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

