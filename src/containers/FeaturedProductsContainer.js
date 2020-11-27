import FeaturedProducts from '../components/FeaturedProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useApi } from '../services/ApiContext';
import { fetchFeatured } from '../actions';

const FeaturedProductsContainer = () => {
  const dispatch = useDispatch();
  const api = useApi();
  const featured = useSelector(state => state.featured.featured);
  const loading = useSelector(state => state.featured.loading);
  let products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchFeatured(api));
  }, [dispatch, api]);

  products = useMemo(() => {
    let featuredSet = new Set(featured);
    let res = products.filter(product =>
      featuredSet.has(product.id)
    );
    return res;
  }, [products, featured]);

  return <FeaturedProducts products={products} loading={loading}/>
}

export default FeaturedProductsContainer;