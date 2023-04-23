import React from "react"

const Header = () => {
    return (
        <header id="site_header" className="header mobile-menu-hide">
            <section className="header-content">
                <div className="header-photo">
                    <img src="img/main_photo.jpg" alt="Adewale" />
                </div>
                <div className="header-titles">
                    <h2>Adewale Abdulkabir</h2>
                    <h4>Technical Artist</h4>
                </div>
            </section>

            <ul className="main-menu">
                <li className="active">
                    <a href="#home" className="nav-anim" data-animation="3">
                        <span className="menu-icon lnr lnr-home"></span>
                        <span className="link-text">Home</span>
                    </a>
                </li>

                <li>
                    <a href="#portfolio" className="nav-anim" data-animation="3">
                        <span className="menu-icon lnr lnr-briefcase"></span>
                        <span className="link-text">Portfolio</span>
                    </a>
                </li>

                <li>
                    <a href="#resume" className="nav-anim" data-animation="3">
                        <span className="menu-icon lnr lnr-graduation-hat"></span>
                        <span className="link-text">Resume</span>
                    </a>
                </li>


                <li>
                    <a href="#contact" className="nav-anim" data-animation="3">
                        <span className="menu-icon lnr lnr-envelope"></span>
                        <span className="link-text">Contact</span>
                    </a>
                </li>
            </ul>

            <div className="social-links">
                <ul>
                    <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>

            <div className="header-buttons">
                <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
            </div>

            <div className="copyrights">© 2020 All rights reserved.</div>
        </header >
    )
}

export default Header