import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_white.png';
import './Header.css';

const Header = () => {
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
                    <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/about">আমাদের সম্পর্কে</NavLink>
                    <NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/contact">যোগাযোগ</NavLink>
                    <button className='button-one'>লগইন</button>
                </ul>
            </nav>
           </div>
        </header>
    );
};

export default Header;