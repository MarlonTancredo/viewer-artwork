import { Link, useLocation } from "react-router-dom";

export type Fields = {
    id: string;
    title: string;
    imgUrl: string;
    accession_number: string;
    cardClick: string;
    ref: string;
};

export type Data = {
    data: Fields | null;
};

const CardModal = () => {
    const location = useLocation();

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50vw",
                }}
            >
                <img src={location.state.imgUrl} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50vw",
                    }}
                >
                    <div>{location.state.title}</div>
                    <div>{location.state.accession_number}</div>
                    <div>{location.state.title}</div>
                    <div>{location.state.accession_number}</div>
                    <div>{location.state.title}</div>
                    <div>{location.state.accession_number}</div>
                    <div>{location.state.title}</div>
                    <div>{location.state.accession_number}</div>
                    <div>{location.state.title}</div>
                    <div>{location.state.accession_number}</div>
                    <div>{location.state.title}</div>
                    <div>{location.state.accession_number}</div>
                    <Link to="/art-works" preventScrollReset>
                        CLOSE
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CardModal;
