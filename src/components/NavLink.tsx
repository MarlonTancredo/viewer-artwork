import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./styles.css";

const NavLink = () => {
    const { pathname } = useLocation();

    return (
        <>
            <ul className="nav-link__container">
                <Link
                    className={pathname === "/" ? "nav-link__link nav-link__link-selected" : "nav-link__link"}
                    to={"/"}
                >
                    Home
                </Link>
                <Link
                    className={pathname === "/saved-arts" ? "nav-link__link nav-link__link-selected" : "nav-link__link"}
                    to={"/saved-arts"}
                >
                    Saved Arts
                </Link>
            </ul>
        </>
    );
};

export default NavLink;
