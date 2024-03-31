import React from 'react'
import "./companyServices.css"
import { FaShoppingCart } from "react-icons/fa";
// import company from "../../image/product/product-item1.jpg"
const companyCard = ({image,text,price}) => {
    return (
        <>
            <div class="swiper product-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="product-card position-relative">
                            <div class="image-holder">
                                <img src={image} alt="product-item" class="img-fluid" />
                            </div>
                            <div class="cart-concern position-absolute">
                                <div class="cart-button d-flex">
                                <FaShoppingCart class="cart-outlone" />
                                    <a href="#" class="btn btn-medium btn-black">Add to Cart</a>
                                </div>
                            </div>
                            <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                <h3 class="card-title text-uppercase">
                                    <a href="#">{text}</a>
                                </h3>
                                <span class="item-price text-primary">{price}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default companyCard