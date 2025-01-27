/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const ScholarshipStore = create( (set) =>({
    Loader: false,

  
    ScholarshipRegister: async(data) =>{
        set({Loader: true })
        const res = await axios.post(`${import.meta.env.VITE_URL}/api/v1/scholarship-register`, data);
        set({Loader: false })
        return res["data"];
    },

    ActiveScholarshipSession: null,
    ActiveScholarshipSessionRequest: async() =>{
        set({ActiveScholarshipSession: null, Loader: true })
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/active-scholarship-session`);
        if(res.data.status === "success"){
            set({ActiveScholarshipSession: res.data.data, Loader: false })
        }
    },


    
    IsAlreadyApplied: async(number) =>{
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/is-applied/${number}` );
        return res["data"]
    }




}) )



export default ScholarshipStore;