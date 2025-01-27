import './Courses.css'

import { useNavigate } from 'react-router-dom'
import CourseStore from '../../Store/CourseStore'
import { useEffect } from 'react'
import SliderSkeleton from '../../Skeletons/SliderSkeleton'

const Courses = () => {
    const navigate = useNavigate()
    const {AllCourse, AllCourseRequest} = CourseStore();

    useEffect( ()=>{
        (async()=>{
            AllCourse === null &&  await AllCourseRequest()
        })()
    },[])

    console.log(AllCourse);


    return (
        <section className="cource-section">
            <h3 style={{ color: "#FFFFFF" }} >আমাদের প্রশিক্ষণ সমুহ </h3>
            <div className="row mt-4">
                {
                    AllCourse === null ? <SliderSkeleton /> : 
                    AllCourse.length === 0? <div> <h5>No Course Available</h5></div> :
                    AllCourse.map( (item, index) =>{
                        return (
                            <div key={index} className="col-md-4">
                                <div className='course-item ' onClick={()=>navigate(`/registration`)} >
                                    <img className='w-100 rounded-2' crossOrigin ="anonymous"  src={`${import.meta.env.VITE_URL}/${item.thumbnail}`} alt="Thumbnail" />
                                </div>
                            </div>
                        )
                    })
                }
            
            
            </div>
            
        </section>
    );
};

export default Courses;