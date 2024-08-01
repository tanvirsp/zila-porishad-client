import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="contact-form">
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
    );
};

export default ContactForm;