import React from 'react';
import Card from './Card';



const images={
    src_one:'https://s3.amazonaws.com/talkstar-photos/uploads/9122ff17-a275-41dd-a886-87d2795af2af/PaulTasner_2017S-embed.jpg',
    src_two:'https://s3.amazonaws.com/talkstar-photos/uploads/0a95ffba-8cfe-4d9c-8913-736275f78bf9/MatthewWalker_2019-embed.jpg'
}

const style={
    images:{
        borderRadius:'5px',
    },
    card_border:{
        border:'none'
    }
}

function Cardset(){
    return(
        
        <div className="container">
            <div className="row" style={{marginTop:'20px'}}>
                <div className="col-sm-4 col-xs-12">
                    <Card image={images.src_one} style={style.images} Card_heading="Lorem Ipusm Dollor" Card_content="Lorem Ipsum is simply 
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" border={style.card_border}/>
                </div>
                
                <div className="col-sm-4 col-xs-12">
                    <Card image={images.src_two} style={style.images} Card_heading="Lorem Ipusm Dollor" Card_content="Lorem Ipsum is simply 
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" border={style.card_border}/>
                </div>
                
                <div className="col-sm-4 col-xs-12">
                    <Card image={images.src_one}style={style.images} Card_heading="Lorem Ipusm Dollor" Card_content="Lorem Ipsum is simply 
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" border={style.card_border}/>
                </div>

                <div className="col-sm-6 col-xs-12" style={{marginTop:'20px'}}>
                    <Card image={images.src_one}style={style.images} Card_heading="Lorem Ipusm Dollor" Card_content="Lorem Ipsum is simply 
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" border={style.card_border}/>
                </div>

                
                <div className="col-sm-6 col-xs-12" style={{marginTop:'20px'}}>
                    <Card image={images.src_two} style={style.images} Card_heading="Lorem Ipusm Dollor" Card_content="Lorem Ipsum is simply 
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" border={style.card_border}/>
                </div>
                
            </div>
        </div>
        
    );
}

export default Cardset