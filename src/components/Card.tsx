import { Art, Data } from "../types/data";
import "./styles.css";

const Card = ({ data }: Data) => {
    return (
        <>
            <div
                className="card__container"
                onClick={() => {
                    console.log("Click");
                }}
            >
                {data?.map((art: Art) => {
                    return (
                        <section key={art.id} className="card__body card--shadow card--fade-in">
                            <img src={art.images.web?.url} alt={art.title} className="card__img" />
                            <div
                                className="card-description__container"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "right",
                                }}
                            >
                                <div
                                    className="card-description__title"
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "bold",
                                        color: "#141115",
                                        padding: "0.5rem",
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
                                        paddingLeft: "0.5rem",
                                    }}
                                >
                                    {art.department} {art.creation_date_latest}
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
