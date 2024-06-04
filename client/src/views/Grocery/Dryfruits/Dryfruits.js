import React from 'react'
import { GroceryCard } from '../../Components/Grocery/GroceryCard'
import logo from './veg-logo.svg'



export function Dryfruits() {

const DryfruitsData = [
  {
    productname:"Gingelly oil" ,
    productimg: gingellyoil ,
    productprice:"₹375" ,
    aplabazarprice:"₹356",
    offprice:"₹19",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Canola Oil" ,
    productimg: borgescanolaoil ,
    productprice:"₹620" ,
    aplabazarprice:"₹359",
    offprice:"₹42",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Groundnut Oil-Argemone Oil Free" ,
    productimg: groundnutoil ,
    productprice:"₹700" ,
    aplabazarprice:"₹685",
    offprice:"₹15",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Light Olive Oil-Frying & Grilling" ,
    productimg: lightoliveoil ,
    productprice:"₹920" ,
    aplabazarprice:"₹563",
    offprice:"₹39",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Nakshatra Pooja oil" ,
    productimg: nakshatraoil ,
    productprice:"₹105" ,
    aplabazarprice:"₹86",
    offprice:"₹18",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Refined Vegetable Oil" ,
    productimg: vegetableoil ,
    productprice:"₹180" ,
    aplabazarprice:"₹130",
    offprice:"₹50",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Sesame Oil" ,
    productimg: sesameoil ,
    productprice:"₹625" ,
    aplabazarprice:"₹625",
    // offprice:"₹19",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: soyabeanoil ,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Sundrop Lite-Cooking Oil" ,
    productimg: sundropoil ,
    productprice:"₹190" ,
    aplabazarprice:"₹185",
    offprice:"₹5",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Organic Cold Pressed Sunflower Cooking Oil" ,
    productimg: sunfloweroil ,
    productprice:"₹450" ,
    aplabazarprice:"₹324",
    offprice:"₹28",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Pure & Unrefined Cold Pressed Virgin Coconut Oil-Naturally" ,
    productimg: coconutoil ,
    productprice:"₹699" ,
    aplabazarprice:"₹524",
    offprice:"₹25",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: soyabeanoil ,
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
  DryfruitsData.map(
    (data) => {
    
  return (
    
     <GroceryCard  productname={data.productname} productimg={productimg} productprice={productprice} aplabazarprice={aplabazarprice} offprice={offprice} quantity={quantity} logo={logo} />
  )
}
  )
}

</>
    
  )
}

