import { createBrowserRouter, createRoutesFromElements, Route, Routes, ScrollRestoration } from "react-router-dom";

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/ArtWorks";
import SavedArts from "../pages/SavedArts";
import MainLayout from "../layout/MainLayout";
import ArtWorks from "../pages/ArtWorks";
import CardPage from "../pages/CardPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="art-works" element={<ArtWorks />} />
            <Route path="card" element={<CardPage />} />
            <Route path="saved-arts" element={<SavedArts />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>,
    ),
);
