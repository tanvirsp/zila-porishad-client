import './AboutUs.css'
import thumbnail from '../../assets/video-thumbnail.png';
import Lottie from "lottie-react";

import play from "../../assets/Animation - 1718145000122.json"

const AboutUs = () => {
    return (
        <section className="about-section">
             <div className="row">
                <div className="col-md-7">
                    <h3  className='section-title text-start'>এক নজরে জেলা পরিষদ</h3>
                    <table className='table '>
                        <tr>
                            <td>জামালপুর জেলা পরিষদ গঠনের তারিখ </td>
                            <td>২১/০১/১৯৭৯ খ্রিঃ </td>
                        </tr>
                        <tr>
                            <td>জেলার আয়তন </td>
                            <td>২০৩১.৯৮ বর্গকিলোমিটার</td>
                        </tr>
                        <tr>
                            <td>মোট জমির পরিমান</td>
                            <td>৩২.৬৫একর</td>
                        </tr>
                        <tr>
                            <td> ডাকবাংলো </td>
                            <td> ১০টি  </td>
                        </tr>
                        <tr>
                            <td> খেয়াঘাট  </td>
                            <td> ১৭টি  </td>
                        </tr>
                        <tr>
                            <td>পুকুর  </td>
                            <td> ০৮টি  </td>
                        </tr>
                        <tr>
                            <td> যাত্রীছাউনী </td>
                            <td>  ৪টি </td>
                        </tr>
                        <tr>
                            <td> অডিটরিয়াম </td>
                            <td> ১টি  </td>
                        </tr>
                        <tr>
                            <td> অবসর ও বিনোদন কেন্দ্র (পিকনিক স্পট) </td>
                            <td> ১টি  </td>
                        </tr>
                        <tr>
                            <td> আ:জেলা বাসটার্মিনাল </td>
                            <td> ১টি  </td>
                        </tr>

                    </table>

                </div>
                <div className="col-md-5">
                        <div  className='video-thumbnail'>
                            <img  src={thumbnail} alt="" />
                            <Lottie animationData={play} loop={true} />
                        </div>
                    

                </div>
             </div>
        </section>
    );
};

export default AboutUs;