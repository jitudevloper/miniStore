import React from 'react'
import "./footer.css"
import mainLogo from "../../image/main-logo.png"
// import SubFooter from './SubFooter'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import SubFooter from './SubFooter';
const Footer = () => {
    return (
        <>
            <footer  className="overflow-hidden footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-top-area">
                            <div className="row d-flex flex-wrap justify-content-between">
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <img src={mainLogo} alt="logo" />
                                        <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                                        <div className="social-links">
                                            <ul className="d-flex list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <TiSocialFacebook className="facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <FaInstagram className='insta' /> 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <LuTwitter className='twitter'/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <FaLinkedinIn className='linkedin'/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <CiYoutube className='youtube' />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 pb-3">
                                    <div className="footer-menu text-uppercase">
                                        <h5 className="widget-title pb-2">Quick Links</h5>
                                        <ul className="menu-list list-unstyled text-uppercase">
                                            <li className="menu-item pb-2">
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">About</a>
                                            </li>
                                            <li className="menu-item pb-2 ">
                                                <a href="#">Shop</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Blogs</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu text-uppercase">
                                        <h5 className="widget-title pb-2">Help & Info Help</h5>
                                        <ul className="menu-list list-unstyled">
                                            <li className="menu-item pb-2">
                                                <a href="#">Track Your Order</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Returns Policies</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Shipping + Delivery</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Faqs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu contact-item">
                                        <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                                        <p>Do you have any queries or suggestions? <a href="mailto:" className="yourInfo">yourinfo@gmail.com</a>
                                        </p>
                                        <p>If you need support? Just give us a call. <a href="" className='yourInfo'>+55 111 222 333 44</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </footer>

<div>
    <SubFooter/>
</div>
        </>
    )
}

export default Footer