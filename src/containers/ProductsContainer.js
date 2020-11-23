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

  return <Products products={products} isLoading={loading} group={filterGroup}/>
}

export default ProductsContainer;