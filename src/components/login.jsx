import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login ({onSwitch}) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login attempt:", username, password);

    if(username === 'admin' && password === 'password') {
        navigate('/passwords');
    } else {
        setError('Invalid username or password');
    }
};

    return (
        <div className="min-h-screen bg-blue-300 flex items-center justify-center"> 
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

                <form onSubmit={handleLogin}> 
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2" htmlFor="usename">
                            Username:
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            placeholder="Enter your username"
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-2 border-gray-300 p-2 rounded focus-outline-none focus-border-blue-500"
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded text-lg">
                    Login
                    </button>
                </form>
                
                <div className="flex py-2 justify-center">
                    <span className="mr-2">Don't have an account?</span>
                    <button 
                        className="text-blue-600 underline"
                        onClick={onSwitch}
                    >
                        Create account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login
