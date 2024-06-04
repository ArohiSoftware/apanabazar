import Navbar from "../../Components/Navbar/Navbar";
import Pro from "../../Components/Cards/Cards";
import './Home.css'
// import Card from '../../views/Grocery'
// import GroceryCard from '../../views/Greenary'
import img1 from '../Home/half.jpg'
import img2 from '../Home/home2.webp'
import img3 from '../Home/home3.jpg'
 export default function Home(){
    return(
        <>
        
        <Navbar/>
        {/* <Card/> */}
        <Pro/>
           {/* <GroceryCard/> */}



           <div className='D-main'>
                <div className='D-img'>
                    <img src={img1}></img>
                </div>

            </div>

            <div className='D-main'>
                <img className='D-img' src={img2}></img>
            </div>

            <div className='D-main'>
                <img className='D-img' src={img3}></img>
            </div>


            <div className="main">

              <div className="aa">
                <div className="bb">
                    <div className="cc">

                    </div>

                </div>

              </div>

            </div>
        </>
    )
}

