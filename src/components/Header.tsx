import { ReactNode } from "react";

type Children = {
    children: ReactNode;
};

const Header = ({ children }: Children) => {
    return (
        <>
            <div className="header__container container-shadow">{children}</div>
            <div className="header__margin"></div>
        </>
    );
};

export default Header;
