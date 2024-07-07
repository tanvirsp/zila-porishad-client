import './Courses.css'
import courseOne from '../../assets/courses/course-1.jpg'
import courseTwo from '../../assets/courses/course-2.jpg'
import courseThree from '../../assets/courses/course-3.jpg'
import courseFour from '../../assets/courses/course-4.jpg'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
    const navigate = useNavigate()


    return (
        <section className="cource-section">
            <h3 style={{marginBottom: "60px"}} className="section-title ">কোর্স সমূহ</h3>
            <div className="row">
                <div className="col-md-3">
                    <div onClick={()=>navigate(`/registration`)} className='course-item'>
                        <img src={courseOne} alt="Spoken" />
                        <h4 className='mt-3'>ইংলিশ স্পোকেন প্রশিক্ষণ কোর্স </h4>
                        <small className='course-tag'>৭০ দিন ব্যাপী</small>
                    </div>
                </div>
                <div className="col-md-3">
                    <div onClick={()=>navigate(`/registration`)} className='course-item'>
                        <img src={courseTwo} alt="Spoken" />
                        <h4 className='mt-3'>কম্পিউটার প্রশিক্ষণ কোর্স </h4>
                        <small className='course-tag'>৬০ দিন ব্যাপী</small>
                    </div>
                </div>
                <div className="col-md-3">
                    <div onClick={()=>navigate(`/registration`)} className='course-item'>
                        <img src={courseThree} alt="Spoken" />
                        <h4 className='mt-3'>বিউটিফিকেশন প্রশিক্ষণ কোর্স </h4>
                        <small className='course-tag'>৯০ দিন ব্যাপী</small>
                    </div>
                </div>
                <div className="col-md-3">
                    <div onClick={()=>navigate(`/registration`)} className='course-item'>
                        <img src={courseFour} alt="Spoken" />
                        <h4 className='mt-3'>দর্জি প্রশিক্ষণ <br /> কোর্স </h4>
                        <small className='course-tag'>৬০ দিন ব্যাপী</small>
                    </div>
                </div>
            
            </div>
            
        </section>
    );
};

export default Courses;