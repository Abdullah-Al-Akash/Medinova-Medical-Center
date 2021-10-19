import React from 'react';
import './Contact.css';
import map from '../../images/map.png';

const Contact = () => {
        return (
                <div className="mt-5 pt-5 container">
                        <div className="row mt-5">
                                <div className="col-lg-6 p-4">
                                        <h1>Mymensingh, Bangladesh.</h1>
                                        <br />
                                        <h3>849 Diamond Str, 07th Floor, Chorpara, Medicals Gate Opposite Side, Mymensingh.</h3>
                                        <br />
                                        <br />
                                        <div>
                                                <h5>Email: support@medinova.com</h5>
                                                <h5>Phone: +6221.2002.2012</h5>
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                        <div className="p-4 bg-danger text-light rounded-3">
                                                <h1 className="fw-bold">Emergency Ambulance</h1>
                                                <h2 className="fw-bold"> +1 212-226-3126</h2>
                                                <br />
                                        </div>
                                        <div className="row p-4">
                                                <div className="col-lg-4">
                                                        <h3>Head Office</h3>
                                                </div>
                                                <div className="col-lg-8">
                                                        <p>Allentown PA | Allanta, GA | Chicago, IL | Dallas, TX, Edison, NJ | Houston, TX</p>
                                                </div>
                                        </div>
                                        <div className="row p-3">
                                                <div className="col-lg-4">
                                                        <h3>Appointment Doctors Time</h3>
                                                </div>
                                                <div className="col-lg-8 pt-3">
                                                        <p>10AM-2PM || 5PM-8PM</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="mt-5 pt-4">
                                <img src={map} className="img-fluid p-3 border border-dark border-3 rounded" alt="" />
                        </div>
                </div>
        );
};

export default Contact;