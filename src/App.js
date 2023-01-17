import './App.css';
import Banner from './components/banner/Banner';
import Categories from './components/category/Categories';
import Header from './components/header/Header'
import SpecialOffers from './special-offers/SpecialOffers';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <SpecialOffers />
    </div>
  );
}

export default App;
