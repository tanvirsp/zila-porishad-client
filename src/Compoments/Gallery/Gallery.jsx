import './Gallery.css';
import one from '../../assets/gallery/1.jpg';
import two from '../../assets/gallery/2.jpg';
import three from '../../assets/gallery/3.jpg';
import four from '../../assets/gallery/4.jpg';
import five from '../../assets/gallery/5.jpg';
import six from '../../assets/gallery/6.jpg';


import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Gallery = () => {


    const onInit = () => {
        console.log('lightGallery has been initialized');
    };


    return (
        <section className='my-5'>
              <div className=' mb-3 d-flex justify-content-between align-items-center'>
                    <h3 className="section-title ">ফটো গ্যালারি</h3>
                    <button className='button-one'>VIEW MORE</button>
              </div>
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
               
                <a href={one}>
                    <img  className='img-responsive ' alt="img1" src={one} />
                    
                </a>
                <a href={two}>
                    <img className='img-responsive' alt="img2" src={two} />
                </a>
                <a href={three}>
                    <img className='img-responsive' alt="img2" src={three} />
                </a>
                <a href={four}>
                    <img className='img-responsive' alt="img2" src={four} />
                </a>
                <a href={five}>
                    <img className='img-responsive' alt="img2" src={five} />
                </a>
                <a href={six}>
                    <img className='img-responsive' alt="img2" src={six} />
                </a>
              
            </LightGallery>




              {/* <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className='img-gallery'>
                                <img src={one} alt="images" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='img-gallery'>
                                <img src={two} alt="images" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='img-gallery'>
                                <img src={three} alt="images" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='img-gallery'>
                                <img src={four} alt="images" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='img-gallery'>
                                <img src={five} alt="images" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='img-gallery'>
                                <img src={six} alt="images" />
                            </div>
                        </div>
                    </div>
              </div> */}

        </section>
    );
};

export default Gallery;