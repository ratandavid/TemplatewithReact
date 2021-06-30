import React from 'react';
import './Banner.css'


function Banner(){
    return(
        <div className="container-fluid my_banner">
            <div className="container">
                <div className="row">
                    
                    <div className=' col-md-9 col-sm-9 col-xs-6' >
                        <h1 className="Banner_heading">Lorem Ipsum</h1>
                    </div>
                    <div className=" col-md-3 col-sm-3 col-xs-6 nav mynav">
                        
                        <ul>
                        <h5>Loreum Ipsum Dolor</h5> 
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h2 className="Banner_content-heading">Lorem ipsum dolor sit amet, consectetur</h2>
                        <p className="Banner_content-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <center><button>Loreum ipsum</button></center>  
                    </div>
                </div>
            </div>
        </div>   
    );
}


export default Banner;