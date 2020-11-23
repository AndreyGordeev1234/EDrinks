import Products from "../components/Products";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from "react";
import { fetchProducts } from "../actions";
import { useApi } from "../services/ApiContext";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  let products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
  const filterName = useSelector(state => state.filters.filterName);
  const filterGroup = useSelector(state => state.filters.filterGroup);
  const sortType = useSelector(state => state.filters.sortType);
  const api = useApi();

  useEffect(() => {
    dispatch(fetchProducts(api));
  }, [dispatch, api]);

  products = useMemo(() => {
    return products.filter(product => 
      product.title.toLowerCase().indexOf(filterName) !== -1
    );
  }, [products, filterName]);

  products = useMemo(() => {
    if (filterGroup === 'All') return products;

    if (filterGroup === 'Popular Drinks')
      return products.filter(product => 
        product.isPopular === "true"
      );

    return products.filter(product => 
      product.group === filterGroup
    );
  }, [products, filterGroup]);

  products = useMemo(() => {
    if (sortType === 'LTH') 
      return products.sort((a, b) => a.price - b.price);
    
    if (sortType === 'HTL') 
      return products.sort((a, b) => b.price - a.price);
    
    if (sortType === 'TITLE') 
      return products.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0)

    return products
  }, [products, sortType]);

  return <Products products={products} isLoading={loading} group={filterGroup}/>
}

export default ProductsContainer;