import BeatLoader from "react-spinners/BeatLoader";

const Loading = () => {
    return <BeatLoader color={"#141115"} size={40} aria-label="Sync Loader" data-testid="loader" />;
};

export default Loading;
