import './PersonOne.css'
import person  from '../../assets/person-1.jpg'

const PersonOne = () => {
    return (
        <aside  className='person-bg text-center'>
            <img src={person} alt="Person" />
            <h5 className='mt-3'>জনাব মুন মুন জাহান লিজা</h5>
            <p>প্রধান নির্বাহী কর্মকর্তা (ভারপ্রাপ্ত) </p>
            <small>মোবাইল নং : ০১৭০৪৫০৬৪৩৩ <br />
                ফোন (অফিস) : ০৯৮১-৬২৭১৬ <br />
                ই-মেইল : zpjamalpur@lgd.gov.bd <br />
                ব্যাচ (বিসিএস) : ৩৩ <br />
                বর্তমান কর্মস্থলে যোগদানের তারিখ : ২০ মার্চ ২০২৩
            </small>
            
        </aside>
    );
};

export default PersonOne;