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
                <span
                    style={{
                        display: `${display.showDisplay}`,
                        backgroundColor: "#212529",
                        color: "#f8f9fa",
                        padding: "1rem",
                        position: "fixed",
                        top: "95px",
                        left: "0",
                        zIndex: "1",
                    }}
                >
                    Saved!
                </span>
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
