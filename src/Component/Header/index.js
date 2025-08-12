import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import headerLogo from "../../ulits/assets/header-logo.png";
import Modal from "react-bootstrap/Modal";

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);



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
    const goToLogin = () => {
        navigate("/login");
    };
    const ToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { path: "/home", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/blog", label: "Blog" },
        { path: "/shop", label: "Shop" },
        { path: "/buy", label: "Buy Theme!" },
    ];

    return (
        <>
            <header className={`main-header ${showHeader ? "show" : "hide"} ${location.pathname === "/" ? "home-header" : "other-header"
                }`}>
                <div className="logo">
                    <Link to="/">
                        <img src={headerLogo} alt="Logo" />
                    </Link>
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
                <button
                    className="login-signup-btn"
                    onClick={goToLogin}
                >
                    Log In/Sign Up
                </button>
                <div className="sidebars">
                    <button
                        className={`menu-button ${isOpen == true ? "open" : ""}`}
                        onClick={ToggleSidebar}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav className={`menu ${isOpen == true ? "open" : ""}`}>
                        <div className="sd-header">
                            <Link to="/">
                                {/* <img src={headerLogo} alt="Logo" /> */}
                            </Link>
                            <div className="menu-close" onClick={ToggleSidebar}>
                                {/* <img src={arrowwhite} alt="Close Menu" /> */}
                            </div>
                        </div>
                        <div className="hide-desk">
                            <div className="meno-menu">
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
                                <button
                                    className="login-signup-btn"
                                    onClick={goToLogin}
                                >
                                    Log In/Sign Up
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
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
                    {/* <form onSubmit={handleSubmit}>
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
                    </form> */}

                    <p className="forgot-link">Forgot Your password?</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;
