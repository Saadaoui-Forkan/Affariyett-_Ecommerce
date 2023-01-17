import React from 'react'
import './Rating.css'

function Rating({rating,reviews}) {
  return (
    <div className="rating-wrapper">
      <b className="rating">
        {rating} <i className="bi bi-star-fill"></i>
      </b>
      <span>{reviews} reviews</span>
    </div>
  )
}

export default Rating