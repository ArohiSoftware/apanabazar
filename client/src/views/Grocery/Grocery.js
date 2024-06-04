import React from 'react'
import { Cookingoil } from '../../views/Grocery/Cookingoil/Cookingoil'
import { Dryfruits } from './Dryfruits/Dryfruits'
import { Flours } from './Flours/Flours'




function Grocery() {
  return (
    <>
    <h1 className='pagename'>Cooking Oils</h1>
     {/* <Dryfruits/> */}
     <Flours/>
     

    
    </>
  )
}

export default Grocery
