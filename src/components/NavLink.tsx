import { Link } from "react-router-dom";

import "./styles.css";

const NavLink = () => {
    return (
        <>
            <ul className="nav-link__container">
                <Link className="nav-link__link" to={"/"}>
                    Home
                </Link>
                <Link className="nav-link__link" to={"/saved-arts"}>
                    Saved Arts
                </Link>
            </ul>
        </>
    );
};

export default NavLink;
