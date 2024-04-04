type IsSavedClicked = {
    isSavedClicked: boolean;
};

const SavedCardModal = ({ isSavedClicked }: IsSavedClicked) => {
    if (isSavedClicked) {
        return (
            <>
                <div className="saved-card__container">Saved!</div>
            </>
        );
    }
    return (
        <>
            <div className="saved-card--hidden">Saved!</div>
        </>
    );
};

export default SavedCardModal;
