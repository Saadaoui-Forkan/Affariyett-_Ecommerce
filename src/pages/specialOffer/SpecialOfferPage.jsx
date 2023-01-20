import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { specialOffers } from '../../data/special-offers'
import Rating from '../../components/rating/Rating'
import './SpecialOffer.css'

function SpecialOfferPage() { 
  const {param} = useParams()
  const product = specialOffers.find(prod => prod.id === +param) // parseInt(param) === +(param)

  const { images, title, rating, reviews, price, discount } = product;

  const [imageIndex, setImageIndex] = useState(0);

  const calculatedDiscount = price - (discount * price) / 100;

  return (
    <>
      <div className="special-offers-page">
        <div className="special-offers-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt=""
            className="special-offers-page-img"
          />
          <div className="special-offers-page-select">
            {images.map((img, index) => (
              <img
                onClick={() => setImageIndex(index)}
                className="select-img"
                key={index}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="special-offers-page-info">
          <h3 className="special-offers-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offers-price">
            <b className="special-offers-item">${price}</b>
            <b className="special-offers-final-price-item">
              ${calculatedDiscount}
            </b>
          </div>
          <div className="special-offers-add-to-cart">
              <div>Quantity</div>
              <input type="number" min="1" max="10" />
              <button className="add-to-cart-btn">Add To Cart</button>
            </div>
        </div>
      </div>

      <div className="product-description">
        Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. 
        Explicabo optio, 
        eveniet in maxime incidunt cumque 
        vel laborum recusandae, 
        deserunt earum illum neque molestiae 
        error praesentium ipsa. Corporis amet 
        labore voluptatibus dignissimos debitis 
        pariatur cum deserunt id dicta iste, 
        suscipit harum asperiores quia illo ducimus 
        placeat dolorem fugit provident accusamus. 
        Molestias.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Fuga, eligendi id veritatis architecto labore 
        adipisci ducimus iusto est expedita necessitatibus.
      </div>
    </>
  )
}

export default SpecialOfferPage
