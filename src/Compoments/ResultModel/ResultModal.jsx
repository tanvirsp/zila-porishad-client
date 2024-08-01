import { Modal, Spinner, Table } from "react-bootstrap";
import ResultStore from "../../Store/ResultStore";
import logo from '../../assets/logo-black.png';


const ResultModal = (props) => {

    const {LoadingSpinner, ResultData} = ResultStore();

  if(LoadingSpinner){
    return <Spinner animation="border" variant="success" />
  }


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
                                <td className="ps-3">{ResultData?.sutdentName}</td>
                            </tr>
                            <tr>
                                <td className="text-end" >পিতার নাম :  </td>
                                <td className="ps-3">{ResultData?.fatherName}</td>
                            </tr>
                            <tr>
                                <td className="text-end">কোর্সের বিষয় :  </td>
                                <td className="ps-3">{ResultData?.course}</td>
                            </tr>
                            <tr>
                                <td className="text-end" >কোর্সের সময় :  </td>
                                <td className="ps-3">{ResultData?.duration} </td>
                            </tr>
                            <tr>
                                <td className="text-end">কোর্স সেশন :  </td>
                                <td className="ps-3">{ResultData?.session} </td>
                            </tr>
                            <tr>
                                <td className="text-end">প্রাপ্ত গ্রেড :  </td>
                                <td className="ps-3">{ResultData?.result} </td>
                            </tr>
                            <tr>
                                <td className="text-end">সার্টিফিকেট :  </td>
                                <td className="ps-3"><a target="_blank"  rel="noreferrer" href={`http://zp.jamalpurit.com/${ResultData?.certificate}`} >Click To View Certificate</a> </td>
                            </tr>
                        </tbody>

                    </Table>

                    
                    
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ResultModal;