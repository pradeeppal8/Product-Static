import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import headerLogo from "../../ulits/assets/header-logo.png";
import Modal from "react-bootstrap/Modal";
import { useTheme } from "../ThemeProvider";


const Sun = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
        {Array.from({ length: 8 }).map((_, i) => (
            <line key={i}
                x1="12" y1="2" x2="12" y2="5"
                stroke="currentColor" strokeWidth="2"
                transform={`rotate(${45 * i} 12 12)`} />
        ))}
    </svg>
);

const Moon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4
             a7 7 0 1 0 10.5 10.5z"
            fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.8" cy="6.2" r="0.8" fill="currentColor" />
        <circle cx="18.6" cy="8.2" r="0.6" fill="currentColor" />
    </svg>
);

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const getInitial = () =>
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");



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
    const [mode, setMode] = useState(getInitial);
    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(mode);
        localStorage.setItem("theme", mode);
    }, [mode]);
    const isDark = mode === "dark";

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
                <div className="dark-mode">
                    <button
                        className="login-signup-btn"
                        onClick={goToLogin}
                    >
                        Log In/Sign Up
                    </button>
                    <button
                        className={`toggle ${isDark ? "dark" : "light"}`}
                        onClick={() => setMode(isDark ? "light" : "dark")}
                        role="switch"
                        aria-checked={isDark}
                        aria-label="Toggle color mode"
                    >
                        <span className="label">{isDark ? "DARK MODE" : "LIGHT MODE"}</span>
                        <span className="thumb" aria-hidden="true">
                            <span className="thumb-inner">{isDark ? <Moon /> : <Sun />}</span>
                        </span>
                    </button>
                </div>
                <div className="sidebars">
                    <button
                        className={`toggle ${isDark ? "dark" : "light"}`}
                        onClick={() => setMode(isDark ? "light" : "dark")}
                        role="switch"
                        aria-checked={isDark}
                        aria-label="Toggle color mode"
                    >
                        <span className="label">{isDark ? "DARK MODE" : "LIGHT MODE"}</span>
                        <span className="thumb" aria-hidden="true">
                            <span className="thumb-inner">{isDark ? <Moon /> : <Sun />}</span>
                        </span>
                    </button>
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
