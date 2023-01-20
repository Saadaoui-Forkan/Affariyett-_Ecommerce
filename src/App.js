// import Slider from 'react-slick';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CartPage from './pages/cart/CartPage'
import ProductsPage from './pages/products/ProductsPage'
import SingleProductPage from './pages/singleProduct/SingleProductPage'
import SpecialOfferPage from './pages/specialOffer/SpecialOfferPage'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/cart' element = {<CartPage />} />
        <Route path='/products' element = {<ProductsPage/>} />
        <Route path='/singleProduct/:id' element = {<SingleProductPage />} />
        <Route path='/specialOffer/:param' element = {<SpecialOfferPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
