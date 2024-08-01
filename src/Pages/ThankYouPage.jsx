import Lottie from "lottie-react";
import success  from '../assets/success.json'

const ThankYouPage = () => {
    return (
         <section>
            <div className="confirmation-message">
                <Lottie className="w-25 mx-auto" animationData= {success} loop={false} />
                <h2>ধন্যবাদ! </h2>
                <p>আপনার আবেদনটি গ্রহণ করা হয়েছে। পরবর্তীতে আপনার সাথে যোগাযোগ করা হবে।</p>

            </div>
         </section>
    );
};

export default ThankYouPage;