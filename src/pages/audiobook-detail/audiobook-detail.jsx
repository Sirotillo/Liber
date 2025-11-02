import { useParams } from "react-router-dom";
import { audioProduct } from "../../data/data";
import { ProductDetail } from "../../components/product-detail";

export const AudiobookDetail = () => {
  const { id } = useParams();
  return (
    <div>
      {audioProduct
        .filter((audioProduct) => audioProduct.id === Number(id))
        .map((item) => (
          <ProductDetail key={item.id} {...item} />
        ))}
    </div>
  );
};
