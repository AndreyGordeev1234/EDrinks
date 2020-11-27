import FeaturedProducts from './FeaturedProducts.js';
import { shallow } from 'enzyme';
import FeatureProduct from '../FeatureProduct/index.js';

describe('FeaturedProducts', () => {
  const products = [
    {
      "id": 0,
      "title": "Instant Pot Yogurt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris. Dolor sit amet, consectetur adipiscing elit. Mi mauris.",
      "price": "14.00",
      "imageUrl": "https://tastesbetterfromscratch.com/wp-content/uploads/2020/05/Instant-Pot-Yogurt-14.jpg",
      "group": "Yogurt",
      "isPopular": "true",
      "calories": 25,
      "size": 20,
      "discount": 15
    },
    {
      "id": 1,
      "title": "Carrot Juice",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris.",
      "price": "9.00",
      "imageUrl": "https://www.acouplecooks.com/wp-content/uploads/2020/07/Carrot-Juice-001.jpg",
      "group": "Juices",
      "isPopular": "true",
      "calories": 20,
      "size": 15,
      "discount": 0
    },
    {
      "id": 2,
      "title": "Raspberry Yogurt Smoothie",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris. Dolor sit amet, consectetur adipiscing elit. Mi mauris.",
      "price": "24.00",
      "imageUrl": "https://kristineinbetween.com/wp-content/uploads/2015/04/raspberry-smoothie-1.jpg",
      "group": "Natural Smoothie",
      "isPopular": "true",
      "calories": 35,
      "size": 20,
      "discount": 10
    }
  ];

  let component;
  beforeEach(() => {
    component = shallow(<FeaturedProducts products={products} loading={false}/>);
  });

  it('has featured section', () => {
    const featured = component.find('.featured');
    expect(featured).toHaveLength(1);
  });

  it('has featured wrapper section', () => {
    const featuredWrapper = component.find('.featured__wrap');
    expect(featuredWrapper).toHaveLength(1);
  });

  it('has 3 featured products', () => {
    const featuredProduct = component.find(FeatureProduct);
    expect(featuredProduct).toHaveLength(3);
  });
});