import React from 'react'
import "./services.css"
import { CiShoppingCart } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { BsCursorFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
const Services = () => {
  return (
    <>
     <section id="company-services" class="padding-large">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box d-flex">
              <div class="icon-box-icon pe-3 pb-3">
                {/* <svg class="cart-outline">
                  <use xlink:href="#cart-outline" />
                </svg> */}
                <CiShoppingCart  class="cart-outline"/>
              </div>
              <div className="icon-box-content">
                <h3 class="card-title text-uppercase text-dark">Free delivery</h3>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box d-flex">
              <div class="icon-box-icon pe-3 pb-3">
                {/* <svg class="quality">
                  <use xlink:href="#quality" />
                </svg> */}
                <FiSettings className='quality'/>
              </div>
              <div class="icon-box-content">
                <h3 class="card-title text-uppercase text-dark">Quality guarantee</h3>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box d-flex">
              <div class="icon-box-icon pe-3 pb-3">
                {/* <svg class="price-tag">
                  <use xlink:href="#price-tag" />
                </svg> */}
                <BsCursorFill className='price-tag'/>
                
              </div>
              <div class="icon-box-content">
                <h3 class="card-title text-uppercase text-dark">Daily offers</h3>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box d-flex">
              <div class="icon-box-icon pe-3 pb-3">
                {/* <svg class="shield-plus">
                  <use xlink:href="#shield-plus" />
                </svg> */}
                <RiSecurePaymentFill className='shield-plus'/>
              </div>
              <div class="icon-box-content">
                <h3 class="card-title text-uppercase text-dark">100% secure payment</h3>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services