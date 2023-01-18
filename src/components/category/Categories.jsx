import {useRef,useEffect,useState} from 'react'
import './Categories.css'
import { motion } from 'framer-motion'
import { categories } from '../../data/categories'
import HeadingTitle from '../heading-title/HeadingTitle'


function Categories() {

    const carouselRef = useRef()
    const [width, setWidth] = useState(0)
    useEffect (() => {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }, [])
    
  return (
    <div className='categories'>
        <HeadingTitle 
            title = "CATEGORIES"
            text = "Some Of Our Exclusive Collection, You May Like"
            arrowContainer = {false}
        />
        <motion.div className='carousel' 
            ref = { carouselRef }
            whileTap = {{cursor : "grabbing"}}
        >
            <motion.div className='category-carousel'
                drag = "x"
                dragConstraints = {{right: 0, left: -1*width }}
            >
                {
                    categories.map(category => (
                        <motion.div className='category' key={category.id}>
                            <img src={category.image} alt={category.title} />
                            <p>{category.title}</p>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Categories