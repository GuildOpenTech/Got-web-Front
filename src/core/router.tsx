import { Link, createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/connexion",
        element: <App />,
    },
    {
        path: "/inscription",
        element: <App />,
    },
]);

export { router };