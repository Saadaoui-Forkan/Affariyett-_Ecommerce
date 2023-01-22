import React,{ useEffect,useState } from 'react'
import Banner from '../../components/banner/Banner'
import Brands from '../../components/brands/Brands'
import Categories from '../../components/category/Categories'
import Carrousel from '../../components/slider/Slider'
import SpecialOffers from '../../components/special-offers/SpecialOffers'

function HomePage() {

  const [products, setProducts] = useState([])

  // fetch products from localhost 5000
  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:5000/products")
      const data = await response.json()
      // console.log(data)
      setProducts(data)

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  

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
