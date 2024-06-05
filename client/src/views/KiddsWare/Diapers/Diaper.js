import React from 'react'

import { Kidscard } from '../../../Components/Kiddcard/kidscard'
import diaper from '../Diapers/diaperrashcream.webp'
import huggies from '../Diapers/huggies.webp'
import littles from '../Diapers/littles.webp'
import luvlap from '../Diapers/luvlap.webp'
import mainypoko from '../Diapers/mainypoko.webp'
import pampers from '../Diapers/pampers.webp'
import pampmultipack from '../Diapers/pampmultipack.webp'
import skincare from '../Diapers/skincarewipes.webp'
import wipes from '../Diapers/wipes.webp'
function Diaper()
 {
   const product=[
        {
         productimg:diaper,
        //  logo: 
        productname:'Baby sipper bottel',
        offprice:'₹30',
        productprice:'₹280',
        aplabazaeprice:'₹230',
        quantity:'200ml (₹0.90 / 1ml)'
        },
        {
          productimg:huggies,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:littles,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:luvlap,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:mainypoko,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:pampers,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:pampmultipack,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:skincare,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:wipes,
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

export default Diaper
