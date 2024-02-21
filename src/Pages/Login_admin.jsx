import React from 'react'
import axios from '../api/axios'
// import { useAuth } from '../context/AuthContext';
import AuthService from '../context/Auth_2';
import { useState, useEffect } from "react";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Icons
import { FcHome } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
function Login_admin() {
    // const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const { login: authLogin } = useAuth();

    const optionsToast = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await AuthService.login(username, password);
        } catch (error) {
            // alertReact.error('กรุณาเข้าสู่ระบบ');
            toast.error('กรุณาเข้าสู่ระบบ', optionsToast);
            console.error('Login failed', error);
        }
    };

    const handleHome = () => {
        window.location.href = '/'
    }

    useEffect(() => {
        // document.body.classList.add()
        // console.log('Container Height:', document.querySelector('.login-form-bg').offsetHeight);
    }, [])


    return (
        <div className="login-form-bg h-100 ">
            <div className="h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-xl-6 mx-auto">
                        <div className="form-input-content">
                            <div className="card login-form mb-0">
                                <div className="card-body pt-5">
                                    <a className="text-center" href="index.html">
                                        {" "}
                                        <h4>เข้าสู่ระบบ</h4>
                                    </a>
                                    <form className="mt-5 mb-5 login-input text-center">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                    </form>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-warning w-100" onClick={handleHome}>
                                                <FcHome size={20} style={{ marginRight: '10px' }} />

                                                กลับหน้าหลัก
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-success w-100" onClick={handleLogin}>
                                                เข้าสู่ระบบ

                                                <FcNext size={20} style={{ marginLeft: '10px' }} />
                                            </button>
                                        </div>
                                    </div>



                                    {/* <p className="mt-5 login-form__footer">
                                        Dont have account?{" "}
                                        <a href="page-register.html" className="text-primary">
                                            Sign Up
                                        </a>{" "}
                                        now
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Zoom
            />

        </div>
        

    )
}

export default Login_admin