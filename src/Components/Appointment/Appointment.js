import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
        const { serviceId } = useParams();
        // State For Catch Services Data:
        const [services, setServices] = useState([]);

        // Load Data From JSON File:
        useEffect(() => {
                fetch('/services.json')
                        .then(res => res.json())
                        .then(data => setServices(data))
        }, [serviceId])

        // Filter Service From All Service:
        const appointmentService = services?.find(service => service.id === +serviceId);
        console.log(appointmentService)

        const { name, description, available_time, img, fee } = appointmentService ? appointmentService : '';

        return (
                <div className="mt-5 pt-5 container">
                        {
                                appointmentService ?
                                        <div className="row">
                                                <div className="col-lg-6 p-3">
                                                        <div class="h-100">
                                                                <h1 class="card-title brand-color fw-bold text-center pb-3">{name ? name : ''}</h1>
                                                                <div className="appointment-img border border-dark border-3 rounded-1">
                                                                        <img src={img} className="img-fluid" class="card-img-top" alt="..." />
                                                                </div>
                                                                <div class="card-body">

                                                                        <p class="text-start">{description}</p>
                                                                </div>
                                                                <div className="d-flex justify-content-between">
                                                                        <div className="text-center">
                                                                                <h4 class="brand-color fw-bold">Appointment Time </h4>
                                                                                <h5>{available_time}</h5>
                                                                        </div>
                                                                        <div className="text-center">
                                                                                <h4 class="brand-color fw-bold">Appointment Fee</h4>
                                                                                <h3>${fee}</h3>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-6">

                                                </div>
                                        </div>
                                        :
                                        <h3>Loading</h3>
                        }
                </div>
        );
};

export default Appointment;