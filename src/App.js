import './App.css';
import Banner from './components/banner/Banner';
import Categories from './components/category/Categories';
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}

export default App;
