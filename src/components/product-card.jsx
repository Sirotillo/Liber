import { Link } from "react-router-dom";
import card from "../assets/card.svg";
import ratingImg from "../assets/icons/rating.svg";

export const ProductCard = ({ id, img, title, category, rating, path }) => {
  return (
    <div className="h-[400px]">
      <img src={img} alt="" />
      {path == "new-books" ? (
        <Link
          to={{ pathname: `/new-book/${id}` }}
          className="font-bold text-[20px] mt-[18px]"
        >
          {title}
        </Link>
      ) : (
        <Link
          to={{ pathname: `/audio-book/${id}` }}
          className="font-bold text-[20px] mt-[18px]"
        >
          {title}
        </Link>
      )}
      <p className="font-normal text-[14px] text-[#3f51b5]">{category}</p>
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-2.5">
          <img src={ratingImg} alt="" />
          <p className="font-bold text-[18px] text-[#ff7f4d]">{rating}</p>
        </div>
        <img src={card} alt="" />
      </div>
    </div>
  );
};
