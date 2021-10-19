import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
        const { name, img } = props.doctor;
        return (
                <div>
                        <div className="col">
                                <div className="h-100 service-card doctor-card">
                                        <div className="doctor d-flex justify-content-center pt-3">
                                                <img src={img} className="img-fluid rounded-circle border border-dark border-3" alt="..." />
                                        </div>
                                        <div className="card-body">
                                                <h6 className="card-title fw-bold text-center">{name}</h6>
                                        </div>
                                        <div className="mt-4 pb-4 text-center social-icon">
                                                <img src="https://www.kindpng.com/picc/m/22-223188_facebook-icon-red-png-png-download-green-facebook.png" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                <img src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZx8Os_t9e0sYfCWTiBk0sB6LQakbdRo42BtylV4JNragjXRumuCqiN6GHU3u0TOjZwQ&usqp=CAU" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Doctor;