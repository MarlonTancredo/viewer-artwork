import { useContext } from "react";
import { CardPageContext } from "../pages/CardPage";

const SavedCardModal = () => {
    const cardPageContext = useContext(CardPageContext);
    return (
        <>
            <div
                className={
                    cardPageContext?.isSaved.triggered ? "saved-card-modal__container" : "saved-card-modal--hidden"
                }
            >
                {cardPageContext?.isSaved.message}
            </div>
        </>
    );
};

export default SavedCardModal;
