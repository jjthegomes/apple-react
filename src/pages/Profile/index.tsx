import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {

    const logout = () => {
        localStorage.removeItem('logado')
    }

    return (
        <div>
            <h1>Profile</h1>
            <Link to={'news'}> Noticias </Link>
            <button onClick={logout}>Logout</button>

        </div >
    );
}

export default Profile;