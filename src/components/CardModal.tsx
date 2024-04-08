import { useEffect, useState } from "react";

export type Fields = {
    id: string;
    imgUrl: string;
    title: string;
    accession_number: string;
    cardClick: string;
};

export type Data = {
    data?: Fields;
    getClosedButtonClicked: (data: string) => void;
};

const CardModal = ({ data, getClosedButtonClicked }: Data) => {
    const handleCloseButton = () => {
        getClosedButtonClicked("click");
    };

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    zIndex: "2",
                    backgroundColor: "#6d6875",
                    top: "0",
                    left: "0",
                }}
            >
                <div>{data?.title}</div>
                <div>{data?.accession_number}</div>
                <button onClick={handleCloseButton}>CLOSE</button>
            </div>
        </>
    );
};

export default CardModal;
