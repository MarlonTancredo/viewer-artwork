import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import "./styles.css";

const App = () => {
    const [limit, setLimit] = useState(6);
    const [searchInput, setSearchInput] = useState("");
    const { ref, inView } = useInView({ threshold: 1 });

    const getData = async () => {
        try {
            const response = await fetch(
                `https://openaccess-api.clevelandart.org/api/artworks/?q=${searchInput}&limit=${limit}&has_image=1`,
            );
            const data = await response.json();
            console.log(data);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    };

    const { data, status, error, isFetching, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => getData(),
    });

    useEffect(() => {
        if (inView) {
            setLimit((limit) => (limit += 4));
            refetch();
        }
    }, [inView]);

    const handleSearchButton = () => {
        refetch();
    };

    return status === "pending" ? (
        <div className="app-container">
            <Loading />
        </div>
    ) : status === "error" ? (
        <div className="app-container">{error.message}</div>
    ) : (
        <div className="app-container">
            <div>
                <div
                    style={{
                        display: "flex",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        zIndex: "1",
                        height: "5vh",
                        width: "100vw",
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <input
                        style={{ width: "30vw", height: "2vh" }}
                        type="text"
                        placeholder="Enter..."
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                    ></input>
                    <button style={{ width: "6vw", height: "2.5vh" }} onClick={handleSearchButton}>
                        Search
                    </button>
                </div>
            </div>
            <Card data={data} />
            <div ref={ref}>{isFetching && <Loading />}</div>
        </div>
    );
};

export default App;
