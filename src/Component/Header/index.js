import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import searchicon from "../../ulits/assets/search-icon.svg";
import headerLogo from "../../ulits/assets/header-logo.png";
import Modal from "react-bootstrap/Modal";

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    // const [showModal, setShowModal] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    // const [showInput, setShowInput] = useState(false);


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newErrors = {};

    //     // Basic email validation
    //     if (!email) {
    //         newErrors.email = "Email is required";
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         newErrors.email = "Enter a valid email";
    //     }

    //     // Basic password validation
    //     if (!password) {
    //         newErrors.password = "Password is required";
    //     } else if (password.length < 6) {
    //         newErrors.password = "Minimum 6 characters";
    //     }

    //     setErrors(newErrors);

    //     if (Object.keys(newErrors).length === 0) {
    //         // Proceed with login logic (e.g. API call)
    //         console.log("Form Submitted");
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault(); // stop default form behavior
        console.log('Email:', email);
        console.log('Password:', password);

        // here you can send data to backend using fetch/axios
    };


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const menuItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/blog", label: "Blog" },
        { path: "/shop", label: "Shop" },
        { path: "/buy", label: "Buy Theme!" },
    ];

    return (
        <>
            <header className={`main-header ${showHeader ? "show" : "hide"}`}>
                <div className="logo">
                    <img src={headerLogo} alt="Logo" />
                </div>

                <nav className="nav-links">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={location.pathname === item.path ? "active" : ""}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <button className="login-signup-btn" onClick={handleShow}>
                    Log In/Sign Up
                </button>
            </header>
            <Modal show={show} onHide={handleClose} className="login-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>

                        <div className="input-group password-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                            {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>

                        <button type="submit" className="login-btn">Login</button>
                        <button type="button" className="signup-btn">Sign Up Now</button>
                    </form> */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit">Submit</button>
                    </form>

                    <p className="forgot-link">Forgot Your password?</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;
