import "./styles.css";
import { useContext } from "react";
import { CardModalContext } from "../app/App";

const SavedArts = () => {
    const cardModalContext = useContext(CardModalContext);

    return (
        <>
            <div className="page__container page--fade-in">
                <h2>{cardModalContext?.cardModalState.title}</h2>
                <img src={cardModalContext?.cardModalState.imgUrl} alt={cardModalContext?.cardModalState.title} />
            </div>
        </>
    );
};

export default SavedArts;
