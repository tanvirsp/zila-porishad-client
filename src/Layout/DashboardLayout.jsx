import './DashboardLayout.css';
import { FaBarsStaggered } from "react-icons/fa6";
import avater from '../assets/avater.jpg'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DashboardLayout = () => {
    const [showSideBar, setShowSideBar] = useState(true);

    const toggleSidebar = ()=>setShowSideBar(!showSideBar);

    
    return (
        <div>
            <section className="top-bar">
                <div className='d-flex align-items-center'>
                    <FaBarsStaggered onClick={toggleSidebar} className='bar' />
                    <h5>জেলা পরিষদ, জামালপুর</h5>
                </div>
                <div>
                    <img className='avater' src={avater} alt="avater" />
                </div>
            </section>
            <section>
                <div className={showSideBar ? "side-nav-open ": "side-nav-close "}>
                    <ul className='nav-items'>
                        <li> <NavLink to="/dashboard" className='nav-link'>  Dashboard</NavLink> </li>
                      
                    </ul>
                </div>
                <div className={showSideBar ? "content ": "content-expand "}>
                    <h2>Content Area</h2>

                </div>



            </section>
            
        </div>
    );
};

export default DashboardLayout;