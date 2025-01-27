import { useEffect } from 'react';
import './Notice.css';
import { IoMdArrowDropright } from "react-icons/io";
import NoticeStore from '../../Store/NoticeStore';
import { useNavigate } from 'react-router-dom';
import RowSkeleton from '../../Skeletons/RowSkeleton';
import Empty from '../Empty';
import NoticeSkeleton from '../../Skeletons/NoticeSkeleton';

const NoticeBoard = () => {

    const {NoticeListRequest, NoticeList} = NoticeStore();
    const navigate = useNavigate();


    useEffect(()=>{
        (async()=>{
            NoticeList === null && await NoticeListRequest()

        })()
    } ,[])

    return (
        <aside className='bg-white rounded-3 p-3 mb-4'>
            <h3 className='section-title text-center '>নোটিশ বোর্ড</h3>
            <ul className='notice-links'>
                {
                    NoticeList === null? <NoticeSkeleton /> :
                    NoticeList.length === 0 ? <Empty /> :
                    NoticeList.slice(0, 5).map( (item, index) => <li key={index} onClick={() =>navigate(`/notice-details/${item._id}`)  } >  <IoMdArrowDropright />{item.title}</li>) 
                }    
            </ul>
            {
                NoticeList == null ? "" :
                NoticeList.length === 0 ? "":
                <div className='text-center'>
                    <button onClick={() =>navigate(`/notice`)  }  className='btn btn-outline-dark mt-2'>আরো দেখুন</button>
                 </div>
            }
             
            
        </aside>
    );
};

export default NoticeBoard;