import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../ulits/assets/header-logo.png";




function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__col brand">
                    <div className="brand__logo">
                        <Link to="/"><img src={headerLogo} alt="Running Shoes" /></Link>
                    </div>
                    <p>7X Theme is a html template for interior and architecture purpose. Today we can tell you, thanks to your passion.</p>
                    <div className="brand__social">
                        <i className="fab fa-behance"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>

                <div className="footer__col posts">
                    <h4>Resent Post</h4>
                    <ul>
                        <li>
                            <div className="date">15 <span>OCT 2019</span></div>
                            <p>On these beams, we’re.</p>
                        </li>
                        <li>
                            <div className="date">17 <span>OCT 2019</span></div>
                            <p>We’ll be a sensation for</p>
                        </li>
                        <li>
                            <div className="date">18 <span>OCT 2019</span></div>
                            <p>We’ll be a sensation for</p>
                        </li>
                    </ul>
                </div>

                <div className="footer__col links">
                    <h4>Useful links</h4>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="footer__col contact">
                    <h4>Contact Us</h4>
                    <p>756 Livingston Street, Brooklyn, NY 11201, United State</p>
                    <p>7xthemedemo@gmail.com</p>
                    <p>(+298) 012–3456–789</p>
                    <p>(+298) 146–6543–480</p>
                </div>
            </div>

            <div className="footer__subscribe">
                <h4>SUBSCRIBE TO OUR NEWSLETTER!</h4>
                <p>Never Miss Anything From 7xtheme By Signing Up To Our Newsletter.</p>
                <div className="subscribe__form">
                    <input type="email" placeholder="ENTER YOUR EMAIL" />
                    <button><i className="fas fa-paper-plane"></i></button>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© 2019 Your Company. Designed By 7xtheme.</p>
            </div>
        </footer>
    );
}

export default Footer