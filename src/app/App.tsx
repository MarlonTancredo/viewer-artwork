import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";

type Creator = {
    biography: null;
    birth_year: string;
    death_year: string;
    description: string;
    extent: null;
    id: number;
    name_in_original_language: null | string;
    qualifier: null;
    role: string;
};

type Art = {
    id: number;
    title: string;
    creation_date: string;
    creators: Creator[];
    images: { web?: { url: string; width: string; height: string; filesize: string; filename: string } };
};

const App = () => {
<<<<<<< HEAD
    const [limit, setLimit] = useState(5);
    const { ref, inView } = useInView({ threshold: 0 });
=======
    const [limit, setLimit] = useState(6);
    const { ref, inView } = useInView({ threshold: 0.4 });
>>>>>>> 1f1546510149bd13095bc674e09788d729187b0d

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => getData(),
    });

    const getData = async () => {
        const response = await fetch(
            `https://openaccess-api.clevelandart.org/api/artworks/?limit=${limit}&has_image=1`,
        );
        const data = await response.json();
        console.log(response);
        console.log(data.data);
        return data.data;
    };

    useEffect(() => {
        if (inView) {
            setLimit((limit) => (limit += 3));
            refetch();
        }
    }, [inView]);

    return (
        !isLoading && (
            <>
                <h1>Arts</h1>
                <div className="container">
                    {data?.map((art: Art) => {
                        return (
                            <section key={art.id} className="fade-in card-container card-container__shadow">
                                <img src={art.images.web?.url} alt={art.title} className="card-container__img" />
                                <p>
                                    <strong>Title: </strong>
                                    {art.title}
                                </p>
                                <p>
                                    <strong>Creation date: </strong>
                                    {art.creation_date}
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
                    <section>
                        <h1 ref={ref}>Loading...</h1>
                    </section>
                </div>
            </>
        )
    );
};

export default App;
