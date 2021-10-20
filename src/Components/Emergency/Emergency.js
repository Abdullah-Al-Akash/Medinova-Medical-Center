import React from 'react';
import img from '../../images/emergency.png';

const Emergency = () => {
        return (
                <div className="container mt-5 pt-5">
                        <div className="row mt-5 pb-5">
                                <div className="col-lg-6">
                                        <div className="mt-2 text-center">
                                                <div className="p-3 bg-danger text-light rounded-3 w-75 mx-auto">
                                                        <h2 className="fw-bold"> Emergency Hot-Line</h2>
                                                        <h2 className="fw-bold mt-5"><i className="fas fa-phone-alt"></i> +1 212-226-3126</h2>
                                                        <br />
                                                        <h4 className="text-dark fw-bold">Available 24/7 days</h4>
                                                </div>
                                        </div>
                                        <p className="p-4 text-center">Emergency patient means an individual who is acutely ill, injured, or otherwise incapacitated or helpless and who requires emergency care. Emergency patient means an individual who is acutely ill, injured, incapacitated or helpless and who requires emergency care.</p>
                                </div>
                                <div className="col-lg-5">
                                        <img src={img} className="img-fluid rounded" alt="" />
                                </div>
                        </div>
                </div>
        );
};

export default Emergency;