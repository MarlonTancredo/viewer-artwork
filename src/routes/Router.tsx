import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import SavedArts from "../pages/SavedArts";

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/saved-arts" element={<SavedArts />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Router;
