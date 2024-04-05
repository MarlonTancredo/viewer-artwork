import Header from "../components/Header";
import NavLink from "../components/NavLink";

const SavedArts = () => {
    return (
        <>
            <div className="page__container page--fade-in">
                <Header>
                    <NavLink />
                </Header>
                <main className="page__main">
                    <h1>Saved Arts Page</h1>
                </main>
            </div>
        </>
    );
};

export default SavedArts;
