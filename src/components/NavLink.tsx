import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./styles.css";

const NavLink = () => {
    const { pathname } = useLocation();

    return (
        <>
            <ul className="nav-link__container">
                <Link
                    className={pathname === "/art-works" ? "nav-link__link nav-link__link-selected" : "nav-link__link"}
                    to={"/art-works"}
                    preventScrollReset
                >
                    Art Works
                </Link>
                <Link
                    className={pathname === "/saved-arts" ? "nav-link__link nav-link__link-selected" : "nav-link__link"}
                    to={"/saved-arts"}
                    preventScrollReset
                >
                    Saved Arts
                </Link>
            </ul>
        </>
    );
};

export default NavLink;
