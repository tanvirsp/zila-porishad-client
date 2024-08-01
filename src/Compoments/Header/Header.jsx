import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_white.png';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();

    return (
        <header>
           <div className='container d-flex justify-content-between align-items-center'>
            <div className='logo'>
                    <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul className='d-flex justify-content-between align-items-center'>
                    <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/">হোম</NavLink>
                    <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/courses">আমাদের কোর্স সমূহ</NavLink>
                    {/* <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/about">আমাদের সম্পর্কে</NavLink> */}
                    {/* <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/result">ফলাফল</NavLink> */}
                    <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/verify-result">ফলাফল ভেরিফাই</NavLink>
                    <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/contact">যোগাযোগ</NavLink>
                    <button onClick={()=>navigate("/registration")} className='button-one'>আবেদন করুন</button>
                </ul>
            </nav>
           </div>
        </header>
    );
};

export default Header;