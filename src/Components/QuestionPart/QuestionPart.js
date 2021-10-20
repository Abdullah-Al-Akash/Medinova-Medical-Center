import React from 'react';
import img from '../../images/question.png';

const QuestionPart = () => {
        return (
                <div className="container mt-5 pt-5 text-center">
                        <h4 className="text-decoration-underline fw-bold brand-color">Have Any Questions?</h4>
                        <h2 className="w-75 mx-auto fw-bold p-3">“ Our mission is to enhence health
                                and well-being by providing the best total healthcare. ”
                        </h2>
                        <h4 className="fw-bolder mt-2 text-danger">What is your question in mind?</h4>
                        <div className="row mt-5 text-start">
                                <div className="col-lg-6 ps-5 pe-5">
                                        <h4 className="fw-bold text-success pb-3">Who should or should not be using this drug?</h4>
                                        <p>When taken (usually by swallowing, inhaling, or injecting), abused drugs find their way into the bloodstream. From there, they move to the brain and other parts of the body. In the brain, drugs may intensify or dull the senses, change how alert or sleepy people feel, and sometimes decrease physical pain.</p>
                                </div>
                                <div className="col-lg-6 ps-5 pe-5">
                                        <h4 className="fw-bold text-success pb-3">How will it function in my body?</h4>
                                        <p>Body functions are the physiological or psychological functions of body systems. The body's functions are ultimately its cells' functions. Survival is the body's most important business. Survival depends on the body's maintaining or restoring homeostasis, a state of relative constancy, of its internal environment.</p>
                                </div>
                        </div>
                        <div className="row mt-3 text-start">
                                <div className="col-lg-6 ps-5 pe-5">
                                        <h4 className="fw-bold text-success pb-3">How will my use of this medication be monitored?</h4>
                                        <p>Medication monitoring may involve blood tests but can also include other monitoring such as blood pressure, weight or electrocardiograms. Monitoring can be required before initiating medication, soon after starting, or regularly over the course of treatment.</p>
                                </div>
                                <div className="col-lg-6 ps-5 pe-5">
                                        <h4 className="fw-bold text-success pb-3">How long dose take my check-up test? I’m 56 years?</h4>
                                        <p>Usually we try to do as much as possible so that our patients does not have any difficult and provides prompt treatment.</p>
                                </div>
                        </div>
                        <div className="mt-5">
                                <div className="p-4 bg-danger text-light rounded-3 w-75 mx-auto">
                                        <h1 className="fw-bold">Have More Questions?</h1>
                                </div>
                        </div>
                        <div className="row text-start">
                                <div className="col-lg-6 pt-5 p-5">
                                        <div className="appointmentForm">
                                                <h2 className="text-center text-success fw-bold pt-5">Please Submit Your Question</h2>
                                                <div className="w-75 mx-auto pt-3">
                                                        <div className="mb-3">
                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Name</label>
                                                                <input type="email" className="form-control" placeholder="Your Name" required />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email Address</label>
                                                                <input type="email" className="form-control" placeholder="Your Email" required />
                                                        </div>
                                                        <div class="mb-3">
                                                                <label for="exampleFormControlTextarea1" class="form-label fw-bold">Write Your Question</label>
                                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                        <div className="d-grid gap-2">
                                                                <button type="submit" className="btn brand-btn fw-bold btn-lg">
                                                                        Submit Question
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-6 text-center pt-5">
                                        <img src={img} className="img-fluid w-75 pt-3" alt="" />
                                </div>
                        </div>
                        <div className="pb-5 pt-3">
                                <div style={{ background: 'rgb(190, 253, 195)' }} className="p-4 text-success rounded-3 w-75 mx-auto">
                                        <h1 className="fw-bold">We will reply very soon</h1>
                                </div>
                        </div>
                </div>
        );
};

export default QuestionPart;