import React from 'react';
import { Link } from 'react-router-dom';
import { patientId } from '../Appointment/Appointment';
import './ConfirmAppointment.css';
import logo from '../../images/logo.png'
import confirmImg from '../../images/confirmAppointment.png'

const ConfirmAppointment = () => {
        return (
                <div className="container mt-5 pt-5">
                        <div className="row mt-5 pb-5">
                                <div className="col-lg-6 p-5 confirm-section text-center">
                                        <div className="text-center">
                                                <Link to="/" className="navbar-brand text-dark">
                                                        <img src={logo} className="img-fluid rounded-circle" width="65" alt="" /> <span><span className="fw-bold fs-1 brand-color">M</span >edinova</span>
                                                </Link>
                                        </div>
                                        <h3 className="mt-3 fw-bold text-danger">Patient ID: {patientId}</h3>
                                        <div className="bg-light pt-5 pb-5 rounded">
                                                <h1 className="mt-3 fw-bold text-success">Successfully <br /> Booked Appointment!</h1>
                                                <p>Please Come in on time with patient!</p>
                                        </div>
                                </div>
                                <div className="col-lg-6 text-center">
                                        <img src={confirmImg} className="img-fluid" alt="" />
                                </div>
                        </div>
                </div>
        );
};

export default ConfirmAppointment;