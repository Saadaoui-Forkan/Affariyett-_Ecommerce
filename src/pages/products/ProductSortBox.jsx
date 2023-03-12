const ProductSortBox = ({ setSortItem, sortItem,setCurrentPage }) => {

    // On Change Handler
    const onChangeHandler = (e) => {
      setSortItem(e.target.id);
      setCurrentPage(1);
    };
  
    return (
      <div className="product-sort-box">
        <div className="form-group">
          <input
            onChange={onChangeHandler}
            value={sortItem}
            type="radio"
            name="sort"
            id="noSort"
          />
          <label htmlFor="noSort">No Sort</label>
        </div>
        <div className="form-group">
          <input
            onChange={onChangeHandler}
            value={sortItem}
            type="radio"
            name="sort"
            id="low"
          />
          <label htmlFor="low"> From Lowest To Highest</label>
        </div>
        <div className="form-group">
          <input
            onChange={onChangeHandler}
            value={sortItem}
            type="radio"
            name="sort"
            id="high"
          />
          <label htmlFor="high">From Highest To Lowest</label>
        </div>
      </div>
    );
  };

  export default ProductSortBox;