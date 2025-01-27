/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const ResultStore = create( (set) =>({
    LoadingSpinner: false,

    ResultData: null,
    ResultDataRequest: async(regNumber) =>{
        set({ResultData: null })
        set({LoadingSpinner: true })
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/result/${regNumber}`);
        if(res.data["status"] ==="success"){
            set({ResultData: res.data['data'][0]});
            set({LoadingSpinner: false })
        }
        return res["data"];
    },


}) )



export default ResultStore;