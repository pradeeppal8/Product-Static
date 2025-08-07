import { useState, useEffect } from "react";
import CustomLoader from "../../Component/CustomeLoader";
import { useNavigate } from "react-router-dom";
import mainbanner1 from "../../ulits/assets/main-banner1.png";
import { Link } from 'react-router-dom';





function Signup() {
    const [tab, setTab] = useState("login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <CustomLoader loading />;

    const handleLogin = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!email.trim()) newErrors.email = 'Email is Required';
        if (!password.trim()) newErrors.password = 'Password is Required';
        navigate('/home');
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // proceed with login
            alert('Login success');
        }
    };

    return (
        <div className="main-wrapper">
            <img src={mainbanner1} alt="" />
            <div className="auth-container">
                {/* <div className="tabs">
                    <button className={`tab ${tab === "login" ? "active" : ""}`} onClick={() => setTab("login")}>
                        Login
                    </button>
                    <button className={`tab ${tab === "signup" ? "active" : ""}`} onClick={() => setTab("signup")}>
                        Sign Up
                    </button>
                </div> */}

                <div className="login-container">
                    <div className="form-container">
                        <h2>Signup Page</h2>
                        {/* Signup form goes here */}
                        <p>
                            Already have an account? <Link to="/login">Log in now!</Link>
                        </p>
                    </div>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                            <label>EMAIL ADDRESS</label>
                            <input
                                type="email"
                                placeholder="example@domain.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
                            <label>PASSWORD</label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <span className="error-text">{errors.password}</span>}
                        </div>
                        <button type="submit">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default Signup;