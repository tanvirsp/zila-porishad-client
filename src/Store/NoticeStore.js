/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const NoticeStore = create( (set) =>({
    

    Loading: false,

    NoticeList: null,
    NoticeListRequest: async()=>{
        set({NoticeList: null});
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/notice-list`);
        if(res.data.status === "success"){
            set({NoticeList: res.data.data })
        }
    },

    DetailsNotice:  null,
    DetailsNoticeRequest: async(id)=>{
        set({DetailsNotice: null, Loading: true });
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/notice/${id}`);
        if(res.data.status === "success"){
            set({DetailsNotice: res.data.data, Loading: false  })
        }
    },


   





}) )



export default NoticeStore;