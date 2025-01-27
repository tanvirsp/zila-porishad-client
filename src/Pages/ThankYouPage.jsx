import Lottie from "lottie-react";
import success  from '../assets/success.json'
import { IoCloudDownloadOutline } from "react-icons/io5";

import { useParams } from "react-router-dom";


const ThankYouPage = () => {
    const {id, value} = useParams();
     //Note: value "0" for coure and "1" for scholarship
    

 
    return (
         <section>
            <div className="confirmation-message">
                <Lottie className="w-25 mx-auto" animationData= {success} loop={false} />
                <h2>ধন্যবাদ! </h2>
                <p className="my-2">আপনার আবেদনটি গ্রহণ করা হয়েছে। পরবর্তীতে আপনার সাথে যোগাযোগ করা হবে। <br />
                <strong> ডাউনলোড বাটনে ক্লিক করে আপনার আবেদন কপিটি সংগ্রহ করুন। </strong> </p>

                {
                value == 0 ?   <a target="_blank" rel="noreferrer" href={`${import.meta.env.VITE_URL}/api/v1/registration-copy/${id}`} 
                                    className="btn btn-success ms-2 ">  <IoCloudDownloadOutline className="me-2 mt-2" /> Download Your Registration Copy
                                </a> :
                                <a target="_blank" rel="noreferrer" href={`${import.meta.env.VITE_URL}/api/v1/scholarship-copy/${id}`} 
                                    className="btn btn-success ms-2 ">  <IoCloudDownloadOutline className="me-2 mt-2" /> Download Your Application Copy
                                </a>

                }


                



                

            </div>
         </section>
    );
};

export default ThankYouPage;