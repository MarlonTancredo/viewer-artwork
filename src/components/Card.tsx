import "./styles.css";

import { Art } from "../types/data";
import { Fields } from "./CardModal";

type CardTypes = {
    data: Art[];
    getCurrentCard: (data: Fields) => void;
};

const Card = ({ data, getCurrentCard }: CardTypes) => {
    const handleReadMoreClick = ({ id, imgUrl, title, accession_number, cardClick }: Fields) => {
        getCurrentCard({ id, imgUrl, title, accession_number, cardClick });
    };

    return (
        <>
            <div className="card__container">
                {data?.map((art: Art) => {
                    return (
                        <section key={art.id} className="card__body card--shadow card--fade-in">
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
                                <div
                                    className="card__read-more"
                                    onClick={() =>
                                        handleReadMoreClick({
                                            id: art.id,
                                            title: art.title,
                                            imgUrl: art.images.web.url,
                                            accession_number: art.accession_number,
                                            cardClick: "click",
                                        })
                                    }
                                >
                                    READ MORE...
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </>
    );
};

export default Card;
