import './Gallery.css';
import one from '../../assets/gallery/1.jpeg';
import two from '../../assets/gallery/2.jpeg';
import three from '../../assets/gallery/3.jpeg';
import four from '../../assets/gallery/4.jpeg';


import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import HomePageStore from '../../Store/HomePageStore';
import { useEffect } from 'react';


const Gallery = () => {

    const {GalleryImages, GalleryImagesRequest } = HomePageStore();


    useEffect( ()=>{
        (async()=>{
            GalleryImages === null && GalleryImagesRequest()
        })()
    } ,[])

 

    const onInit = () => {
       
    };


    return (
        <section className='my-5 p-4 bg-white rounded-3'>
              <div className=' mb-3 d-flex justify-content-between align-items-center'>
                    <h3 className="section-title ">ফটো গ্যালারি</h3>
                    {/* <button className='button-one'>আরো দেখুন</button> */}
              </div>
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames={'gallery'}
            >
                {
                    GalleryImages === null ? "Loading" :
                    GalleryImages.length === 0 ? "No Emage Found" :
                    GalleryImages.map( (item, index) =>{
                        return (
                            <a key={index}  className='gallery__item'  href={`${import.meta.env.VITE_URL}/${item?.image}`} >
                                <img  className='img-responsive ' alt="Image"  src={`${import.meta.env.VITE_URL}/${item?.image}`} />  
                            </a>
                        )
                    } )
                }


               
               
              
            </LightGallery>





        </section>
    );
};

export default Gallery;