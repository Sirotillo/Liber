import { ProductCard } from "../../../components/product-card";
import { newProduct } from "../../../data/data";
import { audioProduct } from "../../../data/data";

export const ProductWrapper = ({ path }) => {
  return (
    <div className="grid grid-cols-5 gap-6 mt-8">
      {path == "new-books"
        ? newProduct.map((item) =>  <ProductCard key={item.id} {...item} path={path} />)
        : audioProduct.map((item) => <ProductCard key={item.id} {...item} path={path} />)
      }
    </div>
  );
};
