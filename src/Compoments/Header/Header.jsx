/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_white.png';
import './Header.css';
import { FaBars  } from "react-icons/fa";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const toggler = ()=>{
        setShow(!show)
    }




    return (
        <header>
           <div className='container d-flex justify-content-between align-items-center'>
                <div className='logo'>
                    <NavLink  to="/"> <img src={logo} alt="logo" />  </NavLink>
                        
                </div>
                <nav className='d-flex align-items-center'>
                    <ul className='navbar'>
                        <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/">হোম</NavLink></li>
                        <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/verify-result">ফলাফল যাচাই</NavLink></li>
                        <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/notice">নোটিশ</NavLink></li>
                        <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/contact">যোগাযোগ</NavLink></li>
                        <li><button onClick={()=>navigate("/registration")} className='button-one'>আবেদন করুন</button></li>    
                    </ul>
                    <div className='bar'>
                        <FaBars onClick={toggler}  />
                    </div>
                </nav>
           </div>
           
           {/* Offcanvas Menu */}
           <div className={show? "mobile-menu-open": "mobile-menu-close"} >
                <div className='close-icon'>
                    <IoMdClose onClick={toggler} />
                </div>
                
                <ul className='mobile-menu-navbar'>
                    <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } onClick={toggler} to="/">হোম</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } onClick={toggler} to="/verify-result"  >ফলাফল যাচাই</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } onClick={toggler} to="/notice">নোটিশ</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } onClick={toggler}  to="/contact">যোগাযোগ</NavLink></li>
                    <li><NavLink className="button-one px-4 mt-2"  to="/registration"  onClick={toggler} >আবেদন করুন</NavLink></li>
                       
                </ul>
           
            </div>
        </header>
          
    );
};

export default Header;


// <header>
//            <div className='container d-flex justify-content-between align-items-center'>
//                 <div className='logo'>
//                     <NavLink  to="/"> <img src={logo} alt="logo" />  </NavLink>
                        
//                 </div>
//                 <nav className='d-flex align-items-center'>
//                     <ul className='navbar'>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/">হোম</NavLink></li>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/verify-result">ফলাফল ভেরিফাই</NavLink></li>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/notice">নোটিশ</NavLink></li>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/contact">যোগাযোগ</NavLink></li>
//                         <li><button onClick={()=>navigate("/registration")} className='button-one'>আবেদন করুন</button></li>    
//                     </ul>
//                     <div className='bar'>
//                         <FaBars  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"  />
//                     </div>
//                 </nav>
//            </div>
           
//            {/* Offcanvas Menu */}
//            <div className="offcanvas offcanvas-end "   id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//                 <div className="offcanvas-header">
//                     <button type="button" className="btn-close  btn-close-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                 </div>
//                 <div className="offcanvas-body ">
//                     <ul className='offcanvas-navbar'>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/">হোম</NavLink></li>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/verify-result"  >ফলাফল ভেরিফাই</NavLink></li>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  } to="/notice">নোটিশ</NavLink></li>
//                         <li><NavLink className={({ isActive}) => isActive ? "active" : ""  }  to="/contact">যোগাযোগ</NavLink></li>
//                         <li><button onClick={()=>navigate("/registration")} className='button-one mt-3 w-100 rounded-0'>আবেদন করুন</button></li>    
//                     </ul>
//                 </div>
//             </div>
//         </header>