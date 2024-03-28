import BeatLoader from "react-spinners/BeatLoader";

const override = {
    marginTop: "1.5rem",
};

const Loading = () => {
    return (
        <>
            <BeatLoader
                color={"#141115"}
                size={20}
                cssOverride={override}
                aria-label="Sync Loader"
                data-testid="loader"
            />
        </>
    );
};

export default Loading;
