import './PersonOne.css'
import HomePageStore from '../../Store/HomePageStore';
import { useEffect } from 'react';

const PersonOne = () => {

    const {PersonList,  PersonListRequest } = HomePageStore();


    useEffect( ()=>{
        (async()=>{
            PersonList === null &&  PersonListRequest()
        })()
    } ,[])

    return (
        <aside  >
            {
                PersonList === null ? "Loading" :
                PersonList.length ===0 ? "No Person found":
                PersonList.map( (item, index) =>{
                    return (
                        <div key={index} className='person-bg text-center'>
                            <img src={`${import.meta.env.VITE_URL}/${item?.image}`} alt="Person" />
                            <h6 className='my-3'>{item?.name}</h6>
                            <p>{item.designation} </p>
                            {item?.mobile && <small>মোবাইল নং: {item.mobile}</small> }
                            {item?.phone && <small> ফোন (অফিস): {item.phone}</small>}
                            {item?.email&& <small>  ই-মেইল: {item.email}</small>}
                            {item?.batch && <small> ব্যাচ (বিসিএস) : {item.batch}</small>}
                            {item?.joiningDate && <small> বর্তমান কর্মস্থলে যোগদানের তারিখ : {item.joiningDate}</small>}
                            
                           
                            
                            
                            
{/* 
                            <small>মোবাইল নং : {item.mobile} <br />
                                ফোন (অফিস) : {item.phone} <br />
                                ই-মেইল : {item.email} <br />
                                ব্যাচ (বিসিএস) : {item.batch} <br />
                                বর্তমান কর্মস্থলে যোগদানের তারিখ : {item.joiningDate}
                            </small> */}
                        </div>
                    )
                }) 
            }
            

            {/* <div className='person-bg text-center'>
                <img src={person} alt="Person" />
                <h6 className='my-3'>জনাব মুন মুন জাহান লিজা</h6>
                <p>প্রধান নির্বাহী কর্মকর্তা (ভারপ্রাপ্ত) </p>
                <small>মোবাইল নং : ০১৭০৪৫০৬৪৩৩ <br />
                    ফোন (অফিস) : ০৯৮১-৬২৭১৬ <br />
                    ই-মেইল : zpjamalpur@lgd.gov.bd <br />
                    ব্যাচ (বিসিএস) : ৩৩ <br />
                    বর্তমান কর্মস্থলে যোগদানের তারিখ : ২০ মার্চ ২০২৩
                </small>
            </div> */}
            
        </aside>
    );
};

export default PersonOne;