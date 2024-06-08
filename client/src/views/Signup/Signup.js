import React from 'react'

function Signup() {
 

   
        return (
    
            <>
    
                <div className='boxed'>
                    <h1 className='h1'>REGISTER </h1>
    
    
                    <div className='maindivision'>
                        <div className='div1'>
                            <p className='emailid'>EMAIL ID</p>
                            <input type="Email" placeholder="Enter Email Id" required=""  className='inpt'></input>
    
                            <p className='emailid'>CREATE PASSWORD</p>
                            <input type="password" placeholder="Enter Password" required="" className='inpt'></input>
                            <p className='para'>
                                8 Characters
                                1 Uppercase
                                1 Symbol
                                1 Numeric</p>
                        </div>
    
                        <div className='div2'>
                            <p className='emailid'>MOBILE NO</p>
                            <input type="Email" placeholder="Enter Mobile No" required=""  className='inpt'></input>
    
                            <p className='emailid'>CONFIRM PASSWORD</p>
                            <input type="password" placeholder="Re-Enter Password*" required=""  className='inpt'></input>
                        </div>
    
    
                    </div>
                    <button className='btn'>Continue</button>
    
                </div>
    
            </>
        );
   
     
   
}



export default Signup
