

function Login ({onSwitch}) {

    return (
        <div className="min-h-screen bg-blue-300 flex items-center justify-center"> 
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="usename">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border-2 border-gray-300 p-2 rounded focus-outline-none focus-border-blue-500"
                    />
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded text-lg">
                    Login
                </button>

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
