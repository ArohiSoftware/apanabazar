import React from 'react'
import './kiddsware.css'
import Nurssing from './Nursing/nursing'
import Accessories from './Accessories/Accessories'
import Bath from './Bath/bath'
import Diaper from './Diapers/Diaper'

function KiddsWare()
 {
  
return(
<div>
<h1 className='baby'><b>BABY ACCESSORIES</b></h1>
<Accessories/>
<h1 className='baby'><b>BATH & SKINCARE</b></h1>
<Bath/>
<h1 className='baby'><b>DIAPER & WIPES</b></h1>
<Diaper/>
<h1 className='baby'><b>FEEDING & NURSSING</b> </h1>
<Nurssing/>
</div>
)
}

export default KiddsWare
