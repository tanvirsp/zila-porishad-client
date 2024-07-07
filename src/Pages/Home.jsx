import AboutUs from "../Compoments/AboutUs/AboutUs";
import Courses from "../Compoments/Courses/Courses";
import Gallery from "../Compoments/Gallery/Gallery";
import NoticeBoard from "../Compoments/NoticeBoard/NoticeBoard";
import PersonOne from "../Compoments/PersonOne/PersonOne";
import Slider from "../Compoments/Slider/Slider";


const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <Slider />
                    <AboutUs />
                </div>
                <div className="col-md-3">
                    <NoticeBoard />
                    <PersonOne />

                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <Courses />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Gallery />
                </div>
            </div>
           
              
            
        </div>
    );
};

export default Home;