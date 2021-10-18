import React from 'react';
import './Footer.css';

const Footer = () => {
        return (
                <div className="footer mt-5">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-3">

                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <h3 className="fw-bold pb-2">Company</h3>
                                                <h6 className="p-0 m-0 footer-item">About Us</h6>
                                                <h6 className="p-0 m-0 footer-item">Vision & Mission</h6>
                                                <h6 className="p-0 m-0 footer-item">Leadership</h6>
                                                <h6 className="p-0 m-0 footer-item">Careers</h6>
                                                <h6 className="p-0 m-0 footer-item">News & Article</h6>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <h3 className="fw-bold pb-2">Support</h3>
                                                <h6 className="p-0 m-0 footer-item">Help Center</h6>
                                                <h6 className="p-0 m-0 footer-item">FAQ</h6>
                                                <h6 className="p-0 m-0 footer-item">Contact Us</h6>
                                                <h6 className="p-0 m-0 footer-item">Tickets</h6>
                                                <h6 className="p-0 m-0 footer-item">Get an Appointment</h6>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <div>
                                                        <h3 className="fw-bold pb-2">Contact Info</h3>
                                                </div>
                                                <div className="d-flex">
                                                        <i class="fas fa-map-marker-alt pt-2"></i>
                                                        <h6 className="ps-3">Chorpara, Mymensingh Medical's Opposite, Mymensingh.</h6>
                                                </div>
                                                <div className="d-flex pt-2">
                                                        <i class="fas fa-envelope pt-1"></i>
                                                        <h6 className="ps-3">support@medinova.com</h6>
                                                </div>
                                                <div className="d-flex pt-2">
                                                        <i class="fas fa-phone-alt pt-1"></i>
                                                        <h6 className="ps-3">
                                                                +6221.2002.2012</h6>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Footer;