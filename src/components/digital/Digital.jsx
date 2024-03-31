import React from 'react'
import "./digital.css"
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
const Digital = () => {
    // const settings = {
    //     dots: true, // Show navigation dots
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1, // Number of slides to show at once
    //     slidesToScroll: 1
    // };
    
    return (
        <>
            <section className="position-relative">
            <div className="container m-10">
                <div className="row">
                {/* <Slider {...settings}> */}
                    <div className="review-content position-relative">
                    <FaQuoteLeft className='icons'/>
                            <div className="swiper-slide text-center d-flex justify-content-center">
                                <div className="review-item col-md-10">
                                    <i className="icon icon-review"></i>
                                    <blockquote>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                                    <div className="rating">
                                    <IoMdStar className="star" />
                                    <IoMdStar className="star" />
                                    <IoMdStar  className="star"/>
                                    <IoMdStar  className="starIcons"/>
                                    <IoStarHalfSharp  className="start"/>
                                    </div>
                                    <div className="author-detail">
                                        <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 content */}
                            {/* <div className="swiper-slide text-center d-flex justify-content-center">
                                <div className="review-item col-md-10">
                                    <i className="icon icon-review"></i>
                                    <blockquote>“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                                    <div className="rating"></div>
                                    <div className="author-detail">
                                        <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                                    </div>
                                </div>
                            </div> */}
                        
                    </div>
                    {/* </Slider> */}
                </div>
            </div>
        </section>
        </>
    )
}

export default Digital