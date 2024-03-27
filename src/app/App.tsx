import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./App.css";

const App = () => {
    const [limit, setLimit] = useState(6);
    const { ref, inView } = useInView({ threshold: 1 });

    const { data, status, error, isFetching, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => getData(),
    });

    const getData = async () => {
        try {
            const response = await fetch(
                `https://openaccess-api.clevelandart.org/api/artworks/?q=ocean&limit=${limit}&has_image=1`,
            );
            const data = await response.json();
            console.log(data);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (inView) {
            setLimit((limit) => (limit += 4));
            refetch();
        }
    }, [inView]);

    return status === "pending" ? (
        <div>
            <h1>Loading...</h1>
        </div>
    ) : status === "error" ? (
        <div>{error.message}</div>
    ) : (
        <div className="app-container">
            <Card data={data} />
            <div ref={ref}>
                <h1>{isFetching && "Loading..."}</h1>
            </div>
        </div>
    );
};

export default App;
