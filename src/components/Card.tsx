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
                                    flexDirection: "column",
                                    alignItems: "right",
                                }}
                            >
                                <div id="title" style={{ color: "#141115", padding: "1rem" }}>
                                    <div style={{ fontSize: "0.9rem", fontWeight: "bold", marginBottom: "0.8rem" }}>
                                        {art.title}
                                    </div>
                                    <div style={{ fontSize: "0.8rem", color: "#6d6875" }}>
                                        {art.department} {art.creation_date_latest}
                                    </div>
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
