import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ReactNode } from "react";
import taimeeLogo from '../assets/taimeeLogoWithoutBackground.png';
export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <img src={taimeeLogo} alt="Taimee Logo" style={{ width: '200px' }} />

            </Link>
            <ul>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    );
}

interface CustomLinkProps {
    to: string;
    children: ReactNode;
    [key: string]: any;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} className="nav-link-bold" {...props}>
                {children}
            </Link>
        </li>
    );
}

