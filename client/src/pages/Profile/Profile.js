import React from "react";
import "./Profile.css";
import Card from "../../components/cards/cards"
import UserFav from '../../components/userFavs/userFavs'
import withAuth from "../../components/withAuth/withAuth";

const Profile = ({session}) => {
        return (
        <div className="profile">
        <h1> THE USHE</h1>
        <h2> PROFILE </h2>

        <div className="profile-section friends-container">
        <Card username={session.getCurrentUser.username} city={session.getCurrentUser.city} state={session.getCurrentUser.state} bio={session.getCurrentUser.bio}/>
        </div>

        <div className="Orders">
        <p> ORDERS <i className="fas fa-heart"></i></p>
        <button type="button onclick- " className="btn btn-light"> ADD A NEW USHE</button>
       <div className="cards-container">
            
        <UserFav username={session.getCurrentUser.username}/>
        </div>
        </div>
       
        </div>)
}

export default withAuth(session => session && session.getCurrentUser)(Profile);