import React from 'react';
import './banner.css'; // Import your custom CSS file
import { service } from '../../DummyData';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>

      <section id="billboard" className="position-relative overflow-hidden">

        <div className="swiper main-swiper billboard">
          <Slider {...settings}>
            {service.map((val) => {
              return (
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="container">

                      <div className="row d-flex align-items-center">

                        <div className="col-md-6">

                          <div className="banner-content">
                            <h1 className="display-2 text-uppercase text-dark pb-5">{val.text}</h1>
                            <button> <a href="shop.html" className="btn btn-large btn-dark text-uppercase btn-rounded-none">Shop Product</a></button>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="image-holder">
                            <img src={val.imgUrl} alt="banner" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
</Slider>
        </div>
      
    </section >
    
    </>
  );
}

export default Banner;
