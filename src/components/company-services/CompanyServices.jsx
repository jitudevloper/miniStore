import React from 'react'
import "./companyServices.css"
import { company } from '../../DummyData'
import CompanyCard from './companyCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const CompanyServices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <section id="mobile-products" class="product-store position-relative padding-large no-padding-top">

                <div class="container">
                    <div class="row">
                        <div class="display-header d-flex justify-content-between pb-3">
                            <h2 class="display-7 text-dark text-uppercase">Mobile Products</h2>
                            <div class="btn-right">
                                <a href="shop.html" class="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
                            </div>
                        </div>
                        <Slider {...settings}>
                            <CompanyCard image={company[0]?.imgUrl} text={company[0]?.name} price={company[0]?.price} />
                            <CompanyCard image={company[1]?.imgUrl} text={company[1]?.name} price={company[1]?.price} />
                            <CompanyCard image={company[2]?.imgUrl} text={company[2]?.name} price={company[2]?.price} />
                            <CompanyCard image={company[3]?.imgUrl} text={company[3]?.name} price={company[3]?.price} />
                            <CompanyCard image={company[4]?.imgUrl} text={company[4]?.name} price={company[4]?.price} />
                        </Slider>
                    </div>
                </div>
                <div class="swiper-pagination position-absolute text-center"></div>

            </section>
        </>
    )
}

export default CompanyServices