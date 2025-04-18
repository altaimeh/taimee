import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import taimeeLogo from '../assets/taimeeLogoWithoutBackground.png';

const Navbar = () => {
    const [navActive, setNavActive] = useState<boolean>(false);

    const toggleNav = (): void => {
        setNavActive(!navActive);
    };

    const closeMenu = (): void => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>

            <Link to="/">
                <img src={taimeeLogo} alt="Taimee Logo" className="navbar-logo" />
            </Link>

            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>

            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    {[
                        { to: "heroSection", label: "Home" },
                        { to: "About", label: "About Me" },
                        { to: "MySkills", label: "Skills" },
                        { to: "Projects", label: "Projects" },
                        { to: "ContactMe", label: "Contact Me" },

                    ].map(({ to, label }) => (
                        <li key={to}>
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                to={to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="navbar--content"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline-primary"
            >
                Contact Me
            </Link>
        </nav>
    );
};

export default Navbar;
