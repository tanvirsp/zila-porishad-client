import './NoticeBoard.css';
import { IoMdArrowDropright } from "react-icons/io";

const NoticeBoard = () => {
    return (
        <aside className='notice-bg'>
            <h3 className='section-title text-center'>নোটিশ বোর্ড</h3>
            <ul className='notice-links'>
                <li> <a href="#"> <IoMdArrowDropright />২০২২-২০২৩ অর্থ বছরের বাজেট</a></li>
                <li> <a href="#"> <IoMdArrowDropright /> অফিস আদেশ</a></li>
                <li> <a href="#"> <IoMdArrowDropright /> কোটেশন বিজ্ঞপ্তি</a></li>
                <li> <a href="#">  <IoMdArrowDropright /> ফেরী/খেয়াঘাট ইজারার পুনঃ দরপত্র বিজ্ঞপ্তি</a></li>
               
            </ul>
            
        </aside>
    );
};

export default NoticeBoard;