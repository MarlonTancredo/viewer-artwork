import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import SearchField from "../components/SearchField";
import Header from "../components/Header";
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

    const handleKeyDown = (e: { key: string }) => {
        if (e.key === "Enter") {
            refetch();
        }
    };

    const handleSearchInput = (e: { target: { value: string } }) => {
        setSearchInput(e.target.value);
    };

    const handleSearchButton = () => {
        refetch();
    };

    return status === "pending" ? (
        <>
            <div className="app__container">
                <Loading />
            </div>
        </>
    ) : status === "error" ? (
        <>
            <div className="app__container">{error.message}</div>
        </>
    ) : (
        <>
            <div className="app__container">
                <Header>
                    <SearchField
                        handleSearchInput={handleSearchInput}
                        handleSearchButton={handleSearchButton}
                        handleKeyDown={handleKeyDown}
                    />
                </Header>
                <Card data={data} />
                <div ref={ref}>{isFetching && <Loading />}</div>
            </div>
        </>
    );
};

export default App;
