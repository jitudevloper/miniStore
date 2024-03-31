import React from 'react'
import "./shopOur.css"
import { shop } from '../../DummyData'
import { SlSocialInstagram } from "react-icons/sl";
const ShopOurInst = () => {
  const data = shop.map((val)=>{
    return(
      <figure class="instagram-item pe-2">
    <a href="#" class="image-link position-relative">
      <img src={val.imgUrl} alt="instagram" class="insta-image"/>
      <div class="icon-overlay position-absolute d-flex justify-content-center">
      <SlSocialInstagram className='instagram' />
      </div>
    </a>
  </figure>
    )
  })

  return (
  
    <>
     <section class="padding-large overflow-hidden no-padding-top">
      <div class="container">
        <div class="row">
          <div class="display-header text-uppercase text-dark text-center pb-3">
            <h2 class="display-7">Shop Our Insta</h2>
          </div>
          <div class="d-flex flex-wrap gap-2">
           {data}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ShopOurInst;