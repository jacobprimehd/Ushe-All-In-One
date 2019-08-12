import React from "react";
import "./cards.css";

function FriendCard(props) {
    return (

    <div className="card-container">
                   
                       
     <h3 className="name"><i class="random name"> </i>John Smith</h3>
     <h4 className="location"> Seattle, WA </h4>
     <h5 className="bio"> Mac and Cheese lover. </h5>

                 
        
    </div>

            );
    }

    export default FriendCard;
