import Products from "../components/Products";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchProducts } from "../actions";
import { useApi } from "../services/ApiContext";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const api = useApi();

  useEffect(() => {
    dispatch(fetchProducts(api));
  }, [dispatch, api]);

  return <Products products={products} />
}

export default ProductsContainer;