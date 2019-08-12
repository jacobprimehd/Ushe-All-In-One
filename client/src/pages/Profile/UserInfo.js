import React from 'react';

const UserInfo = ({session}) => (
    <div>
    <h1>User Info</h1>
    <p>Username: {session.getCurrentUser.username}</p>
    </div>

);
export default UserInfo;