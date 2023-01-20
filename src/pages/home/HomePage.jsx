import React from 'react'
import Banner from '../../components/banner/Banner'
import Brands from '../../components/brands/Brands'
import Categories from '../../components/category/Categories'
import Carrousel from '../../components/slider/Slider'
import SpecialOffers from '../../components/special-offers/SpecialOffers'
import { products } from '../../data/products'

function HomePage() {

    const laptops = products.filter(item  => item.isLaptop === true)
    const mobiles = products.filter(item  => item.isLaptop === false)

  return (
    <div>
      <Banner />
      <Categories />
      <SpecialOffers />
      <Carrousel data = {laptops} isLaptop = {true} />
      <Carrousel data = {mobiles} isLaptop = {false} />
      <Brands />
    </div>
  )
}

export default HomePage
