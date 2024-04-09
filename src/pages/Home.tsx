import "./styles.css";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Card from "../components/Card";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import Loading from "../components/Loading";
import NavLink from "../components/NavLink";
import CardModal, { Fields } from "../components/CardModal";

const Home = () => {
    const [limit, setLimit] = useState(8);
    const [searchInput, setSearchInput] = useState("a");
    const [currentCard, setCurrentCard] = useState<Fields>({
        id: "",
        imgUrl: "",
        title: "",
        accession_number: "",
        cardClick: "",
    });
    const [showModal, setShowModal] = useState(false);
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

    const getFromCard = (card: Fields) => {
        setCurrentCard(card);
        setShowModal(true);
    };

    const handleIsModalClosed = (closedButtonClicked: string) => {
        if (closedButtonClicked === "click") {
            setShowModal(false);
        }
    };

    if (data?.length === 0) {
        return (
            <>
                <div className="page__container page--fade-in ">
                    <Header>
                        <SearchField handleSearchInput={handleSearchInput} handleKeyDown={handleEnterKeyDown} />
                        <NavLink />
                    </Header>
                    <h1>Artwork not found! Try a different name!</h1>
                </div>
            </>
        );
    }

    if (status === "pending") {
        return (
            <>
                <div className="page__container page--fade-in ">
                    <Loading />
                </div>
            </>
        );
    }

    if (status === "error") {
        return (
            <>
                <div className="page__container page--fade-in ">{error.message}</div>
            </>
        );
    }

    return (
        <>
            {showModal ? (
                <div className="page__container page--fade-in ">
                    <CardModal
                        data={currentCard}
                        getClosedButtonClicked={(closedButtonClicked: string) =>
                            handleIsModalClosed(closedButtonClicked)
                        }
                    />
                </div>
            ) : (
                <div style={{ display: "none" }}></div>
            )}
            {!showModal ? (
                <div className="page__container page--fade-in ">
                    <Header>
                        <SearchField handleSearchInput={handleSearchInput} handleKeyDown={handleEnterKeyDown} />
                        <NavLink />
                    </Header>
                    <main className="page__main">
                        <Card data={data} getCurrentCard={(data: Fields) => getFromCard(data)} />
                        <div style={{ marginBottom: "3rem" }} ref={ref}>
                            {isFetching && <Loading />}
                        </div>
                    </main>
                </div>
            ) : (
                <div style={{ display: "none" }}></div>
            )}
        </>
    );
};

export default Home;
