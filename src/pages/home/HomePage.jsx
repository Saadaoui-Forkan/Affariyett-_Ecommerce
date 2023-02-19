import React,{ useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import Brands from '../../components/brands/Brands'
import Categories from '../../components/category/Categories'
import Carrousel from '../../components/slider/Slider'
import SpecialOffers from '../../components/special-offers/SpecialOffers'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/apiCalls/productApiCall'

function HomePage() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  

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
