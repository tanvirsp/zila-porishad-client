import './CourseRegistrationForm.css';
import { useForm } from "react-hook-form";
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
import StudentStore from '../../Store/StudentStore';
import { useNavigate } from 'react-router-dom';
import CourseStore from '../../Store/CourseStore';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle  } from "react-icons/io";
import toast from 'react-hot-toast';
import { IsFileEmptyForCourse } from '../../Utility/fileChecker';
import FullScreenLoader from '../../Layout/FullScreenLoader';
import UploadStore from '../../Store/UploadStore';




const CourseRegistrationForm = () => {
    const {AllCourseRequest, AllCourse} = CourseStore();
    const {IsAlreadyApplied, Loader, StudenRegister} = StudentStore();
    const {MultiImageUploadRequest, SingleImageUploadRequest, ImageLoader} = UploadStore();
    const [eightPass, setEightPass] = useState(false);
    
    const { register,   formState: { errors },   handleSubmit } = useForm();

    const navigate = useNavigate();
  
    useEffect( ()=>{
        ( async()=>{
            AllCourse === null && await AllCourseRequest();

        })()
    } ,[])


    const [certificateCopy, setCertificateCopy] = useState([])

    const [imageData, setImageData] = useState({
        profileImg: "",
        signature: "",
        citizenshipCertificateImg: "",
        birthCertificateImg: "",

    });


   
  
//Sending Data to Server
    const onSubmit = async(data) =>{
        if(certificateCopy.length === 0){
            alert("অনুগ্রহ পূর্বক সার্টিফিকেট কপি আপলোড করুন");
            return;
        }

        const allData = {
            ...data,
            attachment: imageData,
            certificateCopy,
            eightPass
        }
        
        const isEveryImagePropertyFilled = IsFileEmptyForCourse(imageData);
        
        if (isEveryImagePropertyFilled){
            const result = await StudenRegister(allData);
            if(result.status ==="success"){
                //0 for coure and 1 for scholarship
                navigate(`/thankyou/${result.data._id}/${0}`);
                localStorage.clear("formData");
            } else {
                toast.error("something went wrong");
            }
           
        } else {
            toast.error("অনুগ্রহ পূর্বক সবগুলো ফাইল কপি সংযুক্ত করুন")
        } 
    };



//Remove Image from State
    const removeImage = (name)=>{
        setImageData({
            ...imageData,
            [name]: ""
        })
    };

  

const maxSize = 1 * 1024 * 1024;
//Uploading Image to server
    const handleImage = async(e) =>{
        e.preventDefault();

        
        const curreSize = e.target.files[0].size

        if(curreSize >= maxSize ){
            alert (" সর্বোচ্চ 1 MB সাইজ")
            return
        }


        const formData = new FormData();
        formData.append("image", e.target.files[0]);

        const result = await SingleImageUploadRequest(formData);
        if(result.status){
            setImageData({
                ...imageData,
                [e.target.name]: result.data.filename
    
            })
        }
    };



//Uploading Multi Image to server 4 images
    const handleImageMulti =async(e) =>{
        e.preventDefault();

    
        if(e.target.files.length > 4){
            alert("সর্বোচ্চ ৪টি ফাইল আপলোড করুন ");
            return
        }

        for (let i = 0; i < e.target.files.length; i++) {
            let currentSize = e.target.files[i].size;
            if (currentSize > maxSize) {
                alert("প্রতিটি সর্বোচ্চ 1 MB সাইজের ফাইল আপলোড করতে পারবেন");
                return;
            }
        }

        

        const formData = new FormData();
        // Loop through the files and append each one to the FormData object

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("images", e.target.files[i]);
        }

        const result = await MultiImageUploadRequest(formData);
        console.log(result);

        const certificateName = result.data.map( item => item.filename)
        
        setCertificateCopy(certificateName)
  
    
    }


