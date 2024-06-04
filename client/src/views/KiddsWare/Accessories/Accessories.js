import React from 'react'
// import './kiddsware.css'
import { Kidscard } from '../../../Components/Kiddcard/kidscard'
import brushset from '../Accessories/brushset.webp'
import carbib from '../Accessories/carbib.webp'
import comb from '../Accessories/comb.webp'
import coolingtether from '../Accessories/coolingtether.webp'
import fingertothbrush from '../Accessories/fingertothbrush.webp'
import hairbrush from '../Accessories/hairbrush.webp'
import nailsessor from '../Accessories/nailsessor.webp'
import powderpuff from '../Accessories/powderpuff.webp'
import rattelset from '../Accessories/rattleset.webp'
import softsoother from '../Accessories/softsoother.webp'
import toothbrush from '../Accessories/toothbrush.webp'
function Accessories()
 {
   const product=[
        {
         productimg:brushset,
        //  logo: 
        productname:'Baby sipper bottel',
        offprice:'₹30',
        productprice:'₹280',
        aplabazaeprice:'₹230',
        quantity:'200ml (₹0.90 / 1ml)'
        },
        {
          productimg:carbib,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:comb,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:coolingtether,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:fingertothbrush,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:hairbrush,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:nailsessor,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:powderpuff,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:rattelset,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:softsoother,
         //  logo: 
         productname:'Baby sipper bottel',
         offprice:'₹30',
         productprice:'₹280',
         aplabazaeprice:'₹230',
         quantity:'200ml (₹0.90 / 1ml)'
         },
         {
          productimg:toothbrush,
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

export default Accessories
