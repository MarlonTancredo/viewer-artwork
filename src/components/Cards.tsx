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
                    return (
                        <section id={art.id} key={art.id} className="card__body card--shadow card--fade-in">
                            <img src={art.images.web?.url} alt={art.title} className="card__img" />
                            <div className="card__description">
                                <div className="card__title">
                                    {art.title} {art.creation_date_latest}
                                </div>
                                <div className="card__creator">
                                    {art.creators.length === 0 ? "" : `By ${art.creators[0].description}`}
                                </div>
                                <div className="card__department">
                                    <i>{art.department}</i>
                                </div>
                                <Link
                                    className="card__read-more"
                                    to="/card-modal"
                                    state={{
                                        id: art.id,
                                        title: art.title,
                                        imgUrl: art.images.web.url,
                                        accession_number: art.accession_number,
                                        cardClick: "click",
                                    }}
                                    preventScrollReset
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