//Checking Already Applied by Birth Certificate Number
    const [isExit, setIsExit] = useState(true)
    

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

            }else {
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
                <h2 className='mt-3'>২০২৩-২০২৪ অর্থ বছরের প্রশিক্ষণের জন্য আবেদন </h2>
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
                            <label className='form-label mt-2' htmlFor="nid">জন্ম নিবন্ধন নাম্বার (ইংরেজীতে) <span className='require-mark'>*</span></label>
                            <div className='d-flex align-items-center'>
                                <input {...register("birthCertificateNumber")}  onBlur={checkBirthCertificate}  
                                type="text" id="nid" className={isExit? "form-control border border-danger" : " form-control border border-success"} required />
                                {isExit ? <IoIosCloseCircle className='text-danger fs-3' />  : <FaCheckCircle className='text-success fs-4' /> }
                                
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <label className='form-label mt-2 ' htmlFor="nid">এনআইডি/NID নাম্বার (যদি থাকে)</label>
                            <input  {...register("nidNumber")} type="text" id="nid"className='form-control '  />
                            
                        
                        </div>
                    
                    </div>
                </section>




{/* সাধারণ তথ্য */}
                <section className="form-group">
                    <div className="form-group-title">
                        <h5>সাধারণ তথ্য:</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label className='form-label mt-2' htmlFor="name">প্রশিক্ষনার্থীর নাম (বাংলায়) <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="name" {...register('name', { required: true, maxLength: 30 })} />

                            <label className='form-label mt-4 ' htmlFor="nameInEnglish"> প্রশিক্ষনার্থীর নাম (ইংরেজীতে) <span className='require-mark'>*</span></label>
                            <input   className='form-control' id="nameInEnglish" {...register('nameInEnglish', { required: true })} />

                            <label className='form-label mt-4' htmlFor="birthDate">জন্ম তারিখ <span className='require-mark'>*</span></label>
                            <input   type="date" className='form-control' id="birthDate" {...register('birthDate', { required: true})} />

                            <label className='form-label mt-4' htmlFor="mobile">মোবাইল নম্বর <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="mobile" {...register('mobile', { required: true})} />

                        </div>
                        <div className="col-md-4">
                            <label className='form-label mt-2' htmlFor="fatherName">পিতার নাম (বাংলায়) <span className='require-mark'>*</span></label>
                            <input   className='form-control' id="fatherName" {...register('fatherName', { required: true, maxLength: 30 })} />

                            <label className='form-label mt-4' htmlFor="fatherNameinEnglish">পিতার নাম (ইংরেজীতে) <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="fatherNameinEnglish" {...register('fatherNameinEnglish', { required: true, maxLength: 30 })} />
                            
                            <label className='form-label mt-4' >কোর্স নির্বাচন করুন <span className='require-mark'>*</span></label>
                            <select  defaultValue="" className='form-select' {...register("courseId", { required: true })}>
                                <option value="" disabled >Select </option>

                                {
                                    AllCourse !== null &&
                                    AllCourse.map( (item, index) =>{
                                        return (
                                            <option key={index} value={item._id} > {item.name}</option>
                                        )
                                    } )
                                }

                            </select>
                            
          
                        </div>
                        <div className="col-md-4">
                            <label className='form-label mt-2' htmlFor="motherName">মাতার নাম (বাংলায়) <span className='require-mark'>*</span></label>
                            <input  className='form-control' id="motherName" {...register('motherName', { required: true })} />

                            <label className='form-label mt-4' htmlFor="motherNameInEnglish">মাতার নাম (ইংরেজীতে) <span className='require-mark'>*</span></label>
                            <input   className='form-control' id="motherNameInEnglish" {...register('motherNameInEnglish', { required: true })} />

                        
                            <label className='form-label mt-4' htmlFor="email">ইমেইল </label>
                            <input className='form-control' id="email" {...register('email') } />
          
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
                                    <label className='form-label' htmlFor="parmanentVillage">গ্রাম/বাসা নম্বর <span className='require-mark'>*</span></label>
                                    <input  className='form-control' id="parmanentVillage" {...register('parmanentVillage', { required: true})} />
                                
                                    <label className='form-label mt-4' htmlFor="parmanentArea">এলাকা <span className='require-mark'>*</span></label>
                                    <input className='form-control' id="parmanentArea" {...register('parmanentArea', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="parmanentPostOffice">ডাকঘর <span className='require-mark'>*</span> </label>
                                    <input   className='form-control' id="parmanentPostOffice" {...register('parmanentPostOffice', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="parmanentUpazilla">উপজেলা <span className='require-mark'>*</span></label>
                                    <input   className='form-control' id="parmanentUpazilla" {...register('parmanentUpazilla', { required: true })} />

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
                                    <label className='form-label' htmlFor="presentVillage">গ্রাম/বাসা নম্বর <span className='require-mark'>*</span></label>
                                    <input  className='form-control' id="presentVillage" {...register('presentVillage', { required: true})} />
                                
                                    <label className='form-label mt-4' htmlFor="presentArea">এলাকা <span className='require-mark'>*</span></label>
                                    <input className='form-control' id="presentArea" {...register('presentArea', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="presentPostOffice">ডাকঘর <span className='require-mark'>*</span> </label>
                                    <input  className='form-control' id="presentPostOffice" {...register('presentPostOffice', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="presentUpazilla">উপজেলা <span className='require-mark'>*</span></label>
                                    <input  className='form-control' id="presentUpazilla" {...register('presentUpazilla', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="presentDistrict">জেলা <span className='require-mark'>*</span></label>
                                    <input className='form-control' id="presentDistrict" {...register('presentDistrict', { required: true })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

{/* অস্টম শ্রেণী পাশ বিবরণ */}
                <section className='form-group'>
                  
                    <div className="form-check">
                        <input onChange={() => setEightPass(!eightPass)} className="form-check-input" type="checkbox" value="" id="checkMark"/>
                        <label className="form-check-label" htmlFor="checkMark">
                        শিক্ষাগত যোগ্যতা অষ্টম শ্রেণী পাস
                        </label>
                    </div>
                    
                </section>
{
    !eightPass && <div>
        {/* এস এস সি ও এইচএসসি বিবরণ */}
                <section>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="form-group-title">
                                        <h5>এস এস সি / সমমান পরীক্ষা পাসের বিবরণ:</h5>
                                    </div>
                                    <div>
                                        <label className='form-label' htmlFor="sscExamName">পরীক্ষার নাম <span className='require-mark'>*</span></label>
                                        <select  defaultValue=""  className='form-select' {...register("examOne", { required: true })}>
                                            <option value="" disabled >Select </option>
                                            <option value="S.S.C">S.S.C</option>
                                            <option value="Dakhil">Dakhil</option>
                                            <option value="SSC-Vocational">S.S.C Vocational</option>
                                            <option value="S.S.C Equivalent">S.S.C Equivalent</option>
                                            <option value="Dakhil Vocational">Dakhil Vocational</option>
                                        </select>

                                        <label className='form-label mt-4'>বোর্ড <span className='require-mark'>*</span> </label>
                                        <select  defaultValue=""  className='form-select' {...register("examOneBoard", { required: true })}>
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
                                        <select defaultValue=""  className='form-select' {...register("examOneGroup", { required: true })}>
                                            <option value="" disabled >Select Group </option>
                                            <option value="Business Studies">Business Studies</option>
                                            <option value="General">General</option>
                                            <option value="Humanities">Humanities</option>
                                            <option value="Science">Science</option>
                                            <option value="Other">Other</option>
                                        </select>

                                        <label className='form-label mt-4' htmlFor="examOneYear">পাশের সন <span className='require-mark'>*</span></label>
                                        <input  className='form-control' id="examOneYear" {...register('examOneYear', { required: true })} />

                                        <label className='form-label mt-4' htmlFor="examOneRoll">রোল নাম্বার <span className='require-mark'>*</span></label>
                                        <input    className='form-control' id="examOneRoll" {...register('examOneRoll', { required: true })} />

                                        <label className='form-label mt-4' htmlFor="examOneReg">রেজিস্ট্রেশন নাম্বার <span className='require-mark'>*</span></label>
                                        <input     className='form-control' id="examOneReg" {...register('examOneReg', { required: true })} />

                                        <label className='form-label mt-4' htmlFor="examOneResult">ফলাফল <span className='require-mark'>*</span></label>
                                        <input    className='form-control' id="examOneResult" {...register('examOneResult', { required: true })} />
                                        

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="form-group-title">
                                        <h5>এইচ এস সি / সমমান পরীক্ষা পাসের বিবরণ:</h5>
                                    </div>
                                    <div>
                                    <label className='form-label' htmlFor="examTwo">পরীক্ষার নাম <span className='require-mark'>*</span></label>
                                        <select   defaultValue="" className='form-select' {...register("examTwo", { required: true })}>
                                            <option value="" disabled >Select </option>
                                            <option value="H.S.C">H.S.C</option>
                                            <option value="Alim">Alim</option>
                                            <option value="HSC-Vocational">H.S.C Vocational</option>
                                            <option value="H.S.C Equivalent">H.S.C Equivalent</option>
                                            <option value="Alim Vocational">Alim Vocational</option>
                                        </select>

                                        <label className='form-label mt-4'>বোর্ড <span className='require-mark'>*</span> </label>
                                        <select   defaultValue=""  className='form-select' {...register("examTwoBoard", { required: true })}>
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
                                        <select defaultValue=""   className='form-select' {...register("examTwoGroup", { required: true })}>
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
                                        <input className='form-control' id="examTwoResult" {...register('examTwoResult',{ required: true })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

        {/* অনার্স ও মাস্টার্স বিবরণ */}
                <section>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="form-group-title">
                                    <h5>স্নাতক পাসের বিবরণ:</h5>
                                </div>
                                <div>
                                    <label className='form-label mt-4'>বিষয় </label>
                                    <input  className='form-control'  {...register('honSubject')} />


                                    <label className='form-label mt-4' >রোল নাম্বার </label>
                                    <input  className='form-control' {...register('honRoll')} />

                                    <label className='form-label mt-4'>রেজিস্ট্রেশন নাম্বার </label>
                                    <input     className='form-control'  {...register('honReg')} />

                                    
                                    <label className='form-label mt-4' >পাশের সন </label>
                                    <input  className='form-control'  {...register('honYear')} />

                                    
                                    <label className='form-label mt-4' >ফলাফল </label>
                                    <input    className='form-control'  {...register('honResult')} />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="form-group-title">
                                    <h5>স্নাতকোত্তর পাসের বিবরণ:</h5>
                                </div>
                                <div>
                                    <label className='form-label mt-4'>বিষয় </label>
                                    <input  className='form-control'  {...register('masSubject')} />


                                    <label className='form-label mt-4' >রোল নাম্বার </label>
                                    <input  className='form-control' {...register('masRoll')} />

                                    <label className='form-label mt-4'>রেজিস্ট্রেশন নাম্বার </label>
                                    <input     className='form-control'  {...register('masReg')} />

                                    
                                    <label className='form-label mt-4' >পাশের সন </label>
                                    <input  className='form-control'  {...register('masYear')} />
                                    
                                    <label className='form-label mt-4' >ফলাফল </label>
                                    <input    className='form-control'  {...register('masResult')} />
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>


    </div>
}




{/* অন্যান্য তথ্য */}
                <section>
                    <div className="row form-group">
                        <div className="col-md-5">
                           
                            <div className="form-group-title">
                                <h5>অন্যান্য তথ্য:</h5>
                            </div>
                            <div>
                                
                                <label className='form-label mt-4' >আবেদনকারী মুক্তিযোদ্ধার সন্তান/ নাতি নাতনি কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                                <input   {...register('cota', { required: true })} type="radio" id="cota-yes" name="cota" value="1"/>
                                <label htmlFor="cota-yes" className='form-label ms-2 '>হ্যাঁ</label>
                                <input  {...register('cota', { required: true })} className=' ms-3' type="radio" id="cota-no" name="cota" value="0"/>
                                <label htmlFor="cota-no" className='form-label ms-2'>না</label> <br />
                                {errors.cota && <span className='text-danger'>এই ঘরটি অবশ্যই পূরণ করতে হবে</span>} 

                            </div>
                            
                        </div>
                        <div className="col-md-3">
                            <div>
                                <label className='form-label mt-5'> আবেদনকারী প্রতিবন্ধী কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                                <input   {...register('disabled', { required: true })}  type="radio" id="disabled-yes" name="disabled" value="1"/>
                                <label htmlFor="disabled-yes" className='form-label ms-2 '>হ্যাঁ</label>
                                <input  {...register('disabled', { required: true })}  className=' ms-3' type="radio" id="disabled-no" name="disabled" value="0"/>
                                <label htmlFor="disabled-no" className='form-label ms-2 '>না</label> <br />
                                {errors.disabled && <span className='text-danger'>এই ঘারটি অবশ্যই পূরণ করতে হবে</span>} 
  
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label className='form-label mt-5' >আবেদনকারী উপজাতি কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                                <input   {...register('upazati', { required: true })}  type="radio" id="upazati-yes" name="upazati" value="1"/>
                                <label htmlFor="upazati-yes" className='form-label ms-2 '>হ্যাঁ</label>
                                <input {...register('upazati', { required: true })}  className=' ms-3' type="radio" id="upazati-no" name="upazati" value="0"/>
                                <label htmlFor="upazati-no" className='form-label ms-2 '>না</label> <br />
                                {errors.upazati && <span className='text-danger'>এই ঘারটি অবশ্যই পূরণ করতে হবে</span>}
                                
                            </div>
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
                        <h5 className='mb-4' >সংযুক্ত: <p style={{fontSize: "15px", color: "red"}}>(png/ jpg/ jpeg format ) [Maximum 1 MB Each File] </p></h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <label className='form-label '>ছবি : 150px X 150px   <span className='require-mark'>*</span> </label><br /> 
                                {
                                    imageData.profileImg ? <div> 
                                                                <img className="mt-2 rounded-3" width="150px" crossOrigin ="anonymous"  
                                                                src={`${import.meta.env.VITE_URL}/${imageData.profileImg}`} alt="Thumbnail" />
                                                                <span onClick={()=>removeImage("profileImg")} className='btn btn-danger ms-2'> Remove </span>
                                                            </div> :
                                    <input onChange={handleImage} name='profileImg' type="file" className='form-control'  />
                                    
                                }
                            </div>
                            

                            <label className='form-label mt-4 '>স্বাক্ষর:  200px X 150px <span className='require-mark'>*</span> </label>
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

                            <label className='form-label mt-4'>নাগরিকত্ব সনদপত্রের কপি <span className='require-mark'>*</span> </label>
                            <div >
                                { 
                                    imageData.citizenshipCertificateImg ? <div>
                                                                                <img className="mt-2 rounded-3" width="150px" crossOrigin ="anonymous"  
                                                                                src={`${import.meta.env.VITE_URL}/${imageData.citizenshipCertificateImg}`} alt="Thumbnail" />
                                                                                <span  onClick={()=>removeImage("citizenshipCertificateImg")  } className='btn btn-danger ms-2'> Remove </span>
                                                                            </div> :
                                    <input onChange={handleImage} name='citizenshipCertificateImg' type="file" className='form-control'  />
                                }
                            </div>

                        </div>
                        <div className="col-md-6">
                            <label className='form-label'>এনআইডি/ জন্মনিবন্ধন কপি  <span className='require-mark'>*</span> </label>
                            <div>
                                { 
                                    imageData.birthCertificateImg ? <div> 
                                                            <img className="mt-2 rounded-3" width="150px" crossOrigin ="anonymous"  
                                                            src={`${import.meta.env.VITE_URL}/${imageData.birthCertificateImg}`} alt="Thumbnail" />
                                                            <span  onClick={()=>removeImage("birthCertificateImg")  } className='btn btn-danger ms-2'> Remove </span>
                                                        </div> :
                                    <input onChange={handleImage} name='birthCertificateImg' type="file" className='form-control'  />
                                }
                                
                               
                            </div>

                            <label className='form-label mt-4'>সার্টিফিকেট কপি (সর্বোচ্চ ৪টি) <span className='require-mark'>*</span></label>
                            <input onChange={handleImageMulti}  type="file" multiple className='form-control'  />
                    
                            <div className='row' >
                                { 
                                    
                                    certificateCopy.length === 0 ? "" :
                                    certificateCopy.map( (item, index) =>{
                                        return(
                                            <div key={index} className='col-3 p-2' >
                                                <img className="mt-2 rounded-3 w-100"  crossOrigin ="anonymous"  
                                                src={`${import.meta.env.VITE_URL}/${item}`} alt="Thumbnail" /> 
                                            </div>
                                        )
                                    } )

                                }
                            </div>
                            { certificateCopy.length >0 && <span onClick={()=>setCertificateCopy([]) } className='btn btn-danger mt-1'> Remove All </span> }
                        </div>
                    </div>
                </section>

            <div className='text-end'>
                <input  disabled={isExit}  className='button-one my-4' type="submit" value="Submit" />
                
               
            </div>
            </form>

        </div>
            
    );
};

export default CourseRegistrationForm;