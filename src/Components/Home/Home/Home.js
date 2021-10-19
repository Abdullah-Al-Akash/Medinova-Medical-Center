import React from 'react';
import OurDoctors from '../../OurDoctors/OurDoctors';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
        return (
                <div>
                        <Banner />
                        <Services />
                        <OurDoctors />
                </div>
        );
};

export default Home;