import { Art, Data } from "../types/data";

const Card = ({ data }: Data) => {
    return (
        <div className="card-container">
            {data?.map((art: Art) => {
                return (
                    <section key={art.id} className="card card__shadow fade-in">
                        <img src={art.images.web?.url} alt={art.title} className="card__img" />
                        <p>
                            <strong>Title: </strong>
                            {art.title}
                        </p>
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
    );
};

export default Card;
