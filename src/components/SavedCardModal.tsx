type IsSavedClicked = {
    isSavedClicked: boolean;
};

const SavedCardModal = ({ isSavedClicked }: IsSavedClicked) => {
    if (isSavedClicked) {
        return (
            <>
                <div className="saved-card-modal__container">Saved!</div>
            </>
        );
    }
    return (
        <>
            <div className="saved-card-modal--hidden">Saved!</div>
        </>
    );
};

export default SavedCardModal;
