import config from '@/utils/config';
import { ProductCard } from './_ProductCard';

export default function ProductCardList() {
  return (
    <div className="flex flex-wrap justify-center space-x-2 space-y-2">
      {config.catalog.products.map((ele, i) => (
        <ProductCard product={ele} key={'product-' + i} />
      ))}
    </div>
  );
}
