import { useState } from "react";
import ResultStore from "../Store/ResultStore";

import toast from "react-hot-toast";
import ResultModal from "../Compoments/ResultModel/ResultModal";
import checkArt from '../assets/checkArt.png'


const VerifyResult = () => {

    const [regNumber, setRegNumber] = useState("");
    const [modalShow, setModalShow] = useState(false);
    

    //Zustand State
    const { ResultDataRequest} = ResultStore();
  

    const handleChange = async(e)=>{
        setRegNumber(e.target.value);
    }

  


    const handleSubmit = async()=>{
        const result = await ResultDataRequest(regNumber);
        if(result.data.length === 0){
            toast.error("Result Not Found, Please Enter a Valid Number")
            
        } else {
            setModalShow(true);
        }

    }

    return (
        <section className="container bg-white p-5 my-5 rounded-3">
            <div className="row align-items-center ">
                <div className="col-md-8 text-center">
                    <img width="75%" src={checkArt} alt="image" />
                </div>
                <div className="col-md-4">
                    <div>
                        <h2 className="text-center my-4">আপনার প্রাপ্ত ফলাফলটি যাচাই করুন</h2>
                        <label className="form-label" htmlFor="name">সার্টিফিকেট নাম্বার (In Eng) </label>
                        <input onChange={(e)=>handleChange(e)} className="form-control p-3" type="text" name="name" id="name" placeholder="" />
                        <button disabled={regNumber.length < 6 } onClick={handleSubmit} className='button-one mt-3 '>যাচাই করুন</button>
                    </div>
                </div>
 
        </div>
        <ResultModal show={modalShow} onHide={() => setModalShow(false)} /> 
            
        </section>
    );
};

export default VerifyResult;