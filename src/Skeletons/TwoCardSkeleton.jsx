import Skeleton from "react-loading-skeleton";
import ImagePlaceholder from "../assets/image.json";
import Lottie from "lottie-react";


const TwoCardSkeleton = () => {
    return (
        <section className="container">
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card my-5">
                <div className="card-body text-center p-5">
                    
                    <Lottie className="w-25 m-auto" animationData={ImagePlaceholder} loop={true} />
                    <Skeleton count={3} />
                        
                    
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card my-5">
                <div className="card-body text-center p-5">
                    <Lottie className="w-25 m-auto" animationData={ImagePlaceholder} loop={true} />
                    <Skeleton count={3} />    
                </div>
                </div>
            </div>
        </div>
       

    </section>
    );
};

export default TwoCardSkeleton;