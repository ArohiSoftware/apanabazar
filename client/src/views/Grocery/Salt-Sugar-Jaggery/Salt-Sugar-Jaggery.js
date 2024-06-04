import React from 'react'

import logo from './veg-logo.svg'
import { GroceryCard } from '../../../Components/Grocery/GroceryCard'



export function SaltSugarJaggery() {

const SaltData = [
  {
    productname:"Green Pumpkin Seeds" ,
    productimg: pumpkinseed ,
    productprice:"₹50" ,
    aplabazarprice:"₹49",
    offprice:"₹1",
    quantity:"50 g",
    logo : logo,
  },


  {
    productname:"Dates/Kharjura" ,
    productimg: liondates ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Organic kismis/Raisins" ,
    productimg: kismis ,
    productprice:"₹599" ,
    aplabazarprice:"₹493",
    offprice:"₹18",
    quantity:"1 kg",
    logo : logo,
  },

  {
    productname:"Pista Magaj-Plain Kernel " ,
    productimg: pista ,
    productprice:"₹300" ,
    aplabazarprice:"₹226",
    offprice:"₹25",
    quantity:"100 g",
    logo : logo,
  },



  {
    productname:"Black Raisins" ,
    productimg: raisinkishmish ,
    productprice:"₹120" ,
    aplabazarprice:"₹93",
    offprice:"₹23",
    quantity:"200 g",
    logo : logo,
  },


  {
    productname:"" ,
    productimg: sabja ,
    productprice:"₹180" ,
    aplabazarprice:"₹130",
    offprice:"₹50",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Sesame Oil" ,
    productimg: walnutakhrot ,
    productprice:"₹625" ,
    aplabazarprice:"₹625",
    // offprice:"₹19",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: watermelonseed ,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },

  

];
return(

<>

{
  SaltData.map(
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

