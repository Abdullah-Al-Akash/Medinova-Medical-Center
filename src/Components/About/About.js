import React from 'react';
import './About.css';
import aboutImg from '../../images/about-img.png'
import goalImg from '../../images/our-goal.png';

const About = () => {
        return (
                <div className="container mt-5 pt-5 about">
                        <div className="row">
                                <div className="col-lg-6">
                                        <img src={aboutImg} className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 about-text mt-3 p-5">
                                        <div>
                                                <h1 className="brand-color fw-bold text-decoration-underline">About Us</h1>
                                                <h6 className="fw-normal mt-4">We the MEDINOVA MEDICAL SERVICES LTD. an approved Medical Check-Up Center of the Executive Board of The Health Minister’s Council for G.C.C (Gulf Co-operation Council) States, bearing G.C.C Computer Code No. 05/01/24. We are one of the member medical centre under GAMCA, Dhaka-Bangladesh. We are situated at the prime location of Chorpara, Mymensingh Medical's Opposite, Mymensingh.</h6>
                                        </div>
                                </div>
                        </div>
                        <h1 className="mt-5 text-center pt-5 fw-bold brand-color text-decoration-underline">Our Goal</h1>
                        <div className="row mt-3 p-5">
                                <div className="col-lg-6">


                                        <div>
                                                <div className="row">
                                                        <div className="col-1">
                                                                <i className="fas fa-arrow-circle-right brand-color"></i>
                                                        </div>
                                                        <div className="col-10">
                                                                <h6> To establish a referral Diagnostic and Medical Services Centre.</h6>
                                                        </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                        <div className="col-1">
                                                                <i className="fas fa-arrow-circle-right brand-color"></i>
                                                        </div>
                                                        <div className="col-10">
                                                                <h6> To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</h6>
                                                        </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                        <div className="col-1">
                                                                <i className="fas fa-arrow-circle-right brand-color"></i>
                                                        </div>
                                                        <div className="col-10">
                                                                <h6> Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</h6>
                                                        </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                        <div className="col-1">
                                                                <i className="fas fa-arrow-circle-right brand-color"></i>
                                                        </div>
                                                        <div className="col-10">
                                                                <h6> To promote Health Education & Medical Services.</h6>
                                                        </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                        <div className="col-1">
                                                                <i className="fas fa-arrow-circle-right brand-color"></i>
                                                        </div>
                                                        <div className="col-10">
                                                                <h6> Day care Centre for follow-up cardiac renal and oncology patients.</h6>
                                                        </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                        <div className="col-1">
                                                                <i className="fas fa-arrow-circle-right brand-color"></i>
                                                        </div>
                                                        <div className="col-10">
                                                                <h6> To build a full fledged specialized (Tertiary) Hospital.</h6>
                                                        </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                        <div className="col-1">
                                                                <i className="fas fa-arrow-circle-right brand-color"></i>
                                                        </div>
                                                        <div className="col-10">
                                                                <h6> Set up Satellite collection Centre.</h6>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-6 mt-5">
                                        <img src={goalImg} className="img-fluid" alt="" />
                                </div>
                        </div>
                </div>
        );
};

export default About;