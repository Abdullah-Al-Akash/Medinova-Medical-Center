import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
        const { id, name, img, description, available_time } = props.service;
        // Use History:
        const history = useHistory();
        const appointment = () => {
                history.push(`/appointment/${id}`)
        }
        return (
                <div>
                        <div class="col p-3">
                                <div class="h-100 service-card">
                                        <div className="service-img">
                                                <img src={img} className="img-fluid" class="card-img-top" alt="..." />
                                        </div>
                                        <div class="card-body">
                                                <h3 class="card-title brand-color fw-bold">{name}</h3>
                                                <p class="text-start">{description.slice(0, 120)}</p>
                                        </div>
                                        <div className="d-flex h-100 justify-content-between align-items-center p-3 pt-0">
                                                <small>{available_time}</small>
                                                <button onClick={appointment} className="btn fw-bold brand-btn align-items-center">Appointment Now</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Service;