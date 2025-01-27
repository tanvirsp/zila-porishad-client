import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScholarshipStore from "../Store/ScholarshipStore";
import scholarshipArt from '../assets/scholarshipArt.png'
import trainingArt from '../assets/trainingArt.png'
import CourseStore from "../Store/CourseStore";
import parse from 'html-react-parser';
import isExpired from "../Utility/isExpired";
import TwoCardSkeleton from "../Skeletons/TwoCardSkeleton";
import isRegistrationActive from "../Utility/isRegistrationActive";




const RegistrationPage = () => {
    const {ActiveScholarshipSession, ActiveScholarshipSessionRequest, Loader} = ScholarshipStore();
    const {ActiveCourseSession, ActiveCourseSessionRequest, CourseLoading} = CourseStore();
    
    const navigate = useNavigate();

    

    useEffect( ()=>{
        (async()=>{
            ActiveScholarshipSession=== null && await ActiveScholarshipSessionRequest();
            ActiveCourseSession=== null && await ActiveCourseSessionRequest();

        })()
    } ,[])

 
    if(CourseLoading  || Loader ) {
        return <TwoCardSkeleton />
    }

 
    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card my-5">
                        <div className="card-body text-center p-5">
                            <img height="200px" src={trainingArt} alt="Scholarship Icon" />
                            <h6 className="mt-2">{ActiveCourseSession?.session } অর্থ বছরের</h6>
                            <h3 className="card-title mb-3">প্রশিক্ষণের জন্য আবেদন</h3>
                            <div className="border p-2 rounded-3">
                            {
                                    parse(`${ActiveCourseSession?.des}`)
                            }
                            </div>
                            {
                                !isRegistrationActive(ActiveCourseSession?.startDate) ? 
                                    <h6 className="text-danger mt-3">(আবেদনের গ্রহণ এখনো শুরু হয়নি)</h6>:  
                                    isExpired(ActiveCourseSession?.lastDate)? 
                                        <button  onClick={()=>navigate("/scholarship-registration")} className="button-one mt-3">আবেদন করুন</button> : 
                                        <h6 className="text-danger mt-3">(আবেদনের গ্রহণের সময় শেষ। পরবর্তী সেশনের জন্য অপেক্ষা করুন)</h6>
                                
                            }
                            
    
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card my-5">
                        <div className="card-body text-center p-5">
                            <img height="200px" src={scholarshipArt} alt="Scholarship Icon" />
                        
                            {/* <h6 className="mt-2">{ActiveScholarshipSession?.session } অর্থ বছরের</h6> */}
                            <h3 className="card-title mb-3">শিক্ষাবৃত্তির জন্য আবেদন</h3>
                            <div className="border p-2 rounded-3 ">
                            {
                                parse(`${ActiveScholarshipSession?.des}`)
                            }
                            </div>

                            {
                                !isRegistrationActive(ActiveScholarshipSession?.startDate) ? 
                                    <h6 className="text-danger mt-3">(আবেদনের গ্রহণ এখনো শুরু হয়নি)</h6>:  
                                    isExpired(ActiveScholarshipSession?.lastDate)? 
                                        <button  onClick={()=>navigate("/scholarship-registration")} className="button-one mt-3">আবেদন করুন</button> : 
                                        <h6 className="text-danger mt-3">(আবেদনের গ্রহণের সময় শেষ। পরবর্তী সেশনের জন্য অপেক্ষা করুন)</h6>
                                
                            }
                        
                        </div>
                    </div>
                </div>
            </div>
           

        </section>
    );
};

export default RegistrationPage;