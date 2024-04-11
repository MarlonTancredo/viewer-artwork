import Header from "../components/Header";
import SearchField from "../components/SearchField";
import NavLink from "../components/NavLink";

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Art } from "../types/data";
import { useInView } from "react-intersection-observer";

import "../pages/styles.css";

type Data = {
    data: Art[];
    status: "error" | "success" | "pending";
    error: string | undefined;
    isFetching: boolean;
    ref: (node?: Element | null | undefined) => void;
    inView: boolean;
};

export const DataContext = createContext<Data | null>(null);

const MainLayout = () => {
    const [searchInput, setSearchInput] = useState("");
    const [limit, setLimit] = useState(8);
    const location = useLocation();

    const { inView, ref } = useInView({ threshold: 1 });

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

    return (
        <>
            <div className="page__container page--fade-in ">
                {location.pathname === "/saved-arts" ? (
                    <Header>
                        <NavLink />
                    </Header>
                ) : location.pathname === "/card" ? (
                    <div></div>
                ) : (
                    <Header>
                        <SearchField handleSearchInput={handleSearchInput} handleKeyDown={handleEnterKeyDown} />
                        <NavLink />
                    </Header>
                )}
                <ScrollRestoration
                    getKey={(location) => {
                        const paths = ["/art-works", "/saved-arts"];
                        return paths.includes(location.pathname)
                            ? // art-works and saved-works restore by pathname
                              location.pathname
                            : // everything else by location like the browser
                              location.key;
                    }}
                />
                <DataContext.Provider
                    value={{
                        data: data,
                        status: status,
                        error: error?.message,
                        isFetching: isFetching,
                        inView: inView,
                        ref: ref,
                    }}
                >
                    <Outlet />
                </DataContext.Provider>
            </div>
        </>
    );
};

export default MainLayout;
