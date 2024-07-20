import React, { useState } from 'react';
import { login } from '../services/ApiServices';
import { useAuth } from '../utils/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedIn } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password);
            if (response.status === 200) {
                setIsLoggedIn(true); // Update the login state
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-black">
                        Sign in to your cashbook
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="form-group">
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group mt-1">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md group hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
