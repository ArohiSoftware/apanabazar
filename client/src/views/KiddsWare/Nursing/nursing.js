import React from 'react'
// import './kiddsware.css'
import { Kidscard } from '../../../Components/Kiddcard/kidscard'
import sipper from '../../KiddsWare/sipper.webp'
import bib from '../../KiddsWare/bib.webp'
import cup from '../../KiddsWare/cup.webp'
import feeding from '../../KiddsWare/feeding.webp'
import brush from '../../KiddsWare/brush.webp'
import spoon from '../../KiddsWare/bowlspoon.webp'
import essential from '../../KiddsWare/nipple.webp'
import glass from '../../KiddsWare/glass.webp'
import hot from '../../KiddsWare/hot.webp'
import silspoon from '../../KiddsWare/silspoon.webp'
import plates from '../../KiddsWare/plate.webp'
import tipspoon from '../../KiddsWare/tipspoon.webp'
function Nurssing()
 {
   const product=[
        {
         productimg:sipper,
        //  logo: 
        productname:'Baby sipper bottel',
        offprice:'₹30',
        productprice:'₹280',
        aplabazaeprice:'₹230',
        quantity:'200ml (₹0.90 / 1ml)'
        },
        {
          productimg:bib,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:cup,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:feeding,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:brush,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:spoon,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:essential,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:glass,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:hot,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:silspoon,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:plates,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:tipspoon,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         }
   ];
  return (
 <>
 {
 product.map(
  (data)=>{
    return(
    <div className='procard'>
        <Kidscard productimg={data.productimg} productname={data.productname} offprice={data.offprice} productprice={data.productprice} aplabazarprice={data.aplabazaeprice} quantity={data.quantity} />
    </div>
    )
  }
 )

 }
 
 </>
  )
}

export default Nurssing
