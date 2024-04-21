import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { CardModalContext } from "../app/App";
import { useContext } from "react";
import { CardPageContext } from "../pages/CardPage";

const CardModal = () => {
    const cardPageContext = useContext(CardPageContext);
    const cardModalContext = useContext(CardModalContext);

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

    const handleSaveCard = () => {
        const idFoundInTheArray = cardModalContext?.cardModalState.find((element) => element.id === id);
        if (idFoundInTheArray) {
            cardPageContext?.setIsSaved({ message: "This artwork is already saved!", triggered: true });
            return;
        }

        cardPageContext?.setIsSaved({ message: "Saved!", triggered: true });

        cardModalContext?.setCardModalState([
            ...cardModalContext?.cardModalState,
            {
                id: id,
                imgUrl: imgUrl,
                title: title,
                creation_date_latest: creation_date_latest,
                department: department,
                accession_number: accession_number,
                technique: technique,
                type: type,
                measurements: measurements,
                did_you_know: did_you_know,
                description: description,
                linkToArtWork: linkToArtWork,
            },
        ]);
    };

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
                            DO YOU WANT SEE MORE?
                        </Link>

                        <Link className="card-modal__link text-link-color--blue text--medium" to="/art-works">
                            CLOSE
                        </Link>
                        <button
                            className="card-modal__save-artwork save-artwork--bg-color save-artwork--text-color"
                            onClick={handleSaveCard}
                        >
                            Save Artwork
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardModal;
