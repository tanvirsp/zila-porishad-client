import './ContactForm.css'
import contactArt from '../../assets/contactArt.png'

const ContactForm = () => {
    return (
        <section className="container bg-white p-5 rounded-3">
            <div className="row align-items-center ">
                <div className="col-md-7 text-center">
                    <img width="90%" src={contactArt} alt="image" />
                </div>
                <div className="col-md-5 mt-4">
                <div >
                    <label className="form-label" htmlFor="name">নাম</label>
                    <input className="form-control p-3" type="text" name="name" id="name" />

                    <label className="form-label mt-3" htmlFor="name">ইমেইল</label>
                    <input className="form-control  p-3" type="email" name="email" id="email" />

                    <label className="form-label  mt-3" htmlFor="name">ফোন</label>
                    <input className="form-control  p-3" type="tel" name="phone" id="phone" />

                    <label className="form-label  mt-3" htmlFor="name">বিবরণ</label>
                    <textarea className="form-control  p-3" name="message" id="message"></textarea>
                    <button className='button-one mt-3 '>প্রেরণ করুন</button>
                    
                </div>
                    
                </div>
 
        </div>
        </section>
       
    );
};

export default ContactForm;