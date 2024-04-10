import { createBrowserRouter, createRoutesFromElements, Route, Routes, ScrollRestoration } from "react-router-dom";

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/ArtWorks";
import SavedArts from "../pages/SavedArts";
import MainLayout from "../layout/MainLayout";
import ArtWorks from "../pages/ArtWorks";
import CardModal from "../components/CardModal";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="art-works" element={<ArtWorks />} />
            <Route path="card-modal" element={<CardModal />} />
            <Route path="saved-arts" element={<SavedArts />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>,
    ),
);
