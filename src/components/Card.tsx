import { Art } from "../types/data";
import "./styles.css";

type CardHandles = {
    data: Art[];
    handleClick?: () => void;
};

const Card = ({ data, handleClick }: CardHandles) => {
    return (
        <>
            <div className="card__container" onClick={handleClick}>
                {data?.map((art: Art) => {
                    return (
                        <section key={art.id} className="card__body card--shadow card--fade-in">
                            <img src={art.images.web?.url} alt={art.title} className="card__img" />
                            <div
                                className="card-description"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "right",
                                    padding: "1rem",
                                }}
                            >
                                <div
                                    className="card-description__title"
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "bold",
                                        color: "#141115",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {art.title}
                                </div>
                                <div
                                    className="card-description__department"
                                    style={{
                                        fontSize: "0.8rem",
                                        color: "#6d6875",
                                        paddingBottom: "1rem",
                                    }}
                                >
                                    {art.department} {art.creation_date_latest}
                                </div>
                                <div
                                    className="card-description__save-art"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.8rem",
                                        color: "#6d6875",
                                    }}
                                >
                                    <i>Click to save...</i>
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
