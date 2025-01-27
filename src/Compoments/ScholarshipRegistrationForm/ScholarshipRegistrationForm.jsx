import { useNavigate } from "react-router-dom";
import StudentStore from "../../Store/StudentStore";
import ScholarshipStore from "../../Store/ScholarshipStore";
import { useForm } from "react-hook-form";
import logo from '../../assets/logo.png';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle  } from "react-icons/io";
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import {  IsFileEmptyScholarship } from "../../Utility/fileChecker";
import FullScreenLoader from "../../Layout/FullScreenLoader";



const ScholarshipRegistrationForm = () => {
    
    const {ImageUploadRequest, ImageLoader} = StudentStore();
    const {IsAlreadyApplied, ScholarshipRegister, Loader, ActiveScholarshipSession, ActiveScholarshipSessionRequest} = ScholarshipStore()
    const { register,   formState: { errors },   handleSubmit } = useForm();

    const navigate = useNavigate();
    
    useEffect( ()=>{
        ( async()=>{
            ActiveScholarshipSession === null && await ActiveScholarshipSessionRequest();

        })()
    } ,[])



  
    const [imageData, setImageData] = useState({
        profileImg: "",
        signature: "",
    });


    

    const onSubmit = async(data) =>{
        const allData = {
            ...data,
            attachment: imageData
        }

        const isEveryImagePropertyFilled = IsFileEmptyScholarship(imageData);
        if (isEveryImagePropertyFilled){

            //sending data to backend
            const result = await ScholarshipRegister(allData);
            if(result.status ==="success"){
                //0 for coure and 1 for scholarship
                navigate(`/thankyou/${result.data._id}/${1}`);
                localStorage.clear("formData");
            } else {
                toast.error("something went wrong");  
            }

              
        } else {
            toast.error("অনুগ্রহ পূর্বক সবগুলো ফাইল কপি সংযুক্ত করুন")
        }
    };


    const removeImage = (name)=>{
        setImageData({
            ...imageData,
            [name]: ""
        })
    }


    const handleImage = async(e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", e.target.files[0]);

        const result = await ImageUploadRequest(formData);
        if(result.status){
            setImageData({
                ...imageData,
                [e.target.name]: result.data.filename
    
            })
        }
         
    };




    //Checking Already Applied by Birth Certificate Number
    const [isExit, setIsExit] = useState(true);
    const checkBirthCertificate =async(e)=>{ 

            if(e.target.value.length > 0){
                const result = await IsAlreadyApplied(e.target.value);
                if(result.status ==="success"){
                    setIsExit(false);
                }
                else {
                    setIsExit(true);
                    toast.error("দুঃখিত!! আপনার জন্মনিবন্ধন নাম্বারটি পূর্বে ব্যবহার করা হয়েছে")
                }
               
            } else {
                toast.error("দুঃখিত!! এই ঘরটি অবশ্যই পূরণ করতে হবে")
            }       
    };
       

   
    if(Loader === true) {
        return <FullScreenLoader />
    }



    return (
        <div className="container py-5">
        <section className='text-center pb-3 mb-4'>
                <img className='small-logo' src={logo} alt="" />
                <h2 className='mt-3'>শিক্ষাবৃত্তির জন্য আবেদন</h2>
                <h6>(শুধুমাত্র জামালপুর জেলার স্থায়ী বাসিন্দদের জন্য)</h6>
            </section>


        <form onSubmit={handleSubmit(onSubmit)}>
{/* তথ্য যাচাই */}
            <section className="form-group">
                <div className="form-group-title">
                    <h5 >তথ্য যাচাই:</h5>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <label className='form-label mt-2' htmlFor="nid">জন্ম নিবন্ধন নাম্বার <span className='require-mark'>*</span></label>
                        <div className='d-flex align-items-center'>
                            <input  {...register("birthCertificateNumber", { required: true})} 
                            onBlur={checkBirthCertificate}  type="text" id="nid" className={isExit? "form-control border border-danger" : " form-control border border-success"} required />
                            {isExit ? <IoIosCloseCircle className='text-danger fs-3' />  : <FaCheckCircle className='text-success fs-4' /> }
                            
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <label className='form-label mt-2 ' htmlFor="nid">এনআইডি/NID নাম্বার (যদি থাকে)</label>
                        <input {...register("nidNumber")} type="text" id="nid"className='form-control '  />
                        
                       
                    </div>
                   
                </div>
            </section>



{/* সাধারণ তথ্য */}
                <section className="form-group">
                    <div className="form-group-title">
                        <h5>সাধারণ তথ্য:</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className='form-label mt-2' htmlFor="name">আবেদনকারীর নাম (বাংলায়) <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="name" {...register('name', { required: true, maxLength: 30 })} />

                            <label className='form-label mt-4' htmlFor="fatherName">পিতার নাম (বাংলায়) <span className='require-mark'>*</span></label>
                            <input className='form-control' id="fatherName" {...register('fatherName', { required: true, maxLength: 30 })} />

                            <label className='form-label mt-4' htmlFor="birthDate">জন্ম তারিখ <span className='require-mark'>*</span></label>
                            <input type="date" className='form-control' id="birthDate" {...register('birthDate', { required: true})} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-label mt-2 ' htmlFor="nameInEnglish"> আবেদনকারীর নাম (ইংরেজীতে) <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="nameInEnglish" {...register('nameInEnglish', { required: true })} />

                            <label className='form-label mt-4' htmlFor="motherName">মাতার নাম (বাংলায়) <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="motherName" {...register('motherName', { required: true })} />

                            <label className='form-label mt-4' htmlFor="mobile">মোবাইল নাম্বার: <span className='require-mark'>*</span></label>
                            <input className='form-control' id="mobile" {...register('mobile', { required: true})} /> 

                        </div>
                       
                    </div>
                </section>

{/* স্থায়ী ঠিকানা ও বর্তমান ঠিকানা */}
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-group-title">
                                <h5>স্থায়ী ঠিকানা:</h5>
                            </div>
                            <div>
                                <label className='form-label mt-3' htmlFor="parmanentVillage">গ্রাম/বাসা নম্বর <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="parmanentVillage" {...register('parmanentVillage', { required: true})} />
                            
                                <label className='form-label mt-4' htmlFor="parmanentArea">এলাকা <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="parmanentArea" {...register('parmanentArea', { required: true })} />

                                <label className='form-label mt-4' htmlFor="parmanentPostOffice">ডাকঘর <span className='require-mark'>*</span> </label>
                                <input   className='form-control' id="parmanentPostOffice" {...register('parmanentPostOffice', { required: true })} />

                                <label className='form-label mt-4' htmlFor="parmanentUpazilla">উপজেলা <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="parmanentUpazilla" {...register('parmanentUpazilla', { required: true })} />

                                <label className='form-label mt-4' htmlFor="parmanentDistrict">জেলা <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="parmanentDistrict" {...register('parmanentDistrict', { required: true })} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-group-title">
                                <h5>বর্তমান ঠিকানা:</h5>
                            </div>
                            <div>
                                <label className='form-label mt-3' htmlFor="presentVillage">গ্রাম/বাসা নাম্বার <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="presentVillage" {...register('presentVillage', { required: true})} />
                            
                                <label className='form-label mt-4' htmlFor="presentArea">এলাকা <span className='require-mark'>*</span></label>
                                <input   className='form-control' id="presentArea" {...register('presentArea', { required: true })} />

                                <label className='form-label mt-4' htmlFor="presentPostOffice">ডাকঘর <span className='require-mark'>*</span> </label>
                                <input  className='form-control' id="presentPostOffice" {...register('presentPostOffice', { required: true })} />

                                <label className='form-label mt-4' htmlFor="presentUpazilla">উপজেলা <span className='require-mark'>*</span></label>
                                <input   className='form-control' id="presentUpazilla" {...register('presentUpazilla', { required: true })} />

                                <label className='form-label mt-4' htmlFor="presentDistrict">জেলা <span className='require-mark'>*</span></label>
                                <input className='form-control' id="presentDistrict" {...register('presentDistrict', { required: true })} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


{/* এস এস সি ও এইচএসসি বিবরণ */}
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-group-title">
                                <h5>এস এস সি / সমমান পরীক্ষা পাসের বিবরণ:</h5>
                            </div>
                            <div>
                                <label className='form-label mt-3' htmlFor="sscExamName">পরীক্ষার নাম <span className='require-mark'>*</span></label>
                                <select  defaultValue=""  className='form-select' {...register("examOne", { required: true })}>
                                    <option value="" disabled >Select </option>
                                    <option value="S.S.C">S.S.C</option>
                                    <option value="Dakhil">Dakhil</option>
                                    <option value="SSC-Vocational">S.S.C Vocational</option>
                                    <option value="S.S.C Equivalent">S.S.C Equivalent</option>
                                    <option value="Dakhil Vocational">Dakhil Vocational</option>
                                </select>

                                <label className='form-label mt-4' htmlFor="examOneInstitute">প্রতিষ্ঠানের নাম <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="examOneInstitute" {...register('examOneInstitute', { required: true })} />

                                <label className='form-label mt-4'>বোর্ড <span className='require-mark'>*</span> </label>
                                <select  defaultValue="" className='form-select' {...register("examOneBoard", { required: true })}>
                                    <option value="" disabled >Select Board </option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Cumilla">Cumilla</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Dinajpur">Dinajpur</option>
                                    <option value="Jashore">Jashore</option>
                                    <option value="Madrasah">Madrasah</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Open University">Open University</option>
                                    <option value="Bangladesh Technical Education Board (BTEB)">Bangladesh Technical Education Board (BTEB)</option>
                                    <option value="Other">Other</option>
                                </select>

                                <label className='form-label mt-4' htmlFor="sscGroup">গ্রুপ/বিভাগ <span className='require-mark'>*</span></label>
                                <select  defaultValue="" className='form-select' {...register("examOneGroup", { required: true })}>
                                    <option value="" disabled >Select Group </option>
                                    <option value="Business Studies">Business Studies</option>
                                    <option value="General">General</option>
                                    <option value="Humanities">Humanities</option>
                                    <option value="Science">Science</option>
                                    <option value="Other">Other</option>
                                </select>

                                <label className='form-label mt-4' htmlFor="examOneYear">পাশের সন <span className='require-mark'>*</span></label>
                                <input className='form-control' id="examOneYear" {...register('examOneYear', { required: true })} />

                                <label className='form-label mt-4' htmlFor="examOneRoll">রোল নাম্বার <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="examOneRoll" {...register('examOneRoll', { required: true })} />

                                <label className='form-label mt-4' htmlFor="examOneReg">রেজিস্ট্রেশন নাম্বার <span className='require-mark'>*</span></label>
                                <input   className='form-control' id="examOneReg" {...register('examOneReg', { required: true })} />

                                <label className='form-label mt-4' htmlFor="examOneResult">ফলাফল <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="examOneResult" {...register('examOneResult', { required: true })} />
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-group-title">
                                <h5>এইচ এস সি / সমমান পরীক্ষা পাসের বিবরণ:</h5>
                            </div>
                            <div>
                            <label className='form-label mt-3' htmlFor="examTwo">পরীক্ষার নাম <span className='require-mark'>*</span></label>
                                <select  defaultValue="" className='form-select' {...register("examTwo", { required: true })}>
                                    <option value="" disabled >Select </option>
                                    <option value="H.S.C">H.S.C</option>
                                    <option value="Alim">Alim</option>
                                    <option value="HSC-Vocational">H.S.C Vocational</option>
                                    <option value="H.S.C Equivalent">H.S.C Equivalent</option>
                                    <option value="Alim Vocational">Alim Vocational</option>
                                </select>

                                <label className='form-label mt-4' htmlFor="examTwoInstitute">প্রতিষ্ঠানের নাম <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="examTwoInstitute" {...register('examTwoInstitute', { required: true })} />


                                <label className='form-label mt-4'>বোর্ড <span className='require-mark'>*</span> </label>
                                <select  defaultValue="" className='form-select' {...register("examTwoBoard", { required: true })}>
                                    <option value="" disabled >Select Board </option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Cumilla">Cumilla</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Dinajpur">Dinajpur</option>
                                    <option value="Jashore">Jashore</option>
                                    <option value="Madrasah">Madrasah</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Open University">Open University</option>
                                    <option value="Bangladesh Technical Education Board (BTEB)">Bangladesh Technical Education Board (BTEB)</option>
                                    <option value="Other">Other</option>
                                </select>

                                <label className='form-label mt-4' >গ্রুপ/বিভাগ <span className='require-mark'>*</span></label>
                                <select   defaultValue="" className='form-select' {...register("examTwoGroup", { required: true })}>
                                    <option value="" disabled >Select Group </option>
                                    <option value="Business Studies">Business Studies</option>
                                    <option value="General">General</option>
                                    <option value="Humanities">Humanities</option>
                                    <option value="Science">Science</option>
                                    <option value="Other">Other</option>
                                </select>

                                <label className='form-label mt-4' htmlFor="examTwoYear">পাশের সন <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="examTwoYear" {...register('examTwoYear', { required: true })} />

                                <label className='form-label mt-4' htmlFor="examTwoRoll">রোল নাম্বার <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="examTwoRoll" {...register('examTwoRoll', { required: true })} />

                                <label className='form-label mt-4' htmlFor="examTwoReg">রেজিস্ট্রেশন নাম্বার <span className='require-mark'>*</span></label>
                                <input   className='form-control' id="examTwoReg" {...register('examTwoReg', { required: true })} />

                                <label className='form-label mt-4' htmlFor="examTwoResult">ফলাফল <span className='require-mark'>*</span></label>
                                <input  className='form-control' id="examTwoResult" {...register('examTwoResult', { required: true })} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




{/* অভিভাবক ও যোগাযোগের তথ্য */}


                <section className="form-group">
                    <div className="form-group-title">
                        <h5>অভিভাবকের তথ্য:</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className='form-label mt-3' htmlFor="fatherNID">পিতার NID নাম্বার <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="fatherNID" {...register('fatherNID', { required: true})} />

                            <label className='form-label mt-4' htmlFor="fatherOccupation">পিতার পেশা <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="fatherOccupation" {...register('fatherOccupation', { required: true })} />
                            
                        
                            <label className='form-label mt-4' htmlFor="fatherYearlyIncome">পিতার বাৎসরিক আয় <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="fatherYearlyIncome" {...register('fatherYearlyIncome', { required: true })} />

                            <label className='form-label mt-4' >আবেদনকারী মুক্তিযোদ্ধার সন্তান/ নাতি নাতনি কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                            <input   {...register('cota', { required: true })} type="radio" id="cota-yes" name="cota" value="1"     />
                            <label htmlFor="cota-yes" className='form-label ms-2 '>হ্যাঁ</label>

                            <input  {...register('cota', { required: true })} className=' ms-3' type="radio" id="cota-no" name="cota" value="0"      />
                            <label htmlFor="cota-no" className='form-label ms-2'>না</label> <br />
                            {errors.cota && <span className='text-danger'>এই ঘরটি অবশ্যই পূরণ করতে হবে</span>} <br />

                            <label className='form-label ' htmlFor="instuteNameAndAddress">অধ্যায়নরত প্রতিষ্ঠানের নাম ও ঠিকানা <span className='require-mark'>*</span> </label>
                            <input className='form-control' id="instuteNameAndAddress" {...register('instuteNameAndAddress', { required: true})} />
                        

                        </div>
                        <div className="col-md-6">
                            <label className='form-label mt-3' htmlFor="motherNID">মাতার NID নাম্বার <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="motherNID" {...register('motherNID', { required: true})} />

                            <label className='form-label mt-4' htmlFor="motherOccupation">মাতার পেশা <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="motherOccupation" {...register('motherOccupation', { required: true })} />

                            <label className='form-label mt-4' htmlFor="motherYearlyIncome">মাতার বাৎসরিক আয় <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="motherYearlyIncome" {...register('motherYearlyIncome', { required: true })} />
                            

                            <label className='form-label mt-4' >আবেদনকারী প্রতিবন্ধী কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                            <input   {...register('disabled', { required: true })}  type="radio" id="disabled-yes" name="disabled" value="1"   />
                            <label htmlFor="disabled-yes" className='form-label ms-2 '>হ্যাঁ</label>
                            <input  {...register('disabled', { required: true })}  className=' ms-3' type="radio" id="disabled-no" name="disabled" value="0"  />
                            <label htmlFor="disabled-no" className='form-label ms-2 '>না</label> <br />
                            {errors.disabled && <span className='text-danger'>এই ঘারটি অবশ্যই পূরণ করতে হবে</span>} <br />


                            <label className='form-label mt-1' >আবেদনকারী উপজাতি কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                            <input   {...register('upazati', { required: true })}  type="radio" id="upazati-yes" name="upazati" value="1"  />
                            <label htmlFor="upazati-yes" className='form-label ms-2 '>হ্যাঁ</label>
                            <input {...register('upazati', { required: true })}  className=' ms-3' type="radio" id="upazati-no" name="upazati" value="0"   />
                            <label htmlFor="upazati-no" className='form-label ms-2 '>না</label> <br />
                            {errors.upazati && <span className='text-danger'>এই ঘারটি অবশ্যই পূরণ করতে হবে</span>} <br />
                           

                        </div>
                       
                    </div>
                </section>




           

{/* সংযুক্ত*/}
            <section className="form-group position-relative">
                    {ImageLoader &&  <div className='position-absolute top-50 start-50 translate-middle'>
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                        <span role="status">Uploading...</span>
                                    </button>    
                                </div>
                     
                    }
                <div className="form-group-title">
                    <h5 className='mb-4' >সংযুক্ত: <span style={{fontSize: "15px"}}>(png/ jpg/ jpeg format ) </span></h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <label className='form-label '>ছবি : 300px X 300px <span className='require-mark'>*</span> </label><br /> 
                            {
                                imageData.profileImg ? <div> 
                                                            <img className="mt-2 rounded-3" width="150px" crossOrigin ="anonymous"  
                                                            src={`${import.meta.env.VITE_URL}/${imageData.profileImg}`} alt="Thumbnail" />
                                                            <button onClick={()=>removeImage("profileImg")} className='btn btn-danger ms-2'> Remove </button>
                                                        </div> :
                                <input onChange={handleImage} name='profileImg' type="file" className='form-control'  /> 
                            }
                        </div>

                    </div>
                    <div className="col-md-6">
                   
                        <label className='form-label '>স্বাক্ষর:  300px X 80px <span className='require-mark'>*</span> </label>
                        <div >
                            { 
                                imageData.signature ? <div>
                                                            <img className="mt-2 rounded-3" width="150px" crossOrigin ="anonymous"  
                                                            src={`${import.meta.env.VITE_URL}/${imageData.signature}`} alt="Thumbnail" />
                                                            <span  onClick={()=>removeImage("signature")} className='btn btn-danger ms-2'> Remove </span>
                                                        </div>:
                                <input onChange={handleImage} name='signature' type="file" className='form-control'  />
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </section>

        <div className='text-end'>
            <input disabled={isExit} className='button-one my-4' type="submit" value="Submit" />
        </div>
        </form>

    </div>
    );
};

export default ScholarshipRegistrationForm;