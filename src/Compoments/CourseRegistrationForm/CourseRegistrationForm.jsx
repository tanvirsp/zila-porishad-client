import './CourseRegistrationForm.css';
import { useForm } from "react-hook-form";
import logo3 from '../../assets/logo-3.png'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
import StudentStore from '../../Store/StudentStore';
import { useNavigate } from 'react-router-dom';
import CourseStore from '../../Store/CourseStore';





const CourseRegistrationForm = () => {
    const {AllCourseRequest, AllCourse} = CourseStore();
    const {ImageUploadRequest} = StudentStore()

    const navigate = useNavigate();
    const previewData = localStorage.getItem('formData');

   
    

    let previewDataObj = {
        examOne: '',
        examOneBoard: '',
        courseId: '',
        examOneGroup: '',
        examTwo: '',
        examTwoBoard: '',
        examTwoGroup: '', 
    };


    useEffect( ()=>{
        ( async()=>{
            AllCourse === null && await AllCourseRequest();

        })()
    } ,[])
    


    if(previewData !== null) {
        previewDataObj = JSON.parse(previewData);
    }

  

    const [imageData, setImageData] = useState({
        profileImg: previewDataObj?.attachment?.profileImg,
        studyingImg: previewDataObj?.attachment?.studyingImg,
        citizenshipCertificateImg: previewDataObj?.attachment?.citizenshipCertificateImg,
        nidImg: previewDataObj?.attachment?.nidImg,
        birthCertificateImg: previewDataObj?.attachment?.birthCertificateImg
    });

    

    const { register,   handleSubmit } = useForm();

    const onSubmit = async(data) =>{
        const allData = {
            ...data,
            attachment: imageData
        }
        
        localStorage.setItem("formData", JSON.stringify(allData) );
        navigate("/form-preview-page")
        

    };



  


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




    return (
    
        <div className="container py-5">
            <section className="form-title">
                <div>
                    <img className='small-logo' src={logo} alt="" />
                </div>
                <div className='text-center'>
                    <h2> কোর্স আবেদন ফরম</h2>
                    <h6>(শুধুমাত্র জামালপুর জেলার স্থায়ী বাসিন্দদের জন্য)</h6>
                </div>
                <div>
                    <img className='mujibor' src={logo3} alt="logo" />
                </div>
            </section>


            <form onSubmit={handleSubmit(onSubmit)}>
                {/* তথ্য যাচাই */}
            <section className="form-group">
                <div className="form-group-title">
                    <h5 >তথ্য যাচাই:</h5>
                </div>
                <div className="row ">
                    <div className="col-md-4">
                        <label className='form-label' htmlFor="nid">জন্ম নিবন্ধন নাম্বার <span className='require-mark'>*</span></label>
                        <input   defaultValue={previewDataObj?.birthCertificateNumber} {...register("birthCertificateNumber", { required: true })}  type="text" id="nid"className='form-control' required />
                    </div>
                    <div className="col-md-4">
                        <label className='form-label ' htmlFor="nid">এনআইডি/NID নাম্বার (যদি থাকে)</label>
                        <input   defaultValue={previewDataObj?.nidNumber} {...register("nidNumber")} type="text" id="nid"className='form-control '  />
                       
                    </div>
                    <div className="col-md-4">
                        <label className='form-label' htmlFor="sscExamName">কোর্স নির্বাচন করুন <span className='require-mark'>*</span></label>
                        <select  defaultValue={previewDataObj?.courseId} className='form-select' {...register("courseId", { required: true })}>
                            <option value="" disabled >Select </option>

                            {
                                AllCourse === null ? <option >Loading</option> :
                                AllCourse.map( (item, index) =>{
                                    return (
                                        <option key={index} value={item._id} > {item.name}</option>
                                    )
                                } )
                            }

                        </select>
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
                            <label className='form-label' htmlFor="name">নাম (বাংলায়) <span className='require-mark'>*</span></label>
                            <input defaultValue={previewDataObj?.name}  className='form-control' id="name" {...register('name', { required: true, maxLength: 30 })} />
                        
                            <label className='form-label mt-4' htmlFor="fatherName">পিতার নাম <span className='require-mark'>*</span></label>
                            <input defaultValue={previewDataObj?.fatherName}  className='form-control' id="fatherName" {...register('fatherName', { required: true, maxLength: 30 })} />

                            <label className='form-label mt-4' htmlFor="birthDate">জন্ম তারিখ <span className='require-mark'>*</span></label>
                            <input defaultValue={previewDataObj?.birthDate}  type="date" className='form-control' id="birthDate" {...register('birthDate', { required: true})} />
                        </div>
                        <div className="col-md-6">
                            <label className='form-label ' htmlFor="nameInEnglish">নাম (ইংরেজীতে) <span className='require-mark'>*</span></label>
                            <input defaultValue={previewDataObj?.nameInEnglish}  className='form-control' id="nameInEnglish" {...register('nameInEnglish', { required: true })} />

                            <label className='form-label mt-4' htmlFor="motherName">মাতার নাম <span className='require-mark'>*</span></label>
                            <input defaultValue={previewDataObj?.motherName}  className='form-control' id="motherName" {...register('motherName', { required: true })} />
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
                                    <input defaultValue={previewDataObj?.parmanentVillage}  className='form-control' id="parmanentVillage" {...register('parmanentVillage', { required: true})} />
                                
                                    <label className='form-label mt-4' htmlFor="parmanentArea">এলাকা <span className='require-mark'>*</span></label>
                                    <input defaultValue={previewDataObj?.parmanentArea} className='form-control' id="parmanentArea" {...register('parmanentArea', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="parmanentPostOffice">ডাকঘর <span className='require-mark'>*</span> </label>
                                    <input  defaultValue={previewDataObj?.parmanentPostOffice} className='form-control' id="parmanentPostOffice" {...register('parmanentPostOffice', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="parmanentUpazilla">উপজেলা <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.parmanentUpazilla} className='form-control' id="parmanentUpazilla" {...register('parmanentUpazilla', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="parmanentDistrict">জেলা <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.parmanentDistrict} className='form-control' id="parmanentDistrict" {...register('parmanentDistrict', { required: true })} />
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
                                    <input defaultValue={previewDataObj?.presentVillage}  className='form-control' id="presentVillage" {...register('presentVillage', { required: true})} />
                                
                                    <label className='form-label mt-4' htmlFor="presentArea">এলাকা <span className='require-mark'>*</span></label>
                                    <input defaultValue={previewDataObj?.presentArea}  className='form-control' id="presentArea" {...register('presentArea', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="presentPostOffice">ডাকঘর <span className='require-mark'>*</span> </label>
                                    <input defaultValue={previewDataObj?.presentPostOffice}  className='form-control' id="presentPostOffice" {...register('presentPostOffice', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="presentUpazilla">উপজেলা <span className='require-mark'>*</span></label>
                                    <input defaultValue={previewDataObj?.presentUpazilla}   className='form-control' id="presentUpazilla" {...register('presentUpazilla', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="presentDistrict">জেলা <span className='require-mark'>*</span></label>
                                    <input defaultValue={previewDataObj?.presentDistrict}  className='form-control' id="presentDistrict" {...register('presentDistrict', { required: true })} />
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
                                    <label className='form-label' htmlFor="sscExamName">পরীক্ষার নাম <span className='require-mark'>*</span></label>
                                    <select  defaultValue={previewDataObj?.examOne}  className='form-select' {...register("examOne", { required: true })}>
                                        <option value="" disabled >Select </option>
                                        <option value="S.S.C">S.S.C</option>
                                        <option value="Dakhil">Dakhil</option>
                                        <option value="SSC-Vocational">S.S.C Vocational</option>
                                        <option value="S.S.C Equivalent">S.S.C Equivalent</option>
                                        <option value="Dakhil Vocational">Dakhil Vocational</option>
                                    </select>

                                    <label className='form-label mt-4'>বোর্ড <span className='require-mark'>*</span> </label>
                                    <select  defaultValue={previewDataObj?.examOneBoard}  className='form-select' {...register("examOneBoard", { required: true })}>
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
                                    <select defaultValue={previewDataObj?.examOneGroup}  className='form-select' {...register("examOneGroup", { required: true })}>
                                        <option value="" disabled >Select Group </option>
                                        <option value="Business Studies">Business Studies</option>
                                        <option value="General">General</option>
                                        <option value="Humanities">Humanities</option>
                                        <option value="Science">Science</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <label className='form-label mt-4' htmlFor="examOneYear">পাশের সন <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.examOneYear} className='form-control' id="examOneYear" {...register('examOneYear', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="examOneRoll">রোল নাম্বার <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.examOneRoll}   className='form-control' id="examOneRoll" {...register('examOneRoll', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="examOneReg">রেজিস্ট্রেশন নাম্বার <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.examOneReg}   className='form-control' id="examOneReg" {...register('examOneReg', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="examOneResult">ফলাফল <span className='require-mark'>*</span></label>
                                    <input   defaultValue={previewDataObj?.examOneResult}  className='form-control' id="examOneResult" {...register('examOneResult', { required: true })} />
                                    

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
                                    <select   defaultValue={previewDataObj?.examTwo} className='form-select' {...register("examTwo", { required: true })}>
                                        <option value="" disabled >Select </option>
                                        <option value="H.S.C">H.S.C</option>
                                        <option value="Alim">Alim</option>
                                        <option value="HSC-Vocational">H.S.C Vocational</option>
                                        <option value="H.S.C Equivalent">H.S.C Equivalent</option>
                                        <option value="Alim Vocational">Alim Vocational</option>
                                    </select>

                                    <label className='form-label mt-4'>বোর্ড <span className='require-mark'>*</span> </label>
                                    <select   defaultValue={previewDataObj?.examTwoBoard}   className='form-select' {...register("examTwoBoard", { required: true })}>
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
                                    <select  defaultValue={previewDataObj?.examTwoGroup}   className='form-select' {...register("examTwoGroup", { required: true })}>
                                        <option value="" disabled >Select Group </option>
                                        <option value="Business Studies">Business Studies</option>
                                        <option value="General">General</option>
                                        <option value="Humanities">Humanities</option>
                                        <option value="Science">Science</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <label className='form-label mt-4' htmlFor="examTwoYear">পাশের সন <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.examTwoYear}  className='form-control' id="examTwoYear" {...register('examTwoYear', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="examTwoRoll">রোল নাম্বার <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.examTwoRoll}   className='form-control' id="examTwoRoll" {...register('examTwoRoll', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="examTwoReg">রেজিস্ট্রেশন নাম্বার <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.examTwoReg}   className='form-control' id="examTwoReg" {...register('examTwoReg', { required: true })} />

                                    <label className='form-label mt-4' htmlFor="examTwoResult">ফলাফল <span className='require-mark'>*</span></label>
                                    <input  defaultValue={previewDataObj?.examTwoResult}   className='form-control' id="examTwoResult" {...register('examTwoResult', { required: true })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


{/* অভিভাবক ও যোগাযোগের তথ্য */}
                <section>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="form-group-title">
                                    <h5>অভিভাবকের তথ্য:</h5>
                                </div>
                                <div>
                                    <label className='form-label' htmlFor="fatherNID">পিতা/ অভিভাবকের NID নম্বর <span className='require-mark'>*</span></label>
                                    <input defaultValue={previewDataObj?.fatherNID} className='form-control' id="fatherNID" {...register('fatherNID', { required: true})} />
                                
                                    <label className='form-label mt-4' htmlFor="fatherYearlyIncome">পিতা/ অভিভাবকের বাৎসরি আয় <span className='require-mark'>*</span></label>
                                    <input defaultValue={previewDataObj?.fatherYearlyIncome} className='form-control' id="fatherYearlyIncome" {...register('fatherYearlyIncome', { required: true })} />

                                    <label className='form-label mt-4' >আবেদনকারী মুক্তিযোদ্ধার সন্তান/ নাতি নাতনি কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                                    <input   {...register('cota', { required: true })} type="radio" id="cota-yes" name="cota" value="1"/>
                                    <label htmlFor="cota-yes" className='form-label ms-2 '>হ্যাঁ</label>
                                    <input  {...register('cota', { required: true })} className=' ms-3' type="radio" id="cota-no" name="cota" value="0"/>
                                    <label htmlFor="cota-no" className='form-label ms-2 '>না</label> <br />

                                    <label className='form-label mt-4' htmlFor="instuteNameAndAddress">অধ্যায়নরত প্রতিষ্ঠানের নাম ও ঠিকানা <span className='require-mark'>*</span> </label>
                                    <input defaultValue={previewDataObj?.instuteNameAndAddress} className='form-control' id="instuteNameAndAddress" {...register('instuteNameAndAddress', { required: true})} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="form-group-title">
                                    <h5>যোগাযোগের তথ্য:</h5>
                                </div>
                                <div>
                                    <label className='form-label' htmlFor="mobile">মোবাইল নম্বর <span className='require-mark'>*</span></label>
                                    <input defaultValue={previewDataObj?.mobile} className='form-control' id="mobile" {...register('mobile', { required: true})} />
                                
                                    <label className='form-label mt-4' htmlFor="email">ইমেইল (Optional)</label>
                                    <input defaultValue={previewDataObj?.email} className='form-control' id="email" {...register('email')} />

                                    <label className='form-label mt-4' >আবেদনকারী প্রতিবন্ধী কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                                    <input   {...register('disabled', { required: true })}  type="radio" id="disabled-yes" name="disabled" value="1"/>
                                    <label htmlFor="disabled-yes" className='form-label ms-2 '>হ্যাঁ</label>
                                    <input  {...register('disabled', { required: true })}  className=' ms-3' type="radio" id="disabled-no" name="disabled" value="0"/>
                                    <label htmlFor="disabled-no" className='form-label ms-2 '>না</label> <br />

                                    <label className='form-label mt-4' >আবেদনকারী উপজাতি কি না টিক দিন <span className='require-mark'>*</span> </label> <br />
                                    <input   {...register('upazati', { required: true })}  type="radio" id="upazati-yes" name="upazati" value="1"/>
                                    <label htmlFor="upazati-yes" className='form-label ms-2 '>হ্যাঁ</label>
                                    <input {...register('upazati', { required: true })}  className=' ms-3' type="radio" id="upazati-no" name="upazati" value="0"/>
                                    <label htmlFor="upazati-no" className='form-label ms-2 '>না</label> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

{/* সংযুক্ত*/}
                <section className="form-group">
                    <div className="form-group-title">
                        <h5 >সংযুক্ত:</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <label className='form-label '>ছবি (png/ jpg/ jpeg ): 300px X 300px <span className='require-mark'>*</span> </label><br /> 
                                {
                                    imageData.profileImg ? <div> 
                                                                <button className=' btn btn-success'>Preview</button>
                                                                <button className='btn btn-danger'> Remove </button> 
                                                            </div> :
                                    <input onChange={handleImage} name='profileImg' type="file" className='form-control'  /> 
                                }
                            </div>
                            

                            <label className='form-label mt-4 '>শিক্ষা প্রতিষ্ঠানে অধ্যায়নের প্রমাণপত্র <span className='require-mark'>*</span> </label>
                            <div >
                                { 
                                    imageData.studyingImg ? <div>
                                                                <button className=' btn btn-success'>Uploaded</button> 
                                                                <button className='btn btn-danger'> Remove </button>
                                                            </div>:
                                    <input onChange={handleImage} name='studyingImg' type="file" className='form-control'  />
                                }
                                
                                
                            </div>

                            <label className='form-label mt-4'>নাগরিকত্ব সনদপত্রের কপি <span className='require-mark'>*</span> </label>
                            <div >
                                { 
                                    imageData.citizenshipCertificateImg ? <div>
                                                                                <button className=' btn btn-success'>Uploaded</button>
                                                                                <button className='btn btn-danger'> Remove </button>
                                                                            </div> :
                                    <input onChange={handleImage} name='citizenshipCertificateImg' type="file" className='form-control'  />
                                }
                            </div>

                        </div>
                        <div className="col-md-6">
                            <label className='form-label'>এনআইডি/NID কপি <span className='require-mark'>*</span> </label>
                            <div>
                                { 
                                    imageData.nidImg ? <div> 
                                                            <button className=' btn btn-success'>Uploaded</button>
                                                            <button className='btn btn-danger'> Remove </button>
                                                        </div> :
                                    <input onChange={handleImage} name='nidImg' type="file" className='form-control'  />
                                }
                                
                               
                            </div>

                            <label className='form-label mt-4'>জন্মনিবন্ধন কপি <span className='require-mark'>*</span> </label>
                            <div >
                                { 
                                    imageData.birthCertificateImg ? <div>
                                                                        <button className=' btn btn-success'>Uploaded</button>
                                                                        <button className='btn btn-danger'> Remove </button>
                                                                    </div> :
                                    <input onChange={handleImage} name='birthCertificateImg' type="file" className='form-control'  />
                                }
                            </div>
                        </div>
                    </div>
                </section>

            <div className='text-end'>
                <input  className='button-one my-4' type="submit" value="PREVIEW" />
            </div>
            </form>

        </div>
            
    );
};

export default CourseRegistrationForm;