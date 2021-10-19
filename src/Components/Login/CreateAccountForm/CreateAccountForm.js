import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/login-img.png'

const CreateAccountForm = () => {
        const { handleGoogleLogin, handleName, handleEmail, handlePassword, error, handleRegistration, } = useAuth();

        const location = useLocation();
        const history = useHistory();
        const redirect_URI = location.state?.from || '/';
        // Create New Account:
        const createNewAccount = (e) => {
                e.preventDefault();
                handleRegistration()
                history.push('/login');
        }
        return (
                <div className="container mt-5 pt-5">
                        <div className="row pt-4 p-5">
                                <div className="col-lg-6 signInForm">
                                        <h2 className="text-center p-3 text-success fw-bold">Create An Account</h2>
                                        <form onSubmit={createNewAccount} className="w-75 mx-auto">
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                                        <input onBlur={handleName} type="text" className="form-control" placeholder="Your Name" required />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                                        <input onBlur={handleEmail} type="email" className="form-control" placeholder="Your Email" required />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                                        <input onBlur={handlePassword} type="password" className="form-control" required placeholder="Your Password" />
                                                        {
                                                                error ?
                                                                        <p className="text-danger">{error}</p>
                                                                        :
                                                                        ''
                                                        }
                                                </div>
                                                <div className="d-grid gap-2">
                                                        <button type="submit" className="btn brand-btn fw-bold btn-lg login-btn">
                                                                Create New Account
                                                        </button>
                                                </div>
                                                <div className="mb-3 pt-2 ps-2">
                                                        <p>Already Have an Account ?
                                                                <Link to="/login"> Login Here</Link>
                                                        </p>
                                                </div>
                                        </form>

                                        <div className="d-grid gap-2 w-75 mt-3 mx-auto">
                                                <button onClick={handleGoogleLogin} className="btn brand-btn btn-lg fw-bold login-btn">
                                                        <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" className="img-fluid rounded-circle me-3" width="32" alt="" /> Sign In Using Google
                                                </button>
                                        </div>
                                </div>
                                <div className="col-lg-6 p-3 mx-auto pt-5">
                                        <img src={img} className="img-fluid" alt="" />
                                </div>
                        </div>
                </div>
        );
};

export default CreateAccountForm;