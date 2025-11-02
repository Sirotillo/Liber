import { useParams } from "react-router-dom";
import { newProduct } from "../../data/data";
import { ProductDetail } from "../../components/product-detail";

export const NewBookDetail = () => {
  const { id } = useParams();

  return (
    <div>
      {newProduct.filter(newProduct => newProduct.id === Number(id)).map((item) => (
        <ProductDetail key={item.id} {...item} />
      ))}
    </div>
  );
};
