import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo.png'

const Footer = () => {
        return (
                <div className="footer mt-5">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <Link to="/" className="navbar-brand text-dark">
                                                        <img src={logo} className="img-fluid rounded-circle" width="55" alt="" /> <span><span className="fw-bold fs-2 brand-color">M</span>edinova</span>
                                                </Link>
                                                <br />
                                                <div className="mt-4 p-2">
                                                        <img src="https://www.kindpng.com/picc/m/22-223188_facebook-icon-red-png-png-download-green-facebook.png" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                        <img src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                        <img src="https://yt3.ggpht.com/ytc/AKedOLQOxbU9dZGL0XnLXMzWRRZiW7elSPl4JguWrcYfaxE=s900-c-k-c0x00ffffff-no-rj" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                </div>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <h3 className="fw-bold pb-3">Company</h3>
                                                <h6 className="p-0 m-0 footer-item">About Us</h6>
                                                <h6 className="p-0 m-0 footer-item">Vision & Mission</h6>
                                                <h6 className="p-0 m-0 footer-item">Leadership</h6>
                                                <h6 className="p-0 m-0 footer-item">Careers</h6>
                                                <h6 className="p-0 m-0 footer-item">News & Article</h6>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <h3 className="fw-bold pb-3">Support</h3>
                                                <h6 className="p-0 m-0 footer-item">Help Center</h6>
                                                <h6 className="p-0 m-0 footer-item">FAQ</h6>
                                                <h6 className="p-0 m-0 footer-item">Contact Us</h6>
                                                <h6 className="p-0 m-0 footer-item">Tickets</h6>
                                                <h6 className="p-0 m-0 footer-item">Get an Appointment</h6>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <div>
                                                        <h3 className="fw-bold pb-3">Contact Info</h3>
                                                </div>
                                                <div className="d-flex">
                                                        <i className="fas fa-map-marker-alt pt-2"></i>
                                                        <h6 className="ps-3">Chorpara, Mymensingh Medical's Opposite, Mymensingh.</h6>
                                                </div>
                                                <div className="d-flex pt-2">
                                                        <i className="fas fa-envelope pt-1"></i>
                                                        <h6 className="ps-3">support@medinova.com</h6>
                                                </div>
                                                <div className="d-flex pt-2">
                                                        <i className="fas fa-phone-alt pt-1"></i>
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