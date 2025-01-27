import { useEffect } from "react";
import NoticeStore from "../../Store/NoticeStore";
import { useNavigate, useParams } from "react-router-dom";
import DetailsSkeleton from "../../Skeletons/DetailsSkeleton";

const NoticeDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {DetailsNoticeRequest, DetailsNotice} = NoticeStore();


    useEffect(()=>{
        (async()=>{
            await DetailsNoticeRequest(id)

        })()
    } ,[id])

    if(DetailsNotice  === null){
        return  <DetailsSkeleton />
    }



    return (
        <section >
            <div className="p-4 bg-dark rounded-3 d-flex justify-content-between ">
                <h4 className="text-white"><u>{DetailsNotice.title}</u></h4>
                <button onClick={() =>navigate("/notice")} className="btn btn-warning">ফিরে যান</button>
            </div>
            <div className="p-4 bg-white rounded-3 mt-3 text-center">
                <img  width="800px" crossOrigin ="anonymous" 
                src={`${import.meta.env.VITE_URL}/${DetailsNotice?.imageUrl}`} alt="Notice" />   

            </div>
   
        </section>
    );
};

export default NoticeDetails;