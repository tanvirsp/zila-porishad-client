import { Table } from "react-bootstrap";


const ResultPage = () => {
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
            
        </section>
    );
};

export default ResultPage;