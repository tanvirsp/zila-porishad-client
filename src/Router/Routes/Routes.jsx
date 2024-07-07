import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import MainLayout from "../../Layout/MainLayout";
import RegistrationPage from "../../Pages/RegistrationPage";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/registration",
                element: <RegistrationPage />
            },


        ]

    }
])

export default router;