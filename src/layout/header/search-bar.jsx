export const SearchBar = () => {
  return (
    <div className="grow">
      <div className="flex gap-1">
        <button className="border border-solid border-[#e1e1e1] rounded-tl-[14px] rounded-bl-[14px] pt-[9px] pr-[52px] pb-[9px] pl-[60px] font-semibold text-[16px] text-[#3f51b5] cursor-pointer">
          Рукнлар
        </button>
        <input
          type="text"
          placeholder="Қидириш"
          className="border border-solid border-[#e1e1e1] rounded-tr-[14px] rounded-br-[14px] w-[555px] pl-[29px] bg-[#f8f8f8] font-normal text-[16px] text-[#aaa]"
        />
      </div>
    </div>
  );
};
