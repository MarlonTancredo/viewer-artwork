import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "0",
                }}
            >
                <Link style={{ padding: "0.5rem", textDecoration: "none", color: "white" }} to={"/"}>
                    Home
                </Link>
                <Link style={{ padding: "0.5rem", textDecoration: "none", color: "white" }} to={"/saved-arts"}>
                    Saved Arts
                </Link>
            </ul>
        </>
    );
};

export default NavLinks;
