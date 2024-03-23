import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
    const [limit, setLimit] = useState(5);
    const { ref, inView } = useInView({ threshold: 0.4 });

    const getData = async () => {
        const response = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?limit=${limit}`);
        const data = await response.json();
        console.log(response);
        console.log(data.data);
        return data.data;
    };

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => getData(),
    });

    useEffect(() => {
        if (inView) {
            setLimit((limit) => (limit += 5));
            refetch();
        }
    }, [inView]);

    return (
        !isLoading && (
            <>
                <h1>Arts</h1>
                {data?.map((art: Art) => {
                    return (
                        <section key={art.id}>
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
                <div ref={ref}>Loading...</div>
            </>
        )
    );
};

export default App;
