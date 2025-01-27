/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const UploadStore = create( (set) =>({
    ImageLoader: false,

    SingleImageUploadRequest: async(data) =>{
        set({ImageLoader: true})
        const res = await axios.post(`${import.meta.env.VITE_URL}/api/v1/file-upload`, data);
        set({ImageLoader: false})
        return res["data"];
    },
    

    MultiImageUploadRequest: async(data) =>{
        set({ImageLoader: true})
        const res = await axios.post(`${import.meta.env.VITE_URL}/api/v1/files-upload`, data);
        set({ImageLoader: false})
        return res["data"];
    },

}) )



export default UploadStore;