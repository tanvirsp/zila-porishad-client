/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import axios from 'axios';

const CourseStore = create( (set) =>({
    

    CourseLoading: false,

    AllCourse: null,
    AllCourseRequest: async()=>{
        set({AllCourse: null});
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/courses`);
        if(res.data.status === "success"){
            set({AllCourse: res.data.data })
        }
    },

    ActiveCourseSession: null,
    ActiveCourseSessionRequest: async() =>{
        set({ActiveCourseSession: null, CourseLoading: true  })
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/active-course-session`);
        if(res.data.status === "success"){
            set({ActiveCourseSession: res.data.data, CourseLoading: false })
        }
    },

   






}) )



export default CourseStore;