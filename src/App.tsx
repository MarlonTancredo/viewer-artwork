import { useEffect, useState } from "react";

type Art = {
    id: number;
    title: string;
    creation_date: string;
    description: string;
    images: { web?: { url: string; width: string; height: string; filesize: string; filename: string } };
};

const App = () => {
    const [artList, setArtList] = useState<Art[]>([]);

    const getData = async () => {
        const response = await fetch("https://openaccess-api.clevelandart.org/api/artworks");
        const data = await response.json();
        setArtList(data.data.slice(0, 5));
        console.log(data.data);
        console.log(data.data.slice(0, 5));
    };

    useEffect(() => {
        getData();
    }, []);

    return artList ? (
        <>
            <h1>Arts</h1>
            {artList.map((art) => {
                return (
                    <section key={art.id} style={{ width: "500px" }}>
                        <img src={art.images.web?.url} alt={art.title} style={{ width: "500px" }} />
                        <p>
                            <strong>Title: </strong>
                            {art.title}
                        </p>
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
