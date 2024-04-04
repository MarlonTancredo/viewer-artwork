import Card from "../components/Card";
import Header from "../components/Header";
import SearchField from "../components/SearchField";

import Loading from "../components/Loading";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import SavedCardModal from "../components/SavedCardModal";
import NavLinks from "../components/NavLinks";

import "./styles.css";

const Home = () => {
    const [limit, setLimit] = useState(8);
    const [searchInput, setSearchInput] = useState("");
    const [isSavedClicked, setIsSavedClicked] = useState(false);
    const { ref, inView } = useInView({ threshold: 1 });

    const { data, status, error, isFetching, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => getData(),
    });

    const getData = async () => {
        try {
            const response = await fetch(
                `https://openaccess-api.clevelandart.org/api/artworks/?q=${searchInput}&limit=${limit}&has_image=1`,
            );
            const data = await response.json();
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

    const handleEnterKeyDown = (e: { key: string }) => {
        if (e.key === "Enter") {
            refetch();
        }
    };

    const handleSearchInput = (e: { target: { value: string } }) => {
        setSearchInput(e.target.value);
    };

    const handleCardClick = () => {
        const timeOut = setTimeout(() => {
            setIsSavedClicked(false);
        }, 300);

        setIsSavedClicked(true);

        timeOut;
    };

    if (data?.length === 0) {
        return (
            <>
                <div className="page__container">
                    <Header>
                        <SearchField handleSearchInput={handleSearchInput} handleKeyDown={handleEnterKeyDown} />
                        <NavLinks />
                    </Header>
                    <h1>
                        Artwork not found!
                        <br />
                        Try a different name!
                    </h1>
                </div>
            </>
        );
    }

    return status === "pending" ? (
        <>
            <div className="page__container">
                <Loading />
            </div>
        </>
    ) : status === "error" ? (
        <>
            <div className="page__container">{error.message}</div>
        </>
    ) : (
        <>
            <div className="page__container">
                <SavedCardModal isSavedClicked={isSavedClicked} />
                <Header>
                    <SearchField handleSearchInput={handleSearchInput} handleKeyDown={handleEnterKeyDown} />
                    <NavLinks />
                </Header>
                <Card data={data} handleClick={handleCardClick} />
                <div style={{ marginBottom: "3rem" }} ref={ref}>
                    {isFetching && <Loading />}
                </div>
            </div>
        </>
    );
};
export default Home;
