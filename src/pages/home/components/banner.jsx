import bannerImg from "../../../assets/banner.png";
import prevLeft from "../../../assets/icons/prevLeft.svg";
import prevRight from "../../../assets/icons/prevRight.svg";

export const Banner = () => {
  return (
    <section className="pt-4 pb-14">
      <div className="container">
        <div className="flex gap-6">
          <div className="grow bg-[#eef4ff] rounded-xl pt-8 pl-6 pr-8 pb-4">
            <div className="flex gap-[13px] justify-between">
              <h3 className="font-bold text-[24px] text-[#242424]">
                Кўп ўқилаётганлар
              </h3>
              <div className="flex gap-4">
                <img src={prevLeft} alt="prevLeft" />
                <div>
                  <img src={bannerImg} alt="banner" />
                  <p className="text-center">1984</p>
                </div>
                <div>
                  <img src={bannerImg} alt="banner" />
                  <p className="text-center">1984</p>
                </div>
                <div>
                  <img src={bannerImg} alt="banner" />
                  <p className="text-center">1984</p>
                </div>
                <img src={prevRight} alt="prevRight" />
              </div>
            </div>
          </div>
          <div className="w-[261px] h-[351px] rounded-xl bg-[#3f51b5] pt-[32px] pr-[24px] pb-[38px] pl-[24px]">
            <h3 className="font-bold text-[24px] text-white">Китоб ўқишни ёқтирасизми?</h3>
            <p className="pt-[20px] text-white font-normal text-18px">
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <button className="mt-[77px] bg-white rounded-[14px] w-[210px] h-12 font-bold text-[18px]">Обуна бўлиш</button>
          </div>
        </div>
      </div>
    </section>
  );
};
