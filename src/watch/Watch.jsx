import React from 'react';
import { watch } from '../DummyData';
import CompanyCard from '../components/company-services/companyCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Watch = () => {
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
                            <h2 class="display-7 text-dark text-uppercase">Watch Products</h2>
                            <div class="btn-right">
                                <a href="shop.html" class="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
                            </div>
                        </div>
                        <Slider {...settings}>
                            <CompanyCard image={watch[0]?.imgUrl} text={watch[0]?.name} price={watch[0]?.price1} />
                            <CompanyCard image={watch[1]?.imgUrl} text={watch[1]?.name} price={watch[1]?.price1} />
                            <CompanyCard image={watch[2]?.imgUrl} text={watch[2]?.name} price={watch[2]?.price1} />
                            <CompanyCard image={watch[3]?.imgUrl} text={watch[3]?.name} price={watch[3]?.price1} />
                            <CompanyCard image={watch[4]?.imgUrl} text={watch[4]?.name} price={watch[4]?.price1} />
                        </Slider>
                    </div>
                </div>
                <div class="swiper-pagination position-absolute text-center"></div>
            </section>
    </>
  );
};

export default Watch;
