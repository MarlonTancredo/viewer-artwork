import "./styles.css";
import { Link, useLocation } from "react-router-dom";

export type Fields = {
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

export type Data = {
    data: Fields | null;
};

const CardModal = () => {
    const location = useLocation();
    const {
        state: {
            imgUrl,
            title,
            creation_date_latest,
            department,
            accession_number,
            technique,
            type,
            measurements,
            did_you_know,
            description,
            linkToArtWork,
        },
    } = location;

    return (
        <>
            <div className="card-modal__container">
                <div className="card-modal__img-container">
                    <h2>{title}</h2>
                    <img className="card-modal__img" src={imgUrl} />
                </div>

                <div className="card-modal__information">
                    <div>
                        <strong>Title: </strong>
                        {title}
                    </div>
                    <div>
                        <strong>Date: </strong>
                        {creation_date_latest}
                    </div>
                    <div>
                        <strong>Department: </strong>
                        {department}
                    </div>
                    <div>
                        <strong>Accession Number: </strong>
                        {accession_number}
                    </div>
                    <div>
                        <strong>Technique: </strong>
                        {technique}
                    </div>
                    <div>
                        <strong>Type: </strong>
                        {type}
                    </div>
                    <div>
                        <strong>Measurements: </strong>
                        {measurements}
                    </div>
                    <div>
                        <strong>Did you know? </strong>
                        {did_you_know}
                    </div>
                    <div>
                        <strong>Description: </strong>
                        {description}
                    </div>
                    <a>
                        <strong>Do you want see this ArtWork? </strong>
                        {linkToArtWork}
                    </a>
                    <Link to="/art-works" preventScrollReset>
                        CLOSE
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CardModal;
