// adding necessary file 
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

// Login Component
const Login = () => {
    const [isLogedIn, setIsLogedIn] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { googleSignIn, createAccount, loginAccount, error } = useAuth();


    const handlesubmit = (event) => {
        event.preventDefault();
        isLogedIn ? AccountLogin() : AccountCreate()
    }
    const AccountCreate = () => {
        return createAccount(email, password, name);
    }
    const AccountLogin = () => {
        return loginAccount(email, password)
    }
    const handleToggle = (e) => {
        setIsLogedIn(e.target.checked)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="login-area">
            <div className="container py-5">
                <div className='row'>
                    <div className="col-md-7 mx-auto">
                        <h2 className='text-white pb-3'>Please {isLogedIn ? 'Login' : 'Register'}</h2>
                        <form onSubmit={handlesubmit}>
                            {!isLogedIn && <div className="row mb-3">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleName} type="text" className="form-control" required />
                                </div>
                            </div>
                            }
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input onClick={handleToggle} className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Already Register ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <input className='btn btn-danger' type="submit" value={isLogedIn ? 'Login' : 'Register'} />
                        </form>
                        <h2 className='mt-3 text-danger'>{error}</h2>
                        <div className='pt-3'>--------------------Or-----------------</div>
                        <button onClick={googleSignIn} className='btn btn-danger mt-3'>Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;