import React from 'react';
import './Navbar.css';

const Navbar = () => {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div class="container">
                                <a class="navbar-brand" href="#">Medinova Medical Center</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav text-center ms-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;