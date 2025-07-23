import { FaLock } from "react-icons/fa";

function Passpage() {

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
                        className="border-2 text-white rounded w-100 pt-1"
                    />
                </div>
                <div className="pt-5">
                    <label className="block">Username</label>
                    <input
                        type="text"
                        className="border-2 text-white rounded w-100 pt-1"
                    />
                </div>
                <div className="pt-5">
                    <label className="block">Password</label>
                    <input
                        type="text"
                        className="border-2 text-white rounded w-100 pt-1"
                    />
                </div>

                <button
                    className="flex items-center justify-between bg-[#4f47e4] pt-2 pb-2 pr-10 pl-10 mx-auto mt-10 rounded hover:cursor-pointer hover:bg-blue-800 gap-2"
                >
                    <FaLock />
                    Save Password
                </button>
            </div>

            <div className="text-white text-xl font-semibold flex justify-center">
                Your Passwords
            </div>
        </div>
    );
}

export default Passpage