import React, { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { context } from '../MainContex';


const Login = () => {
    const [error, seterror] = useState('')
    const navigator = useNavigate()
    const { login } = useContext(context)
    const formdata = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        if (email && password != '') {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    login(user)
                    navigator('/')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    seterror(errorMessage)
                    // ..
                });
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Log In</h2>
                <div className="text-red-700">{error}</div>
                <form onSubmit={formdata} action="#" method="POST">
                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Gmail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required=""
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required=""
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
}

export default Login;
