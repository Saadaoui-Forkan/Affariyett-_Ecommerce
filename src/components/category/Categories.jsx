import React from 'react'
import './Categories.css'
import { motion } from 'framer-motion'
import { categories } from '../../data/categories'

function Categories() {
  return (
    <div className='categories'>
        <motion.div className='category-carousel'>
            {
                categories.map(category => (
                    <motion.div className='category' key={category.id}>
                        <img src={category.image} alt={category.title} />
                        <b>{category.title}</b>
                    </motion.div>
                ))
            }
        </motion.div>
    </div>
  )
}

export default Categories