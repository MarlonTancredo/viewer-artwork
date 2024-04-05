type IsSavedClicked = {
    isSavedClicked: boolean;
};

const SavedCardModal = ({ isSavedClicked }: IsSavedClicked) => {
    return (
        <>
            <div className={isSavedClicked ? "saved-card-modal__container" : "saved-card-modal--hidden"}>Saved!</div>
        </>
    );
};

export default SavedCardModal;
