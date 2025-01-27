import { Table } from "react-bootstrap";


const ResultPage = () => {

const maxSize = 1 * 1024 * 1024;
//Uploading Image to server
const handleImage = async(e) =>{
    e.preventDefault();
    const curreSize = e.target.files[0].size
   if(curreSize >= maxSize ){
    alert ("size is Too big")
   }else {
    alert ("Perfect")
   }

    
    
};



    return (
        <section>
            <div className="container">
                <div className="page-title"> <h3>ফলাফল</h3></div>
                <Table striped bordered hover size="lg" className="w-75 m-auto">
                <thead>
                    <tr>
                        <th>ক্রমিক নং</th>
                        <th>রোল নাম্বার</th>
                        <th>রেজিস্ট্রেশন নাম্বার</th>
                        <th>প্রাপ্ত নম্বর</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>১</td>
                            <td>২৪৫১২৬</td>
                            <td>২২২৪৫৭</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>২</td>
                            <td>২৪৫১২৬</td>
                            <td>২২২৪৫৭</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>৩</td>
                            <td>২৪৫১২৬</td>
                            <td>২২২৪৫৭</td>
                            <td>A</td>
                        </tr>
                        
                    </tbody>
                </Table>




             
            </div>

            <input onChange={handleImage} name='profileImg' type="file" className='form-control'  />
            
        </section>
    );
};

export default ResultPage;