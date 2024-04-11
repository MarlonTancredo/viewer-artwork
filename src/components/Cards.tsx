import "./styles.css";

import { Art } from "../types/data";
import { Link } from "react-router-dom";

type CardTypes = {
    data?: null | Art[];
};

const Cards = ({ data }: CardTypes) => {
    return (
        <>
            <div className="card__container">
                {data?.map((art: Art) => {
                    const {
                        id,
                        title,
                        creation_date_latest,
                        creators,
                        department,
                        accession_number,
                        technique,
                        type,
                        measurements,
                        did_you_know,
                        description,
                        url,
                    } = art;
                    return (
                        <section id={id} key={id} className="card__body card--shadow card--fade-in">
                            <img src={art.images.web.url} alt={title} className="card__img" />
                            <div className="card__description">
                                <div className="card__title">
                                    {title} {creation_date_latest}
                                </div>
                                <div className="card__creator">
                                    {creators.length === 0 ? "" : `By ${creators[0].description}`}
                                </div>
                                <div className="card__department">
                                    <i>{department}</i>
                                </div>
                                <Link
                                    className="card__read-more"
                                    to="/card-modal"
                                    state={{
                                        id: id,
                                        title: title,
                                        creation_date_latest: creation_date_latest,
                                        department: department,
                                        imgUrl: art.images.web.url,
                                        accession_number: accession_number,
                                        technique: technique,
                                        type: type,
                                        measurements: measurements,
                                        did_you_know: did_you_know,
                                        description: description,
                                        linkToArtWork: url,
                                    }}
                                >
                                    READ MORE...
                                </Link>
                            </div>
                        </section>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;
