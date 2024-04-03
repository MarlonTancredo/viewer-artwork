import { ReactNode } from "react";

type Children = {
    children: ReactNode;
};

const Header = ({ children }: Children) => {
    return (
        <>
            <div className="header__container">{children}</div>
            <div style={{ height: "6rem" }}></div>
        </>
    );
};

export default Header;
