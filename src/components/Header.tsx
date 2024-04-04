import { ReactNode } from "react";

type Children = {
    children: ReactNode;
};

const Header = ({ children }: Children) => {
    return (
        <>
            <div className="header__container header__container--shadow">{children}</div>
            <div className="header__margin"></div>
        </>
    );
};

export default Header;
