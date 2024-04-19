import { RouterProvider } from "react-router-dom";
import { router } from "../routes/Router";
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
