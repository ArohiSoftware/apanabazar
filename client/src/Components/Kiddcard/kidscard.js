import './kidscard.css'


export function Kidscard({productimg , logo , productname , offprice , productprice , aplabazarprice , quantity}){
    return(
    
        
            <>
           
          <div className='box'>
            
                <div className='card'>
                  <img className='imgg' src={productimg} />
                  <img  className='logo' src={logo} />
                  
                  </div>
                  <h6 className='Product-name'>{productname}</h6>
        
        
        
                    <div className='mrpinfo'>
                    
                      <p className="price">{offprice}<br/>OFF</p>
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
        
                    
                   
                    <div>
                    <button className='bttn'>ADD TO CART </button>
                    </div>
        
                    </div>

            </>
          
    )
}