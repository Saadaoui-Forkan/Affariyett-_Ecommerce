import React,{ useRef } from 'react'
import './Slider.css'
import HeadingTitle from '../heading-title/HeadingTitle'
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';

function Carrousel({data,isLaptop}) {

    const carrouselRef = useRef()

    const handlePrevClick = () => {
        const box = carrouselRef.current
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
    }

    const handleNextClick = () => {
        const box = carrouselRef.current
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
    }

  return (
    <div className='slider-container'>
        {
            isLaptop ? (
                <HeadingTitle 
                    title= "New Laptops"
                    arrowContainer = {true}
                    handlePrevClick = { handlePrevClick }
                    handleNextClick = { handleNextClick }
                    data = { data }
                />
            ) : (
                <HeadingTitle 
                    title = "New Mobiles"
                    arrowContainer = {true}
                    handlePrevClick = { handlePrevClick }
                    handleNextClick = { handleNextClick }
                    data = { data }
                />
            )
        }

        <div className="slider-wrapper" ref={carrouselRef}>
            {data.map((item) => (
            <Link to={`/singleProduct/${item.id}`}  className="slide" 
                key={item.id} 
            >
                <img className="slide-image" src={item.image} alt={item.title} />
                <h3 className="slide-title">{item.title}</h3>

                <Rating 
                    rating={item.rating} 
                    reviews={item.reviews} 
                />

                <div className="slide-price">${item.price}</div>
            </Link>
            ))}
        </div>
    </div>
  )
}

export default Carrousel