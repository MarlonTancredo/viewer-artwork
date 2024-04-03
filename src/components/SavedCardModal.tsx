const display = {
    hideDisplay: "none",
    showDisplay: "",
};

type IsSavedClicked = {
    isSavedClicked: boolean;
};

const SavedCardModal = ({ isSavedClicked }: IsSavedClicked) => {
    if (isSavedClicked) {
        return (
            <>
                <span style={{ display: `${display.showDisplay}` }}>Saved!</span>
            </>
        );
    }
    return (
        <>
            <span style={{ display: `${display.hideDisplay}` }}>Saved!</span>
        </>
    );
};

export default SavedCardModal;
