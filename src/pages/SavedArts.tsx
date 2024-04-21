import "./styles.css";
import { useContext } from "react";
import { CardModalContext } from "../app/App";

const SavedArts = () => {
    const cardModalContext = useContext(CardModalContext);

    const handleRemoveButton = (id: string) => {
        if (cardModalContext?.cardModalState === undefined) {
            return;
        }

        const newArray = cardModalContext?.cardModalState.filter((element) => element.id !== id);
        cardModalContext.setCardModalState(newArray);
    };

    return (
        <div className="page__container page--fade-in">
            {cardModalContext?.cardModalState.map((artwork) => {
                return (
                    <div key={artwork.id} className="saved-arts__container container-shadow">
                        <h2>{artwork.title}</h2>
                        <img src={artwork.imgUrl} alt={artwork.title} style={{ width: "80vw" }} />
                        <button
                            className="saved-arts__remove-artwork remove-artwork--bg-color remove-artwork--text-color"
                            onClick={() => handleRemoveButton(artwork.id)}
                        >
                            Remove Artwork
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default SavedArts;
