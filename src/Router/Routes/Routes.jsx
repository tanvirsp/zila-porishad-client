import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import MainLayout from "../../Layout/MainLayout";
import RegistrationPage from "../../Pages/RegistrationPage";
import CoursePage from "../../Pages/CoursePage";
import AboutPage from "../../Pages/AboutPage";
import ContactPage from "../../Pages/ContactPage";
import ResultPage from "../../Pages/ResultPage";
import VerifyResult from "../../Pages/VerifyResult";
import CourseRegistrationPage from "../../Pages/CourseRegistrationPage";
import ScholarshipRegistrationPage from "../../Pages/ScholarshipRegistrationPage";
import FormPreviewPage from "../../Pages/FormPreviewPage";
import ConfirmPage from "../../Pages/ThankYouPage";
import ThankYouPage from "../../Pages/ThankYouPage";


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
                path: "/courses",
                element: <CoursePage />
            },
            {
                path: "/about",
                element: <AboutPage />
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
                path: "/form-preview-page",
                element: <FormPreviewPage />
            },
            {
                path: "/thankyou",
                element: <ThankYouPage />
            },

        ]

    }
])

export default router;