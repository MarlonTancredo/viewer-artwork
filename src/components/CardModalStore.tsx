import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

type Children = {
    children: ReactNode;
};

type InitialState = {
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

const initialState = {
    imgUrl: "",
    title: "",
    creation_date_latest: "",
    department: "",
    accession_number: "",
    technique: "",
    type: "",
    measurements: "",
    did_you_know: "",
    description: "",
    linkToArtWork: "",
};

export const CardModalStoreContext = React.createContext<[InitialState, Dispatch<SetStateAction<InitialState>>] | null>(
    null,
);

const CardModalStore = ({ children }: Children) => {
    const [state, setState] = useState(initialState);

    return <CardModalStoreContext.Provider value={[state, setState]}>{children}</CardModalStoreContext.Provider>;
};

export default CardModalStore;
