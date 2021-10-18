import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css';

const Login = () => {
        const { handleName, handleEmail, handlePassword, signUp, signInWithGoogle, error, isLogin, toggleLogin } = useAuth();

        // Google Login:
        // const handleGoogleLogin = () => {
        //         signInWithGoogle()
        //         .then()
        // }

        return (
                <div className="container mt-5 pt-5 ">
                        <h2>Please {isLogin ? 'Login' : 'signUp'}</h2>
                        <div className="row">
                                <div className="col-lg-6">
                                        <form onSubmit={signUp} className="w-75">
                                                {
                                                        !isLogin && <div class="mb-3">
                                                                <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
                                                                <input onBlur={handleName} type="text" class="form-control" required />
                                                        </div>
                                                }
                                                <div class="mb-3">
                                                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                                                        <input onBlur={handleEmail} type="email" class="form-control" required />
                                                </div>
                                                <div class="mb-3">
                                                        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                                                        <input onBlur={handlePassword} type="password" class="form-control" required />
                                                        {
                                                                error ?
                                                                        <p className="text-danger">{error}</p>
                                                                        :
                                                                        ''
                                                        }
                                                </div>
                                                <div class="mb-3 form-check">
                                                        <input onChange={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                        <label class="form-check-label" htmlFor="exampleCheck1">Already Create Account ?</label>
                                                </div>
                                                <div className="d-grid gap-2">
                                                        <button type="submit" class="btn brand-btn">
                                                                {
                                                                        isLogin ? 'Login' : 'Create Account'
                                                                }
                                                        </button>
                                                </div>
                                        </form>
                                        <div className="d-grid gap-2 w-75 mt-3">
                                                <button onClick={signInWithGoogle} className="btn brand-btn btn-lg fw-bold login-btn">
                                                        <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" className="img-fluid rounded-circle me-3" width="32" alt="" /> Sign In Using Google
                                                </button>
                                        </div>
                                </div>
                                <div className="col-lg-6"></div>
                        </div>
                </div>
        );
};

export default Login;