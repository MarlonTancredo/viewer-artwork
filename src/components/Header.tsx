import { ReactNode } from "react";

type Children = {
    children: ReactNode;
};

const Header = ({ children }: Children) => {
    return (
        <>
            <div className="header__container">{children}</div>
        </>
    );
};

export default Header;
