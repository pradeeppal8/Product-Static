import { useState, useEffect } from "react";
import CustomLoader from "../../Component/CustomeLoader";
import { useNavigate } from "react-router-dom";





function Login() {
    const [tab, setTab] = useState("login");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <CustomLoader loading />;

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("Login successful!");
        setTimeout(() => {
            navigate("/home");
        }, 1000);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setMessage("Sign up successful!");
    };

    return (
        <div className="auth-container">
            <div className="tabs">
                <button className={`tab ${tab === "login" ? "active" : ""}`} onClick={() => setTab("login")}>
                    Login
                </button>
                <button className={`tab ${tab === "signup" ? "active" : ""}`} onClick={() => setTab("signup")}>
                    Sign Up
                </button>
            </div>

            <div className="form-container">
                {tab === "login" ? (
                    <form className="form" onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                        {message && <p className="success-message">{message}</p>}
                    </form>
                ) : (
                    <form className="form" onSubmit={handleSignup}>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>
                        {message && <p className="success-message">{message}</p>}
                    </form>
                )}
            </div>
        </div>


    );
}

export default Login;