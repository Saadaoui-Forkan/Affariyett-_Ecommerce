import React from 'react'
import Offer from './Offer'
import HeadingTitle from '../components/heading-title/HeadingTitle'
import './SpecialOffers.css'
import { specialOffers } from '../data/special-offers'

function SpecialOffers() {

    console.log('====================================');
    // console.log(specialOffers);
    console.log('====================================');
  return (
    <div className='special-offers'>
        <HeadingTitle 
            title = "Special Offers Today"
            text = "Great offers only for 24 hours"
            arrowContainer = {false}
        />
        <div className="special-offers-wrapper">
            {specialOffers.map((item) => (
            <Offer key={item.id} offer={item} />
            ))}
        </div>
    </div>
  )
}

export default SpecialOffers