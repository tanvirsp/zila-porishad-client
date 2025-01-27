import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import MainLayout from "../../Layout/MainLayout";
import RegistrationPage from "../../Pages/RegistrationPage";
import ContactPage from "../../Pages/ContactPage";
import ResultPage from "../../Pages/ResultPage";
import VerifyResult from "../../Pages/VerifyResult";
import CourseRegistrationPage from "../../Pages/CourseRegistrationPage";
import ScholarshipRegistrationPage from "../../Pages/ScholarshipRegistrationPage";
import ThankYouPage from "../../Pages/ThankYouPage";
import NoticePage from "../../Pages/NoticePage";
import NoticeDetailsPage from "../../Pages/NoticeDetailsPage";



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
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/result",
                element: <ResultPage />
            },
            {
                path: "/verify-result",
                element: <VerifyResult />
            },
            {
                path: "/course-registration",
                element: <CourseRegistrationPage />
                
            },
            {
                path: "/scholarship-registration",
                element: <ScholarshipRegistrationPage />
            },
            {
                path: "/thankyou/:id/:value",
                element: <ThankYouPage />
            },
            {
                path: "/notice",
                element: <NoticePage />
            },
            {
                path: "/notice-details/:id",
                element: <NoticeDetailsPage />
            },

        ]

    }
])

export default router;