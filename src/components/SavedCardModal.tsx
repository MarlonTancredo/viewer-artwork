type IsSavedClicked = {
    isModalActive: boolean;
};

const SavedCardModal = ({ isModalActive }: IsSavedClicked) => {
    return (
        <>
            <div className={isModalActive ? "saved-card-modal__container" : "saved-card-modal--hidden"}>Saved!</div>
        </>
    );
};

export default SavedCardModal;
