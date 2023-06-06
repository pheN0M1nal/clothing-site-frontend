import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/product/ProductCard";
import { Spinner } from "../../components/Spinner";
import { getAllProducts } from "../../store/actions/productActions";

function Products() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    searchParam: "",
  });
  const [price, setPrice] = useState({
    minPrice: "",
    maxPrice: "",
  });

  const { minPrice, maxPrice } = price;
  const [ratingSearch, setRatingSearch] = useState({
    rating: "",
  });
  const { rating } = ratingSearch;
  const [searchList, setSearchList] = useState([]);
  const [gen, setGen] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const productsInfo = useSelector(state => state.allProducts);
  const { loading, allProducts } = productsInfo;
  const length =
    allProducts && allProducts.products
      ? Object.keys(allProducts.products).length
      : 0;

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [clear, setClear] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    setClear(formData.searchParam);
    dispatch(getAllProducts(formData.searchParam));
  };

  const priceSearch = e => {
    setPrice(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const searchRating = e => {
    setRatingSearch(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    const updatedSearchList = [...searchList];
    const ratingIndex = updatedSearchList.findIndex(item =>
      item.startsWith("Rating")
    );
    if (ratingIndex !== -1) {
      updatedSearchList[ratingIndex] = `Rating ${e.target.value} & Upto`;
    } else {
      updatedSearchList.push(`Rating ${e.target.value} & Upto`);
    }

    setSearchList(updatedSearchList);
  };

  const priceChange = e => {
    e.preventDefault();
    const updatedSearchList = [...searchList];
    const priceIndex = updatedSearchList.findIndex(item =>
      item.startsWith("Price from")
    );
    if (priceIndex !== -1) {
      updatedSearchList[
        priceIndex
      ] = `Price from ${price.minPrice} to ${price.maxPrice}`;
    } else {
      updatedSearchList.push(
        `Price from ${price.minPrice} to ${price.maxPrice}`
      );
    }

    setSearchList(updatedSearchList);
  };

  const onDeleteSearch = item => {
    searchList.map(item => {
      if (item === `Rating ${ratingSearch.rating} & Upto`) {
        setRatingSearch({ rating: "" });
      } else if (item === `Price from ${price.minPrice} to ${price.maxPrice}`)
        setPrice({ price: "" });
    });

    const updatedItems = searchList.filter(i => i !== item);
    setSearchList(updatedItems);
  };

  const clearFilter = () => {
    setSearchList([]);
    setPrice({ price: "" });
    setRatingSearch({ rating: "" });
    dispatch(getAllProducts());
  };

  return (
    <>
      <div className="flex flex-col space-y-5 w-full subcateg mt-6">
        {loading ? (
          <div className="flex items-center justify-center w-full h-96">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center mx-auto">
              {/* Search Bar */}
              <div className="flex items-center justify-center border-2 border-slate-600 rounded-md h-10">
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    placeholder="Search"
                    className="ml-2 outline-none w-auto"
                    value={formData.searchParam}
                    id="searchParam"
                    onChange={onChange}
                  />
                  <button className="text-white w-24 sm:w-24 h-[36px] rounded-r bg-slate-600">
                    Search
                  </button>
                </form>
              </div>
            </div>
            {/* Navigation Info */}
            {/* <div className="flex items-start text-sm text-zinc-400 mx-12">
              Home &gt; Best Product Category &gt; Best Product Category &gt;
            </div> */}

            <div className="flex text-zinc-500 sm:mx-12 sm:w-auto w-80">
              <div className="flex flex-col items-center justify-center space-y-2 space-x-0 sm:space-x-6 text-sm sm:text-base sm:space-y-0 sm:flex-row min-w-[310px] sm:w-auto">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="">Filter By:</span>
                  <button
                    className="text-sm sm:text-base w-16 border border-zinc-400 rounded-2xl hover:text-white hover:bg-slate-600"
                    onClick={() => setGen(true)}
                  >
                    Men's
                  </button>
                  <button
                    className="text-sm sm:text-base w-20 border border-zinc-400 rounded-2xl hover:text-white hover:bg-slate-600"
                    onClick={() => setGen(false)}
                  >
                    Women's
                  </button>
                  <select
                    name="rating"
                    id="rating"
                    value={rating}
                    className="text-center text-sm sm:text-base outline-none cursor-pointer w-20 h-8 bg-slate-600 text-white rounded-sm hover:bg-slate-700"
                    onChange={searchRating}
                  >
                    <option
                      value="selected disabled"
                      className="text-sm sm:text-base"
                    >
                      Rating
                    </option>
                    <option value="5" className="text-sm sm:text-base">
                      5
                    </option>
                    <option value="4" className="text-sm sm:text-base">
                      4
                    </option>
                    <option value="3" className="text-sm sm:text-base">
                      3
                    </option>
                    <option value="2" className="text-sm sm:text-base">
                      2
                    </option>
                    <option value="1" className="text-sm sm:text-base">
                      1
                    </option>
                  </select>
                </div>
                <div className="flex items-center justify-center space-x-2 w-80 sm:w-auto">
                  <span className="text-sm sm:text-base">Price</span>
                  <input
                    type="number"
                    id="minPrice"
                    className="p-1 w-16 sm:w-20  border outline-none"
                    min={1}
                    value={minPrice}
                    onChange={priceSearch}
                  />
                  <div className="bg-slate-400 w-[10px] h-[2px]"></div>
                  <input
                    type="number"
                    id="maxPrice"
                    className="p-1 w-16 sm:w-20 border outline-none"
                    value={maxPrice}
                    onChange={priceSearch}
                    min={1}
                  />
                  <button
                    type="button"
                    className="w-8 h-[30px] bg-slate-600 text-white hover:bg-slate-700"
                    onClick={priceChange}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
            <div className="flex text-sm text-slate-600  ml-12 mr-auto w-auto">
              {clear ? (
                <span>
                  {length} items found in "{clear}"
                </span>
              ) : (
                <span> {length} items found in "Best Product Category"</span>
              )}
            </div>

            {searchList.length > 0 && (
              <div className="flex items-center justify-between text-sm mx-12">
                <div className="flex items-center justify-center flex-wrap sm:flex-row space-x-2">
                  {searchList.map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-center text-center text-sm border border-zinc-400 rounded-2xl w-36 h-6"
                    >
                      {item}
                      <i
                        className="ri-close-fill cursor-pointer hover:text-red"
                        onClick={() => onDeleteSearch(item)}
                      ></i>
                    </button>
                  ))}
                </div>
                <button
                  className="cursor-pointer text-blue-400"
                  onClick={clearFilter}
                >
                  Clear all filter
                </button>
              </div>
            )}

            {length > 0 ? (
              <div className="flex flex-wrap gap-7 items-center justify-center p-40">
                {allProducts.products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px]">
                <div className="text-center">No products found.</div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Products;
