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
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
  };

  return (
    <div className="banner">
      
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
  )
}

export default Banner