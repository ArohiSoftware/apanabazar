import React from 'react'
import './GroceryCard.css'



export function GroceryCard({ productimg, logo, productname, productprice, aplabazarprice, quantity, offprice}) {
  return (

    <>
  <div className='box'>
        <div className='card'>
        <div>
          <img className='imgg' src={productimg} />
          {/* <img  className='logo' src={logo} /> */}
          </div>
          </div>
        
          <div>
          <h6 className='Product-name'>{productname}</h6>



            <div className='mrpinfo'>
            <div className='price'>
              <p>{offprice}</p>
              <p className='off'>OFF</p>
              </div>
            <div className='mrp'>
              <p className='mrp1'>MRP</p>
              <p className='mrp2'> {productprice}</p>
              </div>
              
              
              <div className='mrpp'>
              <p className='mrpp1'>Apla Bazar</p>
              <p className='mrpp2'> {aplabazarprice}</p>
              </div>
              <p className='taxes'>(Inclusive of all taxes)</p>

            </div> 

            
            
            <div className='bttn'>
            <button >ADD TO CART </button>
            </div>

            </div>
         
            </div>





    </>
  )
}




