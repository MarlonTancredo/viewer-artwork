import Header from "../components/Header";
import SearchField from "../components/SearchField";
import NavLink from "../components/NavLink";

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Data } from "../types/data";
import { useInView } from "react-intersection-observer";

import "../pages/styles.css";

export const DataContext = createContext<Data | null>(null);

const MainLayout = () => {
    const [searchInput, setSearchInput] = useState("");
    const [limit, setLimit] = useState(8);
    const location = useLocation();

    const { inView, ref } = useInView({ threshold: 1 });

    const getArtWorks = async () => {
        const response = await fetch(
            `https://openaccess-api.clevelandart.org/api/artworks/?q=${searchInput}&limit=${limit}&has_image=1`,
        );
        const data = await response.json();
        return data.data;
    };

    const queryClient = useQueryClient();

    const { data, status, error, isFetching, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => getArtWorks(),
    });

    const { mutate } = useMutation({
        mutationFn: () => getArtWorks(),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["items"] });
        },
    });

    useEffect(() => {
        setLimit((limit) => (limit += 4));
        refetch();
    }, [inView]);

    const handleEnterKeyDown = (e: { key: string }) => {
        if (e.key === "Enter") {
            mutate(data);
        }
    };

    const handleSearchInput = (e: { target: { value: string } }) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
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
        </>
    );
};

export default MainLayout;
