import React from 'react'
import './Brands.css'
import { brands } from '../../data/brands'
import HeadingTitle from '../heading-title/HeadingTitle'

function Brands() {
  return (
    <div>

        <HeadingTitle 
            title= "Shop By Brand"
            arrowContainer = {false}
        />

        <div className="brands-wrapper">
            {brands.map(brand => 
                <div key={brand.id} className="brand">
                    <img src={brand.image} alt="" className="brand-image" />
                </div>
                )}
        </div> 
      
    </div>
  )
}

export default Brands
