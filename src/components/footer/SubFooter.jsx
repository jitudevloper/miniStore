import React from 'react'
import "./subFooter.css"
import DhlImage from '../../image/subfooter/dhl.png'
import shippingCard from '../../image/subfooter/shippingcard.png'
import Visa from '../../image/subfooter/visa.jpg'
import masterCard from '../../image/subfooter/mastercard.jpg'
import payPal from '../../image/subfooter/paypal.jpg'



const SubFooter = () => {
    return (
        <>

            <div id="footer-bottom">
                <div class="container">
                    <div class="row d-flex flex-wrap justify-content-between">
                        <div class="col-md-4 col-sm-6">
                            <div class="Shipping d-flex">
                                <p>We ship with:</p>
                                <div class="card-wrap ps-2">
                                    <img src={DhlImage} alt="visa" />
                                    <img src={shippingCard} alt="mastercard" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="payment-method d-flex">
                                <p>Payment options:</p>
                                <div class="card-wrap ps-5">
                                    <img src={Visa} alt="visa" />
                                    <img src={masterCard} alt="mastercard" />
                                    <img src={payPal} alt="paypal" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="copyright">
                                <p>© Copyright 2023 MiniStore. Design by <a href="https://templatesjungle.com/">TemplatesJungle</a> Distribution by <a href="https://themewagon.com">ThemeWagon</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubFooter