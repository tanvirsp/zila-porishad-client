/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const StudentStore = create( (set) =>({
    Loader: false,
    ImageLoader: false,

    ImageUploadRequest: async(data) =>{
        set({ImageLoader: true})
        const res = await axios.post(`${import.meta.env.VITE_URL}/api/v1/file-upload`, data);
        set({ImageLoader: false})
        return res["data"];
    },

    
    StudenRegister: async(data) =>{
        set({Loader: true })
        const res = await axios.post(`${import.meta.env.VITE_URL}/api/v1/student-register`, data, );
        set({Loader: false })
        return res["data"];
    },

    IsAlreadyApplied: async(number) =>{
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/check-birth-certificate/${number}` );
        return res["data"]
    },



}) )



export default StudentStore;