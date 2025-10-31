import Image from "../assets/1984.png";
import rating from "../assets/rating.svg";
import card from "../assets/card.svg";

export const ProductCard = () => {
  return (
    <div className="h-[400px]">
      <img src={Image} alt="" />
      <h3 className="font-bold text-[20px] mt-[18px]">1984</h3>
      <p className="font-normal text-[14px] text-[#3f51b5]">SIYOSAT, FANTASTIKA</p>
      <div className="flex justify-between mt-[16px]">
        <img src={rating} alt="" />
        <img src={card} alt="" />
      </div>
    </div>
  );
};
