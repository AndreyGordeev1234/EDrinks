import Products from "../components/Products";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from "react";
import { fetchProducts } from "../actions";
import { useApi } from "../services/ApiContext";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  let products = useSelector(state => state.products);
  const filterName = useSelector(state => state.filterName);
  const api = useApi();

  useEffect(() => {
    dispatch(fetchProducts(api));
  }, [dispatch, api]);

  products = useMemo(() => {
    return products.filter(product => 
      product.title.indexOf(filterName) !== -1
    );
  }, [products, filterName]);

  return <Products products={products}/>
}

export default ProductsContainer;