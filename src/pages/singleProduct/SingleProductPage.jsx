import React,{ useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../../components/rating/Rating'
import './SingleProduct.css'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProductById } from '../../redux/apiCalls/productApiCall'

function SingleProductPage() {

  const dispatch = useDispatch()
  const { product } = useSelector(state => state.product)

  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [id,dispatch])

  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">${product?.price}</div>
          <div className="product-add-to-cart">
            <div>Quantity</div>
            <input
              type="number"
              min="1"
              max="10"
            />
            <button className="add-to-cart-btn">
              Add To Cart  
            </button>
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
    </div>
  )
}

export default SingleProductPage
