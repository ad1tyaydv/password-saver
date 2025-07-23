import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


function Passpage() {

    const [ website, setWebsite ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ savedPasswords, setSavedPasswords ] = useState([]);
    const [ visiblePasswords, setVisiblePasswords ] = useState({});


    useEffect(() => {
        const storedPasswords = localStorage.getItem("savedPasswords");
        if(storedPasswords) {
            setSavedPasswords(JSON.parse(storedPasswords));
        }
    }, []);

    
    const handleSavePassword = () => {
        if(!website || !username || !password) {
            alert("Please fill in all fields");
            return;
        }

    const newPassword = {
        website,
        username, 
        password,
        id: Date.now()
    }

    const updatedPasswords = [...savedPasswords, newPassword];
    setSavedPasswords(updatedPasswords);
    localStorage.setItem("savedPasswords", JSON.stringify(updatedPasswords));

    setWebsite("");
    setUsername("");
    setPassword("");
};

    
    const handleDeletePassword = (id) => {
        const filteredPasswords = savedPasswords.filter(pwd => pwd.id !==  id);
        setSavedPasswords(filteredPasswords);
        localStorage.setItem("savedPasswords", JSON.stringify(filteredPasswords));

        const newVisible = {...visiblePasswords};
        delete newVisible[id];
        setVisiblePasswords(newVisible);
    };
    
    const togglePasswordVisibility = (id) => {
        setVisiblePasswords(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="bg-[#111827] min-h-screen">
            <div className="text-white p-10 font-mono text-2xl flex items-center justify-center gap-3">
                <FaLock />
                Password Saver
            </div>

            <div className="bg-[#1f2937] p-6 max-w-2xl mx-auto rounded-2xl text-white mt-2 mb-10">
                <span className="text-xl font-semibold text-white">
                    Add New Password
                </span>
                <div className="pt-5">
                    <label className="block">Website</label>
                    <input
                        type="text"
                        value={website}
                        placeholder=" Enter the website"
                        onChange={(e) => setWebsite(e.target.value)}
                        className="border-2 border-gray-600 text-white rounded w-150 pt-1"
                    />
                </div>
                <div className="pt-5">
                    <label className="block">Username</label>
                    <input
                        type="text"
                        value={username}
                        placeholder=" Enter the username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="border-2 border-gray-600 text-white rounded w-150 pt-1"
                    />
                </div>
                <div className="pt-5">
                    <label className="block">Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder=" Enter the password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 border-gray-600 text-white rounded w-150 pt-1"
                    />
                </div>

                <button
                    onClick={handleSavePassword}
                    className="flex items-center justify-between bg-[#4f47e4] pt-2 pb-2 pr-20 pl-20 mx-auto mt-10 rounded hover:cursor-pointer hover:bg-blue-800 gap-2"
                >
                    <FaLock />
                    Save Password
                </button>
            </div>

            <div className="max-w-2xl mx-auto pb-10 px-4">
                <div className="text-white text-xl font-semibold flex justify-center">
                    Your Saved Passwords
                </div>

                {savedPasswords.length === 0 ? (
                    <div className="text-gray-400 text-center">No passwords saved yet</div>
                ) : (
                    <div className="space-y-4 pt-3">
                        {savedPasswords.map((pwd) => (
                            <div key={pwd.id} className="bg-[#1f2937] p-4 rounded-lg text-white">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-bold">{pwd.website}</div>
                                        <div className="text-sm text-gray-300">Username: {pwd.username}</div>
                                        <div className="text-sm text-gray-300">
                                            Password: {visiblePasswords[pwd.id] ? (
                                                <span className="text-green-300">{pwd.password}</span>
                                            ) : (
                                                "••••••••"
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => togglePasswordVisibility(pwd.id)}
                                            className="text-blue-400 hover:text-blue-300"
                                            title={visiblePasswords[pwd.id] ? "Hide password" : "Show password"}
                                        >
                                            {visiblePasswords[pwd.id] ? <FaEyeSlash /> : <IoMdEye />}
                                        </button>
                                        <button 
                                            onClick={() => handleDeletePassword(pwd.id)}
                                            className="text-red-400 hover:text-red-300"
                                            title="Delete password"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Passpage