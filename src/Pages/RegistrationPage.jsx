import { useNavigate } from "react-router-dom";




const RegistrationPage = () => {
    const navigate = useNavigate();

    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card my-5">
                    <div className="card-body text-center p-5">
                        <h4 className="card-title">কোর্সের জন্য আবেদন</h4>
                       
                        <button onClick={()=>navigate("/course-registration")} className="button-one mt-3">আবেদন করুন</button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card my-5">
                    <div className="card-body text-center p-5">
                        <h4 className="card-title">শিক্ষাবৃত্তির জন্য আবেদন</h4>
                        <button onClick={()=>navigate("/scholarship-registration")} className="button-one mt-3">আবেদন করুন</button>
                    </div>
                    </div>
                </div>
            </div>
           

        </section>
    );
};

export default RegistrationPage;