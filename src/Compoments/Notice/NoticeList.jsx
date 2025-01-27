import { useEffect } from "react";
import NoticeStore from "../../Store/NoticeStore";
import Empty from "../Empty";
import RowSkeleton from "../../Skeletons/RowSkeleton";
import { Table } from "react-bootstrap";
import { EnglishToBangla } from "../../Utility/EnglishToBangla";
import { useNavigate } from "react-router-dom";


const NoticeList = () => {
    const {NoticeListRequest, NoticeList} = NoticeStore();
    const navigate = useNavigate();


    useEffect(()=>{
        (async()=>{
            NoticeList === null && await NoticeListRequest()

        })()
    } ,[])



    return (
        <Table striped bordered hover className="text-center  align-middle" >
        <thead className="table-success ">
            <tr>
                <th>ক্রমিক নং</th>
                <th>বিষয়</th>
                <th>প্রকাশের তারিখ(Y-M-D)</th>
                <th>এ্যাকশন</th>
            </tr>
        </thead>
        <tbody>
           {
            NoticeList === null? <RowSkeleton /> :
            NoticeList.length === 0 ? <Empty /> :
            NoticeList.map( (item, index) =>{
                return (
                    <tr key={index}>
                        <td >{EnglishToBangla(index+1)}</td>
                        <td className="text-start">{item.title}</td>
                        <td>{EnglishToBangla(item.createdAt.split("T")[0])}</td>
                        <td><button onClick={() =>navigate(`/notice-details/${item._id}`)  }  className="btn btn-success">বিস্তারিত</button></td>
                    </tr>
                )
            })
            

           }
           
        </tbody>
        </Table>
    );
};

export default NoticeList;