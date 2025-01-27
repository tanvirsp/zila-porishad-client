import { Modal, Table } from "react-bootstrap";
import ResultStore from "../../Store/ResultStore";
import logo from '../../assets/logo-black.png';
import FullScreenLoader from "../../Layout/FullScreenLoader";


const ResultModal = (props) => {

    const {LoadingSpinner, ResultData} = ResultStore();

  if(LoadingSpinner){
    return <FullScreenLoader />
  }

  console.log(ResultData);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title > 
                    <img height="95px" src={logo} alt="Logo" />  
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div  className="p-4 bg-white rounded-3">
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td className="text-end">শিক্ষার্থীর নাম :  </td>
                                <td className="ps-3">{ResultData?.studentDetails?.name}</td>
                            </tr>
                            <tr>
                                <td className="text-end" >পিতার নাম :  </td>
                                <td className="ps-3">{ResultData?.studentDetails?.fatherName}</td>
                            </tr>
                            <tr>
                                <td className="text-end" >মাতার নাম :  </td>
                                <td className="ps-3">{ResultData?.studentDetails?.motherName}</td>
                            </tr>
                            <tr>
                                <td className="text-end">কোর্সের বিষয় :  </td>
                                <td className="ps-3">{ResultData?.courseDetails?.name}</td>
                            </tr>
                            <tr>
                                <td className="text-end">কোর্স সেশন :  </td>
                                <td className="ps-3">{ResultData?.sessionsDetails?.session} </td>
                            </tr>
                            <tr>
                                <td className="text-end">প্রাপ্ত গ্রেড :  </td>
                                <td className="ps-3">{ResultData?.mark} </td>
                            </tr>
                        </tbody>

                    </Table>

                    
                    
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ResultModal;