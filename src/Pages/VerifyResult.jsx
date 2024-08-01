import { useState } from "react";
import ResultStore from "../Store/ResultStore";

import toast from "react-hot-toast";
import ResultModal from "../Compoments/ResultModel/ResultModal";


const VerifyResult = () => {

    const [data, setData] = useState("");
    const [tread, setTread] = useState("");

    const [modalShow, setModalShow] = useState(false);
    

    //Zustand State
    const { ResultDataRequest} = ResultStore();
  

    const handleChange = async(e)=>{
        setData(e.target.value);
    }

    const handleTread = async(e)=>{
        setTread(e.target.value);
    }


    
  

    const handleSubmit = async()=>{
        const result = await ResultDataRequest(tread+data);
        if(result.data === null){
            toast.error("Result Not Found Please Enter a Valid Number")
            
        } else {
            setModalShow(true);
        }

    }

    return (
        <section className="verify-section">
            <div className="contact-form">
            <label className="form-label" htmlFor="name">সার্টিফিকেট নাম্বার (In Eng) </label>
            <input onChange={(e)=>handleChange(e)} className="form-control p-3" type="text" name="name" id="name" placeholder="" />

            <label className='form-label mt-3' htmlFor="sscExamName">কোর্সের বিষয়</label>
            <select defaultValue="" onChange={async(e) =>handleTread(e)}   className='form-select'>
                <option value="" disabled >Select Treade </option>
                <option value="1">কম্পিউটার ট্রেড  </option>
                <option value="2">স্পোকেন ইংলিশ </option>
                <option value="3">বিউটিফিকেশন প্রশিক্ষণ</option>
                <option value="4">সেলাই প্রশিক্ষণ</option>
        
            </select>



          
            <button disabled={data.length == 0 } onClick={handleSubmit} className='button-one mt-3 '>যাচাই করুন</button>
          

            <ResultModal show={modalShow} onHide={() => setModalShow(false)} /> 
          
       
           
            
        </div>
            
        </section>
    );
};

export default VerifyResult;