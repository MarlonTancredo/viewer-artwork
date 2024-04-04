import Header from "../components/Header";
import NavLink from "../components/NavLink";
import "./styles.css";

const PageNotFound = () => {
    return (
        <>
            <div className="page__container page--fade-in ">
                <Header>
                    <NavLink />
                </Header>
                <main className="page__main">
                    <h1>Page Not Found!</h1>
                </main>
            </div>
        </>
    );
};

export default PageNotFound;
