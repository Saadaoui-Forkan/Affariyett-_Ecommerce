import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../../components/rating/Rating'
import './SingleProduct.css'
function SingleProductPage() {

  const {id} = useParams()

  const [product,setProduct] = useState(null)

  async function fetchProductById(productId) {
    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`)
      const data = await response.json()
      // console.log(data)
      setProduct(data)

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    fetchProductById(id);
  }, [id])

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
