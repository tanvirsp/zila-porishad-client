import './AboutUs.css'
import Lottie from "lottie-react";

import play from "../../assets/Animation - 1718145000122.json"
import HomePageStore from '../../Store/HomePageStore';
import { useEffect, useState } from 'react';
import VideoModal from './VideoModal';
import SliderSkeleton from '../../Skeletons/SliderSkeleton';

const AboutUs = () => {

    const {Information, InformationRequest} = HomePageStore();

    const [modalShow, setModalShow] = useState(false);
    const [url, setUrl] = useState("");


    useEffect( ()=>{
        (async()=>{
            Information === null && InformationRequest()
        })()
    } ,[])


    const handleModal = (url)=>{
        setModalShow(true);
        setUrl(url)
    }

  if( Information === null){
    return <div className="about-section"> <div className='row'> <SliderSkeleton />  </div> </div>
  }
    

    return (
        <section className="about-section">
             <div className="row">
                <div className="col-md-7">
                    <h3  className='section-title text-start mb-3'>এক নজরে জেলা পরিষদ</h3>
                    <table className='table '>
                        <tbody>
                            <tr>
                                <td>জামালপুর জেলা পরিষদ গঠনের তারিখ </td>
                                <td>{Information?.estiblishDate} </td>
                            </tr>
                            <tr>
                                <td>জেলার আয়তন </td>
                                <td>{Information?.area} </td>
                            </tr>
                            <tr>
                                <td>মোট জমির পরিমান</td>
                                <td>{Information?.amountOfLand} </td>
                            </tr>
                            <tr>
                                <td> ডাকবাংলো </td>
                                <td>{Information?.dakbanglo} </td>
                            </tr>
                            <tr>
                                <td> খেয়াঘাট  </td>
                                <td>{Information?.kheyegat} </td>
                            </tr>
                            <tr>
                                <td>পুকুর  </td>
                                <td>{Information?.pond} </td>
                            </tr>
                            <tr>
                                <td> যাত্রীছাউনী </td>
                                <td>{Information?.passengerCabin} </td>
                            </tr>
                            <tr>
                                <td> অডিটরিয়াম </td>
                                <td>{Information?.oditorian} </td>
                            </tr>
                            <tr>
                                <td> অবসর ও বিনোদন কেন্দ্র (পিকনিক স্পট) </td>
                                <td>{Information?.picnicSpot} </td>
                            </tr>
                            <tr>
                                <td> আ:জেলা বাসটার্মিনাল </td>
                                <td>{Information?.picnicSpot} </td>
                            </tr>
                        </tbody>

                    </table>

                </div>
                <div className="col-md-5">
                        <div  className='video-thumbnail'>
                        <img className='slider-img' crossOrigin ="anonymous"  src={`${import.meta.env.VITE_URL}/${Information?.thumbnail}`} alt="Picture" />
                            <Lottie onClick={()=>handleModal(Information.video)} animationData={play} loop={true} />
                        </div>
                    

                </div>
             </div>
             <VideoModal url={url} show={modalShow}  onHide={() => setModalShow(false)} />
        </section>
    );
};

export default AboutUs;