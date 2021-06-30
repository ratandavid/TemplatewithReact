import React from 'react';

function Card(props){
    return(
        <div className="card" style={props.border}>
          <img src={props.image} style={props.style} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-text">{props.Card_heading}</h3>
                <p className="card-text">{props.Card_content}</p>
            </div>
        </div>
    );
}

export default Card;