import { useNavigate } from "react-router-dom";


const ScholarshipCard = () => {
    const navigate = useNavigate()
    return (
        <section className="bg-success text-center p-4 my-3 rounded-3">
            <h4 className="text-white">শিক্ষা বৃত্তির জন্য আবেদন করুন</h4>
            <button onClick={()=>navigate("/scholarship-registration")} className="btn btn-outline-light mt-2">এখানে ক্লিক করুন</button>
            
        </section>
    );
};

export default ScholarshipCard;