import { ProductCard } from "../../../components/product-card";

export const ProductWrapper = ({ path }) => {
  return (
    <div className="grid grid-cols-5 gap-6 mt-[32px]">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
