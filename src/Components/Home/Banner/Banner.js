import React from 'react';
import './Banner.css';

const Banner = () => {
        return (
                <div className="banner">
                        <div className="text-light p-2">
                                <div className="">
                                        <h1 className="m-0 p-0">Your Health</h1>
                                        <h2 className="m-0 p-0">is Our Priority</h2>
                                        <p className="pt-4">Health is a state of complete physical, mental, and social well-being <br /> and not merely the absence of disease or infirmity.</p>
                                </div>
                                <div className="mt-4">
                                        <button className="btn btn-lg fw-bold brand-btn">Book Appointment</button>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;