import { RouterProvider } from "react-router-dom";
import { router } from "../routes/router";
import { createContext, useState } from "react";

type InitialState = {
    id: string;
    imgUrl: string;
    title: string;
    creation_date_latest: string;
    department: string;
    accession_number: string;
    technique: string;
    type: string;
    measurements: string;
    did_you_know: string;
    description: string;
    linkToArtWork: string;
};

const initialState: InitialState[] = [];

export const CardModalContext = createContext<{
    cardModalState: InitialState[];
    setCardModalState: React.Dispatch<React.SetStateAction<InitialState[]>>;
} | null>(null);

const App = () => {
    const [cardModalState, setCardModalState] = useState(initialState);
    return (
        <>
            <CardModalContext.Provider value={{ cardModalState, setCardModalState }}>
                <RouterProvider router={router} />
            </CardModalContext.Provider>
        </>
    );
};

export default App;
