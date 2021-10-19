import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Appointment.css';

const Appointment = () => {
        const history = useHistory();
        const { serviceId } = useParams();
        // State For Catch Services Data:
        const [services, setServices] = useState([]);

        // Load Data From JSON File:
        useEffect(() => {
                fetch('/services.json')
                        .then(res => res.json())
                        .then(data => setServices(data))
        }, [serviceId]);

        // Patient ID:
        const patientId = Math.round(Math.random() * 100);
        // Confirm Appointment:
        const appointmentSubmit = () => {
                alert('Thank You, Your Appointment has been received. Your Patient ID is ' + `${patientId}`);
                history.push('/');
        }

        // Filter Service From All Service:
        const appointmentService = services?.find(service => service.id === +serviceId);

        const { name, description, available_time, img, fee } = appointmentService ? appointmentService : '';

        return (
                <div className="mt-5 pt-5 container">
                        {
                                appointmentService ?
                                        <div className="row">
                                                <div className="col-lg-6 p-3">
                                                        <div className="h-100">
                                                                <h1 className="card-title brand-color fw-bold text-center pb-3">{name ? name : ''}</h1>
                                                                <div className="appointment-img border border-dark border-3 rounded-1">
                                                                        <img src={img} className="img-fluid" className="card-img-top" alt="..." />
                                                                </div>
                                                                <div className="card-body">

                                                                        <p className="text-start">{description}</p>
                                                                </div>
                                                                <div className="d-flex justify-content-between">
                                                                        <div className="text-center">
                                                                                <h4 className="brand-color fw-bold">Appointment Time </h4>
                                                                                <h5>{available_time}</h5>
                                                                        </div>
                                                                        <div className="text-center">
                                                                                <h4 className="brand-color fw-bold">Appointment Fee</h4>
                                                                                <h3>${fee}</h3>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-6 mt-5 pt-5 p-5">
                                                        <div className="appointmentForm">
                                                                <h2 className="text-center p-5 text-success fw-bold">{name ? name : ''} Department</h2>
                                                                <form onSubmit={appointmentSubmit} className="w-75 mx-auto">
                                                                        <div className="mb-3">
                                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Patient ID</label>
                                                                                <input type="text" className="form-control" placeholder={patientId} disabled />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Appointment Fee</label>
                                                                                <input type="number" className="form-control" placeholder={'$' + appointmentService?.fee} disabled />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Patient Name</label>
                                                                                <input type="text" className="form-control" placeholder="Patient Name" required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Phone Number</label>
                                                                                <input type="number" className="form-control" placeholder="Phone Number" required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                                                                <input type="email" className="form-control" placeholder="Your Email" required />
                                                                        </div>
                                                                        <div className="d-grid gap-2">
                                                                                <button type="submit" className="btn brand-btn fw-bold btn-lg">
                                                                                        Confirm Appointment
                                                                                </button>
                                                                        </div>
                                                                </form>
                                                        </div>
                                                </div>
                                        </div>
                                        :
                                        <div style={{ height: '80vh' }} className="d-flex justify-content-center align-items-center">
                                                <img src="https://trails.ca/wp-content/uploads/2020/10/loading-spinner.gif" className="img-fluid" alt="" />
                                        </div>
                        }
                </div>
        );
};

export default Appointment;