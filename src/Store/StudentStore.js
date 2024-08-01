/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const StudentStore = create( (set) =>({
    Loader: false,

    ImageUploadRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/file-upload`, data);
        return res["data"];
    },

    

    StudenRegister: async(data) =>{
        set({Loader: true })
        const res = await axios.post(`http://localhost:5000/api/v1/student-register`, data, );
        set({Loader: false })
        return res["data"];
    },


}) )



export default StudentStore;