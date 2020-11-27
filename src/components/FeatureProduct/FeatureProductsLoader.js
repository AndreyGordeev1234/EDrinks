import ContentLoader from 'react-content-loader';

const FeatureProductsLoader = () => (
  <ContentLoader
    speed={1}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#DDDDDD"
    >
    <rect x="0" y="0" rx="4" ry="4" width="200" height="20" />
    <rect x="0" y="90" rx="3" ry="3" width="100" height="15" />
    <rect x="0" y="120" rx="3" ry="3" width="100" height="15" />
    <circle cx="350" cy="40" r="40" />
  </ContentLoader>
)

export default FeatureProductsLoader;