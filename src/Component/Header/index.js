import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import searchicon from "../../ulits/assets/search-icon.svg";



function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const [showInput, setShowInput] = useState(false);


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
        <header className={`main-header ${showHeader ? "show" : "hide"}`}>
            <div className="logo">VA–RA</div>

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

            <div className="header-icons">
                <div style={{ position: "relative", display: "inline-block" }}>
                    <button onClick={() => setShowInput(!showInput)} id="search-icon"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg></button>

                    {showInput && (
                        <input
                            type="text"
                            placeholder="Search..."
                            style={{
                                position: "relative",
                                top: "0px",
                                left: 0,
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                width: "200px"
                            }}
                        />
                    )}
                </div>
                <button className="icon-btn cart">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-cart"
                    >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg><span className="badge">0</span>
                </button>
            </div>
        </header>
    );
}

export default Header;