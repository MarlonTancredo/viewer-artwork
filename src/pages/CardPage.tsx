import "./styles.css";
import CardModal from "../components/CardModal";

const CardPage = () => {
    return (
        <>
            <div className="page__container page--fade-in">
                <main className="page__main">
                    <CardModal />
                </main>
            </div>
        </>
    );
};

export default CardPage;
