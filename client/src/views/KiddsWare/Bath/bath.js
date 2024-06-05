import React from 'react'
// import './kiddsware.css'
import { Kidscard } from '../../../Components/Kiddcard/kidscard'
import carekit from '../Bath/carekit.webp'
import cotton from '../Bath/cotton.webp'
import cottonbuds from '../Bath/cottonbuds.webp'
import detergaint from '../Bath/detergaint.webp'
import facecream from '../Bath/facecream.webp'
import giftpack from '../Bath/giftpack.webp'
import gumgel from '../Bath/gumgel.webp'
import laltail from '../Bath/laltail.webp'
import lotion from '../Bath/lotion.webp'
import moisturehair from '../Bath/moisturehair.webp'
import oil from '../Bath/oil.webp'
import powder from '../Bath/powder.webp'
import sampoo from '../Bath/sampoo.webp'
import soap from '../Bath/soap.webp'
import toothpaste from '../Bath/toothpaste.webp'
import wash from '../Bath/wash.webp'

function Bath()
 {
   const product=[
        {
         productimg:carekit,
        //  logo: 
        productname:'Baby sipper bottel',
        offprice:'₹30',
        productprice:'₹280',
        aplabazaeprice:'₹230',
        quantity:'200ml (₹0.90 / 1ml)'
        },
        {
          productimg:cotton,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:cottonbuds,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:detergaint,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:facecream,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:giftpack,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:gumgel,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:laltail,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:lotion,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:moisturehair,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:oil,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
            productimg:powder,
           //  logo: 
           productname:'Baby sipper bottel',
           offprice:'₹30',
           productprice:'₹280',
           aplabazaeprice:'₹230',
           quantity:'200ml (₹0.90 / 1ml)'
           },
           {
            productimg:sampoo,
           //  logo: 
           productname:'Baby sipper bottel',
           offprice:'₹30',
           productprice:'₹280',
           aplabazaeprice:'₹230',
           quantity:'200ml (₹0.90 / 1ml)'
           },
           {
            productimg:soap,
           //  logo: 
           productname:'Baby sipper bottel',
           offprice:'₹30',
           productprice:'₹280',
           aplabazaeprice:'₹230',
           quantity:'200ml (₹0.90 / 1ml)'
           },
           {
            productimg:toothpaste,
           //  logo: 
           productname:'Baby sipper bottel',
           offprice:'₹30',
           productprice:'₹280',
           aplabazaeprice:'₹230',
           quantity:'200ml (₹0.90 / 1ml)'
           },
           {
            productimg:wash,
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

export default Bath
