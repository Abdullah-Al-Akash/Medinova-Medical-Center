import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import defaultUser from '../../../images/default-user.png'
import './Navbar.css';

const Navbar = () => {
        const { user, logOut } = useAuth();
        console.log(user?.photoURL);
        // Use History For Login:
        const history = useHistory()

        const handleLogin = () => {
                history.push('/login');
        }
        return (
                <nav class="navbar navbar-expand-lg navbar-light navbar-bg fixed-top">
                        <div class="container">
                                <a class="navbar-brand" href="#">Medinova Medical Center</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav text-center ms-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
                                                </li>
                                                <li class="nav-item">
                                                        <p class="nav-link active">
                                                                {
                                                                        user?.email ?
                                                                                user.displayName :
                                                                                ''
                                                                }
                                                        </p>
                                                </li>
                                                <li class="nav-item">
                                                        {
                                                                user?.email ?
                                                                        <img src={user?.photoURL ? user?.photoURL : defaultUser} className="img-fluid rounded-circle me-3" width="45" alt="" />
                                                                        :
                                                                        ''

                                                        }
                                                </li>
                                                <li class="nav-item">
                                                        {
                                                                user?.email ?
                                                                        <button onClick={logOut} className="btn btn-danger fw-bolder">Log Out</button>
                                                                        :
                                                                        <button onClick={handleLogin} className="btn brand-btn fw-bold">Login</button>
                                                        }
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;