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
                            <p>
                                <strong>{art.title} </strong>
                            </p>
                            <hr />
                            <p>
                                <strong>Creation date: </strong>
                                {art.creation_date}
                            </p>
                            <p>
                                <strong>Department: </strong>
                                {art.department}
                            </p>
                            {art.creators.map((creator) => {
                                return (
                                    <div key={creator.id}>
                                        <p>
                                            <strong>Creator: </strong>
                                            {creator.description}
                                        </p>
                                    </div>
                                );
                            })}
                            <br />
                        </section>
                    );
                })}
            </div>
        </>
    );
};

export default Card;
