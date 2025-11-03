import card from "../assets/card.svg";
import star from "../assets/star.svg";
import chat from "../assets/chat.svg";

export const ProductDetail = ({
  img,
  title,
  rating,
  coment,
  category,
  description,
  author,
  publisher,
  year,
  price,
  audioprice,
  onlineprice,
}) => {
  const numRating = Math.floor(rating);
  return (
    <div className="container flex justify-between gap-6">
      <div className="w-[300px] h-[422px] overflow-hidden rounded-xl">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[30px]">{title}</h2>
          <img src={card} alt="" />
          <div className="flex">
            {[...Array(numRating)].map((_, i) => (
              <img key={i} src={star} alt="full" />
            ))}
          </div>
          <p className="font-bold text-[24px]">{rating}</p>
          <img src={chat} alt="" />
          <p>{coment}</p>
        </div>
        <p className="font-normal text-[14px] text-[#3f51b5]">{category}</p>
        <p className="mt-4 font-normal text-[14px]">{description}</p>
        <div className="flex gap-[75px] mt-4">
          <div>
            <p className="mb-2 text-[#aaa] font-normal text-[14px]">Муаллиф</p>
            <p className="font-semibold text-[18px] text-[#11142d]">{author}</p>
          </div>
          <div>
            <p className="mb-2 text-[#aaa] font-normal text-[14px]">Нашриёт</p>
            <p className="font-semibold text-[18px] text-[#11142d]">
              {publisher}
            </p>
          </div>
          <div>
            <p className="mb-2 text-[#aaa] font-normal text-[14px]">Йил</p>
            <p className="font-semibold text-[18px] text-[#11142d]">{year}</p>
          </div>
        </div>
        <div className="mt-[47px] flex gap-4">
          <button className="cursor-pointer rounded-[14px] bg-[#3f51b5] text-white p-2">
            Сотиб олиш - {price} сум
          </button>
          <button className="cursor-pointer rounded-[14px] border border-solid border-[#3f51b5] bg-transparent text-[#242424] p-2">
            Аудио тинглаш - {audioprice} сум
          </button>
          <button className="cursor-pointer rounded-[14px] border border-solid border-[#3f51b5] bg-transparent text-[#242424] p-2">
            Онлайн укиш - {onlineprice} сум
          </button>
        </div>
      </div>
    </div>
  );
};
