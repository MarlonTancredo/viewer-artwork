import { Art } from "../types/data";
import "./styles.css";

type CardTypes = {
    data: Art[];
    handleClick?: () => void;
};

const Card = ({ data, handleClick }: CardTypes) => {
    return (
        <>
            <div className="card__container">
                {data?.map((art: Art) => {
                    return (
                        <section key={art.id} className="card__body card--shadow card--fade-in" onClick={handleClick}>
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
                                <div className="card__save-art">Click to save...</div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </>
    );
};

export default Card;
