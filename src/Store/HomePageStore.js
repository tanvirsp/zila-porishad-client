/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const HomePageStore = create( (set) =>({
    

    Loading: false,

    SliderList: null,
    SliderListRequest: async()=>{
        set({SliderList: null, Loading: true});
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/slider-list`);
        if(res.data.status === "success"){
            set({SliderList: res.data.data, Loading: false })
        }
    },

    Information:  null,
    InformationRequest: async()=>{
        set({Information: null, Loading: true });
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/information`);
        if(res.data.status === "success"){
            set({Information: res.data.data, Loading: false  })
        }
    },


    GalleryImages:  null,
    GalleryImagesRequest: async()=>{
        set({GalleryImages: null, Loading: true });
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/image-list`);
        if(res.data.status === "success"){
            set({GalleryImages: res.data.data, Loading: false  })
        }
    },


    PersonList:  null,
    PersonListRequest: async()=>{
        set({PersonList: null, Loading: true });
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/person-list`);
        if(res.data.status === "success"){
            set({PersonList: res.data.data, Loading: false  })
        }
    },

    LinkList:  null,
    LinkListRequest: async(id)=>{
        set({LinkList: null, Loading: true });
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/link-by-category`);
        if(res.data.status === "success"){
            set({LinkList: res.data.data, Loading: false  })
        }
    },



   


}) )



export default HomePageStore;