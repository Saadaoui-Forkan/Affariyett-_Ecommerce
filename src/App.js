// import Slider from 'react-slick';
import './App.css';
import Banner from './components/banner/Banner';
import Categories from './components/category/Categories';
import Header from './components/header/Header'
import SpecialOffers from './special-offers/SpecialOffers';
import Carrousel from './components/slider/Slider';
import { products } from './data/products'

function App() {

  const laptops = products.filter(item  => item.isLaptop === true)
  const mobiles = products.filter(item  => item.isLaptop === false)

  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <SpecialOffers />
      <Carrousel data = {laptops} isLaptop = {true}/>
      <Carrousel data = {mobiles} isLaptop = {false}/>
    </div>
  );
}

export default App;
