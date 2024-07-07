import './StudentRegistration.css';
import { useForm } from "react-hook-form";

const StudentRegistration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <div className="container">
                <div className="form-title">
                    <h2>ছাত্র-ছাত্রীদের শিক্ষা বৃত্তির আবেদন ফরম</h2>
                    <h5>(শুধুমাত্র জামালপুর জেলার স্থায়ী বাসিন্দদের জন্য)</h5>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className='box'>
                                <h5 >সাধারণ তথ্য</h5>
                               
                                <label className='form-label' htmlFor="name">নাম (বাংলায়)</label>
                                <input className='form-control' id="name" {...register('name', { required: true, maxLength: 30 })} />
                            

                                <label className='form-label mt-4' htmlFor="fatherName">পিতার নাম</label>
                                <input className='form-control' id="fatherName" {...register('fatherName', { required: true, maxLength: 30 })} />

                                <label className='form-label mt-4' htmlFor="nid">জন্ম নিবন্ধন নাম্বার</label>
                                <div className='d-flex'>
                                    <input type="text" id="nid"className='form-control w-75' required />
                                    <button className='btn btn-danger w-25'> যাচাই </button> 
                                </div>

                                <label className='form-label mt-4' htmlFor="birthDate">জন্ম তারিখ</label>
                                <input type="date" className='form-control' id="birthDate" {...register('birthDate', { required: true, maxLength: 30 })} />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className='box'>
                                <label className='form-label nameFieldLabel' htmlFor="nameInEglish">নাম (ইংরেজীতে)</label>
                                <input className='form-control' id="nameInEglish" {...register('nameInEglish', { required: true })} />

                                <label className='form-label mt-4' htmlFor="motherName">মাতার নাম</label>
                                <input className='form-control' id="motherName" {...register('motherName', { required: true })} />
                                
                                <label className='form-label mt-4' htmlFor="nid">এনআইডি/NID নাম্বার (যদি থাকে)</label>
                                    <div className='d-flex'>
                                        <input type="text" id="nid"className='form-control w-75' required />
                                        <button className='btn btn-danger w-25'> যাচাই </button> 
                                    </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div className='box'>
                                <h5 className='mb-4' >স্থায়ী ঠিকানা</h5>

                                <label className='form-label' htmlFor="village">গ্রাম/বাসা নম্বর</label>
                                <input className='form-control' id="village" {...register('village', { required: true})} />
                            
                                <label className='form-label mt-4' htmlFor="address">এলাকা</label>
                                <input className='form-control' id="address" {...register('address', { required: true })} />

                                <label className='form-label mt-4' htmlFor="postOffice">ডাকঘর </label>
                                <input className='form-control' id="postOffice" {...register('postOffice', { required: true })} />

                                <label className='form-label mt-4' htmlFor="upazilla">উপজেলা</label>
                                <input  className='form-control' id="upazilla" {...register('upazilla', { required: true })} />

                                <label className='form-label mt-4' htmlFor="district">জেলা</label>
                                <input  className='form-control' id="district" {...register('district', { required: true })} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='box'>
                                <h5 className='mb-4' >বর্তমান ঠিকানা</h5>

                                <label className='form-label' htmlFor="village">গ্রাম/বাসা নম্বর</label>
                                <input className='form-control' id="village" {...register('village', { required: true})} />
                            
                                <label className='form-label mt-4' htmlFor="address">এলাকা</label>
                                <input className='form-control' id="address" {...register('address', { required: true })} />

                                <label className='form-label mt-4' htmlFor="postOffice">ডাকঘর </label>
                                <input className='form-control' id="postOffice" {...register('postOffice', { required: true })} />

                                <label className='form-label mt-4' htmlFor="upazilla">উপজেলা</label>
                                <input  className='form-control' id="upazilla" {...register('upazilla', { required: true })} />

                                <label className='form-label mt-4' htmlFor="district">জেলা</label>
                                <input  className='form-control' id="district" {...register('district', { required: true })} />
                            </div>
                        </div>
                    </div>
                    
                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <div className='box'>
                                <h5 className='mb-4' >এস এস সি / সমমান পরীক্ষা পাসের বিবরণ</h5>

                                <label className='form-label' htmlFor="sscExamName">পরীক্ষার নাম</label>
                                <input className='form-control' id="sscExamName" {...register('sscExamName', { required: true})} />
                            
                                <label className='form-label mt-4' htmlFor="sscExamInstiture">প্রতিষ্ঠানের নাম</label>
                                <input className='form-control' id="sscExamInstiture" {...register('sscExamInstitute', { required: true })} />

                                <label className='form-label mt-4' htmlFor="sscBoard">বোর্ড </label>
                                <input className='form-control' id="sscBoard" {...register('sscBoard', { required: true })} />

                                <label className='form-label mt-4' htmlFor="sscGroup">গ্রুপ/বিভাগ</label>
                                <input  className='form-control' id="sscGroup" {...register('sscGroup', { required: true })} />

                                <label className='form-label mt-4' htmlFor="sscYear">পাশের সন</label>
                                <input  className='form-control' id="sscYear" {...register('sscYear', { required: true })} />

                                <label className='form-label mt-4' htmlFor="sscRoll">রোল নাম্বার</label>
                                <input  className='form-control' id="sscRoll" {...register('sscRoll', { required: true })} />

                                <label className='form-label mt-4' htmlFor="sscRegistration">রেজিস্ট্রেশন নাম্বার</label>
                                <input  className='form-control' id="sscRegistration" {...register('sscRegistration', { required: true })} />

                                <label className='form-label mt-4' htmlFor="sscResult">ফলাফল</label>
                                <input  className='form-control' id="sscResult" {...register('sscResult', { required: true })} />
                                
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='box'>
                                <h5 className='mb-4' >এইচ এস সি / সমমান পরীক্ষা পাসের বিবরণ</h5>

                                <label className='form-label' htmlFor="hscExamName">পরীক্ষার নাম</label>
                                <input className='form-control' id="hscExamName" {...register('hscExamName', { required: true})} />
                            
                                <label className='form-label mt-4' htmlFor="hscExamInstitute">প্রতিষ্ঠানের নাম</label>
                                <input className='form-control' id="hscExamInstitute" {...register('hscExamInstitute', { required: true })} />

                                <label className='form-label mt-4' htmlFor="hscBoard">বোর্ড </label>
                                <input className='form-control' id="hscBoard" {...register('hscBoard', { required: true })} />

                                <label className='form-label mt-4' htmlFor="hscGroup">গ্রুপ/বিভাগ</label>
                                <input  className='form-control' id="hscGroup" {...register('hscGroup', { required: true })} />

                                <label className='form-label mt-4' htmlFor="hscYear">পাশের সন</label>
                                <input  className='form-control' id="hscYear" {...register('hscYear', { required: true })} />

                                <label className='form-label mt-4' htmlFor="hscRoll">রোল নাম্বার</label>
                                <input  className='form-control' id="hscRoll" {...register('hscRoll', { required: true })} />

                                <label className='form-label mt-4' htmlFor="hscRegistration">রেজিস্ট্রেশন নাম্বার</label>
                                <input  className='form-control' id="hscRegistration" {...register('hscRegistration', { required: true })} />

                                <label className='form-label mt-4' htmlFor="hscResult">ফলাফল</label>
                                <input  className='form-control' id="hscResult" {...register('hscResult', { required: true })} />
                                
                                
                            </div>
                        </div>
                    </div>
                
               
                
                <input className='btn btn-success mt-4' type="submit" />
                </form>





            </div>
            
        </section>
    );
};

export default StudentRegistration;