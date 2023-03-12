import React,{useEffect, useState} from 'react'
import ProductList from './ProductList'
import ProductSidebar from './ProductSidebar'
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import './products.css'
import Pagination from './Pagination';

function ProductsPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  // Filter by Category (Laptop or Mobile)
  const [filterItem, setFilterItem] = useState('all')
  const filterProduct = products.filter(item => (
    filterItem === 'laptop' 
    ? item.isLaptop === true 
    : filterItem === 'mobile' 
    ? item.isLaptop === false
    : item
  ))
  // Sort Products By Price
  const [sortItem, setSortItem] = useState('noSort')
  const sortedProducts = 
    sortItem === "low" ? filterProduct.sort((a,b) => a.price - b.price)
    : sortItem === "hight" ? filterProduct.sort((a, b) => b.price - a.price)
    : filterProduct.sort((a,b) => a.title > b.title ? 1 : -1) 

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 3;
  const pages = Math.ceil(sortedProducts.length/productPerPage);
  const startIndex = (currentPage - 1) * productPerPage;
  const finalIndex = currentPage * productPerPage
  const orderedProducts = sortedProducts.slice(startIndex,finalIndex)
  
  return (
    <>
      <div className='products'>
        <ProductSidebar
          filterItem = {filterItem}
          setFilterItem = {setFilterItem}
          sortItem = {sortItem}
          setSortItem = {setSortItem}
        />
        <ProductList
          products = {orderedProducts}
        />
      </div>
      <Pagination
        pages = {pages}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      />
    </>
  )
}

export default ProductsPage
