import { useState } from "react";


function Signup() {

    const [ formData, setFormData ] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if(response.ok) {
                alert("✅ Signup successful!")
            } else {
                alert("❌ Signup failed: " + data.message);
            }
        } catch (error) {
            console.log("Error:", error);
            alert("Server error");
        }
    };


    return (
        <div className="min-h-screen bg-blue-300 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Signup</h2>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="username">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Choose a username"
                        className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
                    />
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded text-lg">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;