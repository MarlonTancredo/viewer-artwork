import { RouterProvider } from "react-router-dom";
import { router } from "../routes/router";
import CardModalStore from "../components/CardModalStore";

const App = () => {
    return (
        <>
            <CardModalStore>
                <RouterProvider router={router} />
            </CardModalStore>
        </>
    );
};

export default App;
