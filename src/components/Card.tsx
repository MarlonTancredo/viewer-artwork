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
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <p id="title" style={{ color: "gray" }}>
                                    {art.title}
                                </p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <p>{art.department}</p>
                                <p>{art.creation_date_latest}</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {art.creators.map((creator) => {
                                    return (
                                        <div key={creator.id}>
                                            <p>{creator.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </div>
        </>
    );
};

export default Card;
