import React from 'react'
import bajra from '../GreainSection/Bajra.jpeg'
import barley from '../GreainSection/Barley.jpeg'
import blackwheat from '../GreainSection/blackwheat.jpeg'
import eywaseeds from '../GreainSection/eywaseeds.jpeg'
import jwari from '../GreainSection/jwari.jpeg'
import masoor from '../GreainSection/masoor.jpeg'
import multigrain from '../GreainSection/multigraindaliya.jpeg'
import toor from '../GreainSection/organicragitoor.jpeg'
import rice from '../GreainSection/Rice.jpeg'
import wheat from '../GreainSection/th.jpeg'
import { Kidscard } from '../../Components/Kiddcard/kidscard'

function GreainSection() {
  const product=[
    {
     productimg:bajra,
    //  logo: 
    productname:'Bajra',
    offprice:'₹30',
    productprice:'₹280',
    aplabazaeprice:'₹230',
    quantity:'200ml (₹0.90 / 1ml)'
    },
    {
      productimg:barley,
     //  logo: 
     productname:'Barley',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
      productimg:blackwheat,
     //  logo: 
     productname:'Baby sipper bottel',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
      productimg:eywaseeds,
     //  logo: 
     productname:'Baby sipper bottel',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
      productimg:jwari,
     //  logo: 
     productname:'Baby sipper bottel',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
      productimg:masoor,
     //  logo: 
     productname:'Baby sipper bottel',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
      productimg:multigrain,
     //  logo: 
     productname:'Baby sipper bottel',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
      productimg:toor,
     //  logo: 
     productname:'Baby sipper bottel',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
      productimg:rice,
     //  logo: 
     productname:'Baby sipper bottel',
     offprice:'₹30',
     productprice:'₹280',
     aplabazaeprice:'₹230',
     quantity:'200ml (₹0.90 / 1ml)'
     },
     {
     productimg:wheat,
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

export default GreainSection
