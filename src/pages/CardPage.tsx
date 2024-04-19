import "./styles.css";
import CardModal from "../components/CardModal";
import SavedCardModal from "../components/SavedCardModal";
import { createContext, useState } from "react";

export const CardPageContext = createContext<{
    isSaved: boolean;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

const CardPage = () => {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <>
            <div className="page__container page--fade-in ">
                <SavedCardModal isModalActive={isSaved} />
                <CardPageContext.Provider value={{ isSaved, setIsSaved }}>
                    <CardModal />
                </CardPageContext.Provider>
            </div>
        </>
    );
};

export default CardPage;
