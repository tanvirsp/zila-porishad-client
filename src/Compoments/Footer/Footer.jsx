import './Footer.css';
import logo from '../../assets/logo_white.png';

import { IoMdArrowDropright } from "react-icons/io";
import HomePageStore from '../../Store/HomePageStore';
import { useEffect } from 'react';

const Footer = () => {

    const {LinkList,  LinkListRequest } = HomePageStore();


    useEffect( ()=>{
        (async()=>{
            LinkList === null &&  LinkListRequest()
        })()
    } ,[])




    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    {
                        LinkList === null ? "Loading":
                        LinkList.length === 0 ? "No Link found": 
                        LinkList.map( (item, index) =>{
                            return (
                                <div className="col-sm-6 col-md-3   " key={index}>
                                    <div className='quick-links'>
                                        <h4>{item.links[0].category.title}</h4>
                                        <ul>
                                            {
                                                item.links.map ( (link, index2) => <li key={index2}> <IoMdArrowDropright /> <a target='_blank' rel="noreferrer" href={link.url}> {link.title} </a></li>)
                                            }
                                            
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }




                    {/* <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>তথ্য অধিকার</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/%E0%A6%A4%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BE-%E0%A6%A4%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%85%E0%A6%A7%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%86%E0%A6%87%E0%A6%A8,-%E0%A7%A8%E0%A7%A6%E0%A7%A6%E0%A7%AF-%E0%A6%85%E0%A6%A8%E0%A7%81%E0%A6%AF%E0%A6%BE%E0%A7%9F%E0%A7%80"> তথ্য প্রদানকারি কর্মকর্তা </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%A4%E0%A6%83%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A3%E0%A7%8B%E0%A6%A6%E0%A6%BF%E0%A6%A4-%E0%A6%A4%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B6-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%A8"> স্বপ্রণোদিত তথ্য প্রকাশ নির্দেশিকা</a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://bangladesh.gov.bd/site/view/policy"> কর্মকর্তা ও আবেদনকারির নির্দেশিকা </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/%E0%A6%85%E0%A6%A8%E0%A6%BF%E0%A6%95-%E0%A6%93-%E0%A6%86%E0%A6%AA%E0%A6%BF%E0%A6%B2-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BE"> অনিক ও আপিল কর্মকর্তা </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4> বিভিন্ন বাতায়ন </h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a target='_blank' rel="noreferrer" href="https://lgd.gov.bd"> মন্ত্রণালয়ের বাতায়ন </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://lgd.gov.bd"> অধিদপ্তরের বাতায়ন </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://www.jamalpur.gov.bd"> জেলা বাতায়ন </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://bangladesh.gov.bd/index.php"> জাতীয় বাতায়ন </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>আমাদের বিষয়ে</h4>
                            <ul>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/view/e-directory"> কর্মকর্তাবৃন্দ </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/view/StaffList"> কর্মচারীবৃন্দ </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/4w3d-%E0%A6%B8%E0%A6%BE%E0%A6%82%E0%A6%97%E0%A6%A0%E0%A6%A8%E0%A6%BF%E0%A6%95-%E0%A6%95%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%AE%E0%A7%8B"> সাংগঠনিক কাঠামো </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>আইন ও বিধি</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a target='_blank' rel="noreferrer" href="http://bdlaws.minlaw.gov.bd"> জেলা পরিষদ আইন </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="http://bdlaws.minlaw.gov.bd"> বিধিমালা </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://bangladesh.gov.bd/site/view/policy"> নীতিমালা </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://bangladesh.gov.bd/site/view/policy"> প্রজ্ঞাপন ও পরিপত্র </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4> কর্মসম্পাদন ব্যবস্থাপনা </h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/view/policy"> প্রজ্ঞাপন/পরিপত্র/নীতিমালা </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/uWlv-%E0%A6%9A%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9"> চুক্তিসমূহ </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/view/policy"> চুক্তির কাঠামো </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="http://gpmsnew.bcc.gov.bd/"> এপিএমস </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4> প্রকল্প তালিকা </h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a  target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/pQCx-%E0%A6%9A%E0%A6%B2%E0%A6%AE%E0%A6%BE%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA"> চলমান প্রকল্প </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/RG20-%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%AC%E0%A6%BE%E0%A7%9F%E0%A6%BF%E0%A6%A4-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA"> বাস্তবায়িত প্রকল্প </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/ABrK-%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%AC%E0%A6%BE%E0%A7%9F%E0%A6%A8%E0%A6%BE%E0%A6%A7%E0%A7%80%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA"> বাস্তবায়নাধীন প্রকল্প </a></li>
                                <li>  <IoMdArrowDropright /><a target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/ki8G-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8"> প্রকল্প পরিদর্শন </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='quick-links'>
                            <h4>প্রশিক্ষণ ও পরামর্শ</h4>
                            <ul>
                                <li> <IoMdArrowDropright /> <a  target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/9j6W-%E0%A6%9A%E0%A6%B2%E0%A6%AE%E0%A6%BE%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%A3">চলমান প্রশিক্ষণ </a></li>
                                <li>  <IoMdArrowDropright /><a  target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/9j6W-%E0%A6%9A%E0%A6%B2%E0%A6%AE%E0%A6%BE%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%A3"> সমাপ্ত প্রশিক্ষণ </a></li>
                                <li>  <IoMdArrowDropright /><a  target='_blank' rel="noreferrer" href="https://zp.jamalpur.gov.bd/bn/site/page/MCXc-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%A3-%E0%A6%B8%E0%A6%82%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4-%E0%A6%AA%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%B0%E0%A7%8D%E0%A6%B6"> প্রশিক্ষণ সংক্রান্ত পরামর্শ </a></li>
                                <li>  <IoMdArrowDropright /><a href="/contact"> যোগাযোগ </a></li>
                            </ul>
                        </div>
                    </div> */}


                </div>
                <div className="text-center">
                    <img className='footer-logo' src={logo} alt="logo" />
                </div>
            </div>

        </footer>
    );
};

export default Footer;