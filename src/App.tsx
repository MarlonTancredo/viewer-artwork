import { useEffect, useState } from "react";

type Creator = {
    biography: null;
    birth_year: string;
    death_year: string;
    description: string;
    extent: null;
    id: number;
    name_in_original_language: null;
    qualifier: null;
    role: string;
};

type Art = {
    id: number;
    title: string;
    creation_date: string;
    creators: Creator[];
    description: string;
    images: { web?: { url: string; width: string; height: string; filesize: string; filename: string } };
};

const App = () => {
    const [artList, setArtList] = useState<Art[]>();

    const getData = async () => {
        const response = await fetch("https://openaccess-api.clevelandart.org/api/artworks/?limit=5");
        const data = await response.json();
        setArtList(data.data);
        console.log(response);
        console.log(data.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return artList ? (
        <>
            <h1>Arts</h1>
            {artList?.map((art) => {
                return (
                    <section key={art.id} style={{ width: "500px" }}>
                        <img src={art.images.web?.url} alt={art.title} />
                        <p>
                            <strong>Title: </strong>
                            {art.title}
                        </p>
                        {art.creators.map((creator) => {
                            return (
                                <div key={creator.id}>
                                    <p>
                                        <strong>Birth: </strong>
                                        {creator.birth_year}
                                    </p>
                                    <p>
                                        <strong>Death: </strong>
                                        {creator.death_year}
                                    </p>
                                    <p>
                                        <strong>Creator: </strong>
                                        {creator.description}
                                    </p>
                                </div>
                            );
                        })}
                        <p>
                            <strong>Description:</strong> {art.description}
                        </p>
                        <br />
                    </section>
                );
            })}
        </>
    ) : (
        <h1>Fetching...</h1>
    );
};

export default App;
