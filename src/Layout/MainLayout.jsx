
import { Outlet } from 'react-router-dom';
import Header from '../Compoments/Header/Header';
import Footer from '../Compoments/Footer/Footer';


const MainLayout = () => {
    return (
        <>
            <Header></Header>
                <div className='p-3'>
                    <Outlet />
                </div>
            <Footer />
        </>
    );
};

export default MainLayout;