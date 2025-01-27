import AboutUs from "../Compoments/AboutUs/AboutUs";
import Courses from "../Compoments/Courses/Courses";
import Gallery from "../Compoments/Gallery/Gallery";
import NoticeBoard from "../Compoments/Notice/NoticeBoard";

import PersonOne from "../Compoments/PersonOne/PersonOne";
import Slider from "../Compoments/Slider/Slider";



const Home = () => {

 
    return (
        <div className="container  mt-4">
            <div className="row">
                <div className="col-md-9">
                    <Slider />
                    <AboutUs />
                    <Courses />
                    <Gallery />
                </div>
                <div className="col-md-3">
                    <NoticeBoard />
                    <PersonOne />
                    

                </div>
            </div>
            
           
              
            
        </div>
    );
};

export default Home;