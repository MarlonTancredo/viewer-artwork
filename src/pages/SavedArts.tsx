import "./styles.css";
import { useContext } from "react";
import { CardModalStoreContext } from "../components/CardModalStore";

const SavedArts = () => {
    const [state, setState] = useContext(CardModalStoreContext);

    return (
        <>
            <div className="page__container page--fade-in">
                <h2>{state.title}</h2>
                <img src={state.imgUrl} alt={state.title} />
            </div>
        </>
    );
};

export default SavedArts;
