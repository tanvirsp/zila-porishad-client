
import { Outlet } from 'react-router-dom';
import Header from '../Compoments/Header/Header';
import Footer from '../Compoments/Footer/Footer';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <>
            <Header></Header>
                <div>
                    <Outlet />
                    <Toaster  position="top-center"  reverseOrder={false}/>
                </div>
            <Footer />
        </>
    );
};

export default MainLayout;