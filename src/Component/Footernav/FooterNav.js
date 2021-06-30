import React from 'react';
import './footer.css';

function Footernav(){
    return(
        <div className="container-fluid myfooter">
            <div className="row">
                    
                    <div className=' col-md-6 col-sm-6 col-xs-12 ' >
                        <h5 className="footer_heading">Lorem Ipsum</h5>
                    </div>
                    <div className=" col-md-6 col-sm-6 col-xs-12 nav foot_nav">
                        
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            
                        </ul>
                    </div>
                    </div>    
        </div>    
    );
}


export default Footernav;