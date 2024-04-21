import "./styles.css";
import CardModal from "../components/CardModal";
import SavedCardModal from "../components/SavedCardModal";
import { createContext, useState } from "react";

export const CardPageContext = createContext<{
    isSaved: { message: string; triggered: boolean };
    setIsSaved: React.Dispatch<React.SetStateAction<{ message: string; triggered: boolean }>>;
} | null>(null);

const CardPage = () => {
    const [isSaved, setIsSaved] = useState({ message: "", triggered: false });

    return (
        <>
            <div className="page__container page--fade-in ">
                <CardPageContext.Provider value={{ isSaved, setIsSaved }}>
                    <SavedCardModal />
                    <CardModal />
                </CardPageContext.Provider>
            </div>
        </>
    );
};

export default CardPage;
