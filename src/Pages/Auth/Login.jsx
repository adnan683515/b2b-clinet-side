
import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import loginlottie from '../../assets/login (2).json'
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../../Context/AuthContext';
import { Bounce, toast } from 'react-toastify';

const Login = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState("")
    const { login, gooleLogin, dark } = useContext(Authcontext)
    const navi = useNavigate()


    useEffect(() => {
        document.getElementById('title').innerText = 'Login page'
    }, [])


    const handleLogin = e => {
        e.preventDefault()
        const from = e.target
        const fromdata = new FormData(from)
        const info = Object.fromEntries(fromdata.entries())
        const { email, password } = info

        login(email, password)
            .then(() => {

                toast.success('Logged in successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });

                navi('/')
            })
            .catch((er) => {
                setError(er.message)
            })


    }

    const handleGoogleLogin = () => {
        gooleLogin()
            .then(() => {
                toast.success('Registration successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                navi('/')
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return (


        <div className="w-[98%] max-w-7xl mx-auto py-10 px-4">
            <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 ${dark ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg p-6`}>

                {/* Lottie Animation */}
                <Lottie
                    animationData={loginlottie}
                    className="w-full sm:w-1/2 md:w-1/3"
                />

                {/* Login Form */}
                <div className={`w-full sm:w-1/2 md:w-1/3 ${dark ? 'bg-gray-950' : 'bg-neutral-100'} rounded-lg p-6 space-y-5`}>
                    <h1 className={`text-3xl font-bold text-center ${dark ? 'text-white' : ' text-cyan-950'}`}>Login</h1>

                    <form onSubmit={handleLogin} className="space-y-4">
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <div className="space-y-1">
                            <label htmlFor="email" className={`block text-sm font-medium ${dark ? 'text-orange-500' : ''}`}>Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className={`w-full px-4 py-2 ${dark ? 'bg-black text-white' : 'bg-white'} border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400`}
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className={`block text-sm font-medium ${dark ? 'text-orange-500' : ''}`}>Password</label>
                            <input
                                required
                                type={show ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                className={`w-full px-4 py-2 ${dark ? 'bg-black text-white' : 'bg-white'} border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400`}
                            />
                            <div className={`flex justify-between items-center pt-1 text-xs ${dark ? 'text-orange-500':''}`}>
                                <label className="flex items-center" >
                                    <input type="checkbox" onClick={() => setShow(!show)} className="mr-1 " />
                                    Show Password
                                </label>
                                <a href="#" className="text-orange-500 hover:underline">Forgot Password?</a>
                            </div>
                        </div>

                        <button type="submit" className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
                            Sign In
                        </button>
                    </form>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="text-sm text-gray-500">OR</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-white border border-gray-300 rounded-md hover:shadow-md transition"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className="text-sm text-center text-gray-700">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-orange-500 font-medium hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Login;