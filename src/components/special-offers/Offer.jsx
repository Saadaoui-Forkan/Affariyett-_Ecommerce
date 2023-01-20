import React, {useState} from 'react'
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';

function Offer({offer}) {

  const { firstImage, secondImage, title, price, rating, discount,reviews,id } = offer;
  const calculatedDiscount = price - (discount * price) / 100;
  const [imgSrc, setImgSrc] = useState(firstImage)

  return (
    <div className="offer">
      <div className="offer-image-wrapper">
        <img
          onMouseEnter={() => setImgSrc(secondImage)}
          onMouseLeave={() => setImgSrc(firstImage)}
          src={imgSrc}
          alt="{title}"
          className="offer-image"
        />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="offer-price">
          <b className="offer-price-item">${price}</b>
          <b className="offer-final-price-item">
            ${calculatedDiscount}
          </b>
        </div>
         <Link to={`/specialOffer/${id}`} href='/'  className="offer-see-more">
          See More ...
         </Link>
      </div>
      <div className="offer-discount"> discount {discount}% </div>
    </div>
  )
}

export default Offer