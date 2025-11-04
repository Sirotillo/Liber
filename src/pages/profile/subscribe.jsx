import subscribeImg from "../../assets/subscribe.png";

export const Subscribe = () => {
  return (
    <div>
      <div className="bg-[#ea611ceb] rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] flex justify-between pt-8 pl-8 h-[175px]">
        <h2 className="font-bold text-[26px] text-white w-[310px]">
          Узингиз севган бўлимга обуна бўлинг
        </h2>
        <img src={subscribeImg} alt="" />
      </div>

      <div className="mt-[23px] pt-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] rounded-sm h-[463px] pl-8 pr-[51px]">
        <h2 className="font-bold text-[30px] text-[#11142d]">Обуна</h2>
        <div className="mt-8 flex justify-between">
          <div>
            <label className="block mb-2 text-[14px] font-medium">
              Обуна давом этиш вакти
            </label>
            <select className="px-3 py-3 text-base rounded-lg border border-gray-300 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#3f51b5] focus:border-transparent">
              <option>30 кун</option>
              <option>60 кун</option>
              <option>90 кун</option>
              <option>180 кун</option>
              <option>1 йил</option>
            </select>
            <label className="block mb-2 text-[14px] font-medium mt-6">
              Булимни танланг
            </label>
            <select className="px-3 py-3 text-base rounded-lg border border-gray-300 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#3f51b5] focus:border-transparent">
              <option>Фантастика</option>
              <option>60 кун</option>
              <option>90 кун</option>
              <option>180 кун</option>
              <option>1 йил</option>
            </select>
            <h3 className="mt-6 font-bold text-[20px] text-[#11142d]">
              Обуна 30 кун давом этади
            </h3>
          </div>
          <div>
            <div>
              <div className="bg-[#f5f5f5] pt-4 pr-[9px] pb-[27px] pl-[15px] flex flex-col gap-4">
                <div className="flex gap-[141px] justify-between">
                  <p>Бошланиш вакти</p>
                  <p>12/09/2021</p>
                </div>
                <div className="flex gap-[141px] justify-between">
                  <p>Якунланиш вакти</p>
                  <p>12/10/2021</p>
                </div>
                <div className="flex gap-[141px] justify-between">
                  <p>Обуна нархи</p>
                  <p>12 000 сум</p>
                </div>
              </div>
              <button className="cursor-pointer bg-[#3f51b5] rounded-[14px] py-[7px] px-2 w-[400px] text-white mt-[34px]">Обуна булиш</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
