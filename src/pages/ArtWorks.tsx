import "./styles.css";

import { useContext } from "react";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

import { DataContext } from "../layout/MainLayout";

const ArtWorks = () => {
    const dataContext = useContext(DataContext);

    if (dataContext?.data?.length === 0) {
        return (
            <>
                <div className="page__container page--fade-in ">
                    <h1>Artwork not found! Try a different name!</h1>
                </div>
            </>
        );
    }

    if (dataContext?.status === "pending") {
        return (
            <>
                <div className="page__container page--fade-in ">
                    <Loading />
                </div>
            </>
        );
    }

    if (dataContext?.status === "error") {
        return (
            <>
                <div className="page__container page--fade-in ">{dataContext.error}</div>
            </>
        );
    }

    return (
        <>
            <div className="page__container page--fade-in ">
                <Cards data={dataContext?.data} />
                <div style={{ marginBottom: "3rem", marginTop: "1rem" }} ref={dataContext?.ref}>
                    {dataContext?.isFetching && <Loading />}
                </div>
            </div>
        </>
    );
};

export default ArtWorks;
