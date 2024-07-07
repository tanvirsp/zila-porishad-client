import './Footer.css';
import logo from '../../assets/logo_white.png';

import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>সেবা সমূহ</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#"> সেবার তালিকা </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> কী সেবা কিভাবে পাবেন </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> সিটিজেন চার্টার </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> সেবাকুঞ্জ </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>তথ্য অধিকার</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#"> তথ্য প্রদানকারি কর্মকর্তা </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> স্বপ্রণোদিত তথ্য প্রকাশ নির্দেশিকা</a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> কর্মকর্তা ও আবেদনকারির নির্দেশিকা </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> অনিক ও আপিল কর্মকর্তা </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4> বিভিন্ন বাতায়ন </h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#"> মন্ত্রণালয়ের বাতায়ন </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> অধিদপ্তরের বাতায়ন </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> জেলা বাতায়ন </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> জাতীয় বাতায়ন </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>আমাদের বিষয়ে</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#"> আমাদের বিষয়ে </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> কর্মকর্তাবৃন্দ </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> কর্মচারীবৃন্দ </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> সাংগঠনিক কাঠামো </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>আইন ও বিধি</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#"> জেলা পরিষদ আইন </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> বিধিমালা </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> নীতিমালা </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> প্রজ্ঞাপন ও পরিপত্র </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4> কর্মসম্পাদন ব্যবস্থাপনা </h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#"> প্রজ্ঞাপন/পরিপত্র/নীতিমালা </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> চুক্তিসমূহ </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> চুক্তির কাঠামো </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> এপিএমস </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4> প্রকল্প তালিকা </h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#"> চলমান প্রকল্প </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> বাস্তবায়িত প্রকল্প </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> বাস্তবায়নাধীন প্রকল্প </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> প্রকল্প পরিদর্শন </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>প্রশিক্ষণ ও পরামর্শ</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a href="#">চলমান প্রশিক্ষণ </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> সমাপ্ত প্রশিক্ষণ </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> প্রশিক্ষণ সংক্রান্ত পরামর্শ </a></li>
                                <li>  <IoMdArrowDropright /><a href="#"> যোগাযোগ </a></li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <div className='logo'>
                            <img src={logo} alt="logo" />
                    </div>
                    <p className='developed'>Design & Devopment: <b>JamalpurIT</b></p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;