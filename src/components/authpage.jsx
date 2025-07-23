import { useState } from "react";
import Login from "./login";
import Signup from "./signup";


function Authpage() {
    const [ isLogin, setIsLogin ] = useState(true);
    const [ loading, setLoading ] = useState(false);

    const LoadingSwitch = () => {
        setLoading(true);
        setTimeout(() => {
            setIsLogin(false);
            setLoading(false);
        }, 1000);
    }

    return (
        <div>
            {loading ? (
                <div className="min-h-screen flex items-center justify-center bg-blue-100">
                    <div className="text-2xl font-semibold animate-pluse text-blue-700">
                        Loading...
                    </div>
                </div>
            ) : isLogin ? (
                <Login onSwitch={LoadingSwitch} />
            ) : (
                <Signup />
            )}
        </div>
    );
}

export default Authpage