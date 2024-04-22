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

    if (cardModalContext?.cardModalState.length === 0) {
        return (
            <div className="page__container page--fade-in">
                <h1>No saved Artworks!</h1>
            </div>
        );
    }

    return (
        <div className="page__container page--fade-in">
            {cardModalContext?.cardModalState.map((artwork) => {
                return (
                    <div key={artwork.id} className="saved-arts__container container-shadow">
                        <img
                            src={artwork.imgUrl}
                            alt={artwork.title}
                            style={{ width: "80vw", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                        />
                        <div className="text--dark-color text--big text--bold" style={{ padding: "0.5rem" }}>
                            {artwork.title}
                        </div>
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
