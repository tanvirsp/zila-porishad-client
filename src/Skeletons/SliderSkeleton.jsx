import Skeleton from "react-loading-skeleton";
import ImagePlaceholder from "../assets/image.json";
import Lottie from "lottie-react";


const SliderSkeleton = () => {
    return (
        <div className="bg-white p-4">    
            <Lottie className="w-25 m-auto" animationData={ImagePlaceholder} loop={true} />
            <Skeleton count={2} />
            
        </div>
    );
};

export default SliderSkeleton;