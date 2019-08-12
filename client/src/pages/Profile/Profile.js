import React, { Component} from "react";
import "./Profile.css";
import OrderCard from "../../components/ordercards/ordercards";
import FriendCard from "../../components/cards/cards"
import UserInfo from './UserInfo'

const Profile = ({session}) => (
        <div className="profile">
        <UserInfo session={session}/>
        <h1> THE USHE</h1>
    
        <h2> PROFILE </h2>

        <div className="profile-section">
        <p> USER INFO </p>
        <div class="friends-container">
        <FriendCard/>
        </div>
        </div>

        <div className="Orders">
        <p> ORDERS <i class="fas fa-heart"></i></p>
        <button type="button onclick- " className="btn btn-light"> ADD A NEW USHE</button>
       <div class="cards-container">
            
        <OrderCard/>
        </div>
        </div>
       
        </div>
)

export default Profile;