import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'

import React from 'react'

function Banner() {

  const bannerImgs = [
    {
      id : 1,
      src : 'images/banner/img-1.jpg'
    },
    {
      id : 2,
      src : 'images/banner/img-2.jpg'
    },
    {
      id : 3,
      src : 'images/banner/img-3.jpg'
    }
  ]

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="banner">
      <div className="banner-title">
        <p>Free delivery from 70 $</p>
        <p>A question ? contact our Customer Service at:</p>
        <p>12 345 678</p>
      </div>
      <div className="slider">
      <Slider {...settings} >
        {
          bannerImgs.map(banner => (
            
              <div className="banner-container" key={banner.id}>
                <img src={banner.src} alt="" className="banner-img"/>
              </div>
          
          ))
        }
        </Slider>
      </div>
    </div>
  )
}

export default Banner