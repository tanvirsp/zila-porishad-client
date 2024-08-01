import toast from "react-hot-toast";
import StudentStore from "../Store/StudentStore";
import { IoArrowBack } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FullScreenLoader from "../Layout/FullScreenLoader";


const FormPreviewPage = () => {

    const {StudenRegister, Loader} = StudentStore();
    const navigate = useNavigate()

    if(Loader === true) {
        return <FullScreenLoader />
    }


    const handleSubmit = async() =>{
        
        const result = await StudenRegister(previewDataObj);
        if(result.status ==="success"){
            navigate('/thankyou');
            // localStorage.clear("formData");
        } else {
            toast.error("something went wrong");
            
        }

    };


    const previewData = localStorage.getItem('formData');

    if(previewData === null) {
        return <p>Wait...</p>
    }



    const previewDataObj = JSON.parse(previewData);
    const {name, nameInEnglish, birthDate, birthCertificateNumber, nidNumber, fatherName, motherName,
        parmanentVillage, parmanentArea, parmanentPostOffice, parmanentUpazilla, parmanentDistrict,
        presentArea, presenPostOffice, presentVillage,presenUpazilla, presenDistrict,
        examOne, examOneBoard,examOneGroup, examOneYear, examOneRoll, examOneReg, examOneResult,
        examTwo, examTwoBoard, examTwoGroup, examTwoYear, examTwoRoll, examTwoReg, examTwoResult,
        fatherNID, fatherYearlyIncome, cota, disabled,upazati, mobile, email, instuteNameAndAddress
    } = previewDataObj;


 


    return (
        <div className="container my-4">
            <section className="border p-4 bg-light rounded-3">
                <div className="d-flex justify-content-between">
                    <h5>Course: Spoken English</h5>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <h5  className="group-title">সাধারণ তথ্য</h5>
                        <h6>নাম (বাংলায়):  {name} </h6>
                        <p> Name in English: {nameInEnglish} </p>
                        <p> জন্ম তারিখ: {birthDate} </p>
                        <p> জন্ম নিবন্ধন নাম্বার: {birthCertificateNumber}</p>
                        <p> NID Number: {nidNumber}</p>
                        <p>পিতার নাম:  {fatherName} </p>
                        <p>মাতার নাম নাম: {motherName} </p>
                    </div>
                    <div style={{width: "200px"}}>
                        <img width="100%" crossOrigin ="anonymous"  src={`${import.meta.env.VITE_URL}/${previewDataObj?.attachment?.profileImg}`} alt="Avatar" />
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-5">
                    <div className='w-50'>
                        <h5  className="group-title">স্থায়ী ঠিকানা: </h5>
                        <p>গ্রাম/বাসা নম্বর: <b>   {parmanentVillage} </b>  </p>
                        <p>এলাকা: <b>  {parmanentArea }</b>  </p>
                        <p>ডাকঘর:  <b> { parmanentPostOffice}</b> </p>
                        <p>উপজেলা: <b>  {parmanentUpazilla}</b>  </p>
                        <p>জেলা: <b>  {parmanentDistrict} </b> </p>
                    </div>
                    <div className='w-50'>
                        <h5  className="group-title">বর্তমান ঠিকানা:</h5>
                        <p>গ্রাম/বাসা নম্বর: <b>  {presentVillage} </b>  </p>
                        <p>এলাকা: <b>  {presentArea} </b>  </p>
                        <p>ডাকঘর:  <b>  {presenPostOffice} </b> </p>
                        <p>উপজেলা: <b> {presenUpazilla} </b> </p>
                        <p>জেলা: <b>  {presenDistrict}  </b> </p>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-5">
                    <div className='w-50'>
                        <h5  className="group-title" >এস এস সি / সমমান পরীক্ষা পাসের বিবরণ:</h5>
                        <p>পরীক্ষার নাম: <b> {examOne} </b>  </p>
                        <p>বোর্ড:  <b>  {examOneBoard} </b> </p>
                        <p>গ্রুপ/বিভাগ: <b>  {examOneGroup} </b> </p>
                        <p>পাশের সন: <b> {examOneYear} </b> </p>
                        <p>রোল নাম্বার: <b> {examOneRoll} </b> </p>
                        <p>রেজিস্ট্রেশন নাম্বার: <b>  {examOneReg} </b> </p>
                        <p>ফলাফল: <b>  {examOneResult} </b> </p>
                    </div>
                    <div className='w-50'>
                        <h5  className="group-title" >এইচ এস সি / সমমান পরীক্ষা পাসের বিবরণ:</h5>
                        <p>পরীক্ষার নাম: <b> {examTwo} </b>  </p>
                        <p>বোর্ড: <b>  {examTwoBoard} </b>  </p>
                        <p>গ্রুপ/বিভাগ: <b>  {examTwoGroup} </b> </p>
                        <p>পাশের সন: <b> {examTwoYear}</b> </p>
                        <p>রোল নাম্বার:  <b> {examTwoRoll} </b> </p>
                        <p>রেজিস্ট্রেশন নাম্বার: <b>{examTwoReg}</b> </p>
                        <p>ফলাফল: <b>{examTwoResult} </b> </p>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-5">
                    <div className='w-50'>
                        <h5  className="group-title" >অভিভাবকের তথ্য:</h5>
                        <p>পিতা/ অভিভাবকের NID নম্বর: <b>{fatherNID} </b>  </p>
                        <p>পিতা/ অভিভাবকের বাৎসরি আয়: <b> {fatherYearlyIncome} </b></p>
                        <p>আবেদনকারী মুক্তিযোদ্ধার সন্তান/ নাতি নাতনি কি?  <b> {cota ==="1" ? "হ্যাঁ": "না"} </b></p>
                        <p>আবেদনকারী প্রতিবন্ধী কি? <b>  {disabled ==="1" ? "হ্যাঁ": "না"} </b>  </p>
                        <p>আবেদনকারী উপজাতি কি ? <b>  {upazati ==="1" ? "হ্যাঁ": "না"} </b>  </p>
                        
                    </div>
                    <div className='w-50'>
                        <h5  className="group-title" >যোগাযোগের তথ্য:</h5>
                        <p>মোবাইল নম্বর: <b> {mobile} </b>  </p>
                        <p>ইমেইল (Optional): <b>  {email}  </b></p>
                        <p>অধ্যায়নরত প্রতিষ্ঠানের নাম ও ঠিকানা: <b> {instuteNameAndAddress} </b></p>
            
                    </div>
                </div>
                <hr />
                <div className='mt-4'>
                    <h5  className="group-title" >সংযুক্ত:</h5>
                    <p>শিক্ষা প্রতিষ্ঠানে অধ্যায়নের প্রমাণপত্র: <b> <a target="_blank" rel="noreferrer" href={`${import.meta.env.VITE_URL}/${previewDataObj?.attachment?.studyingImg }`}>Click to see</a>  </b></p>
                    <p>নাগরিকত্ব সনদপত্রের কপি: <b> <a  target="_blank" rel="noreferrer" href={`${import.meta.env.VITE_URL}/${previewDataObj?.attachment?.citizenshipCertificateImg }`}>Click to see</a> </b> </p>
                    <p>এনআইডি/NID কপি: <b> <a  target="_blank" rel="noreferrer" href={`${import.meta.env.VITE_URL}/${previewDataObj?.attachment?.nidImg }`}>Click to see</a> </b>  </p>
                    <p>জন্মনিবন্ধন কপি:  <b> <a   target="_blank" rel="noreferrer" href={`${import.meta.env.VITE_URL}/${previewDataObj?.attachment?.birthCertificateImg }`}>Click to see</a>  </b>  </p>
                </div>
            </section>
        
        <div className="d-flex justify-content-between mt-3 bg-dark rounded-3 p-3" >
            <button onClick={()=>navigate("/course-registration")} className='btn btn-primary '> <IoArrowBack />  Go Back </button>
            <button onClick={handleSubmit} className='btn  btn-success '>  Submit Now <FaRegPaperPlane /></button>
         </div>
        
       
    </div>
    );
};

export default FormPreviewPage;