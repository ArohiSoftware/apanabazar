import'./Cards.css';
import tea from '../../Components/image/tea.png'
// import Cofee from '../../Components/image/Cofee.png'
import Dairy from '../../Components/image/dairy.png'
// import Bathsoap from '../../Components/image/ bathsoaps.png'
import shampoo from '../../Components/image/shampoos.png'
import towel from '../../Components/image/towels.png'




export  default function Pro(){
    return(

        <>
        <div className='container'>
              <h1 className='b'><b>Popular Categories</b></h1>
       
       <div className='maen'>
        <div className='Product'><img className='pic'src={tea} /> <h2 className='h2'>Tea</h2></div>
        {/* <div className='Product'><img className='pic'src={Cofee} /> <h2>Cofee</h2></div> */}
        <div className='Product'><img className='pic'src={Dairy} /> <h2 className='h2'>Dairy</h2></div>
        {/* <div className='Product'><img className='pic'src={Bathsoap} /> <h2>Bath soap</h2></div> */}
        <div className='Product'><img className='pic'src={shampoo} /> <h2 className='h2'>shampoo</h2></div>
        <div className='Product'><img className='pic'src={towel} /> <h2 className='h2'>towel</h2></div>
        <div className='Product'><img className='pic'src={tea} /> <h2 className='h2'>Tea</h2></div>
        <div className='Product'><img className='pic'src={tea} /> <h2 className='h2'>Tea</h2></div>
        <div className='Product'><img className='pic'src={tea} /> <h2 className='h2'>Tea</h2></div>
        {/* <div className='Product'><img className='pic'src={tea} /> <h2 className='h2'>Tea</h2></div> */}
        


       </div>
       </div>
        
        </>
    )
}