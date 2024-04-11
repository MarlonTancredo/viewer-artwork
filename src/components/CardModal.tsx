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
            id,
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
            <div className="card-modal__container container-shadow">
                <img className="card-modal__img" src={imgUrl} />
                <div className="card-modal__information">
                    <div className="card-modal__title text--dark-color text--big text--bold">{title}</div>
                    <div>{creation_date_latest}</div>
                    <div>
                        <i>({department})</i>
                    </div>
                    <div>{accession_number}</div>
                    <div>{technique}</div>
                    <div>{type}</div>
                    <div>{measurements}</div>
                    <div className="text--dark-color text--bold">DID YOU KNOW?</div>
                    <div className="">{did_you_know}</div>
                    <div className="text--dark-color text--bold">DESCRIPTION</div>
                    <div>{description}</div>
                    <div className="card-modal__link-section">
                        <Link
                            className="card-modal__link text-link-color--blue text--medium"
                            to={linkToArtWork}
                            target="_blank"
                        >
                            DO YOU WANT MORE?{" "}
                        </Link>
                        <Link className="card-modal__link text-link-color--blue text--medium" to="/art-works">
                            CLOSE
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardModal;
