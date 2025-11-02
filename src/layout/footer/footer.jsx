import google from "../../assets/googleplay.png";
import logo from "../../assets/social-logo.svg";
import uzcard from "../../assets/uzcard.svg";

export const Footer = () => {
  return (
    <footer className="pt-[93px]">
      <div className="bg-[#eef4ff] pt-[31px] pb-[63px]">
        <div className="container flex gap-[119px]">
          <div className="flex gap-[130px]">
            <div className="flex flex-col gap-3.5">
              <h3 className="font-bold text-[20px] color: #11142d;">
                Платформа хақида
              </h3>
              <div className="flex flex-col gap-[18px]">
                <p>Liber ўзи нима?</p>
                <p>Фойдаланиш шартлари</p>
                <p>Ёрдам</p>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <h3 className="font-bold text-[20px] color: #11142d;">
                Обуна хақида
              </h3>
              <div className="flex flex-col gap-[18px]">
                <p>Обуна бўлиш</p>
                <p>Қандай тўлаш</p>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <h3 className="font-bold text-[20px] color: #11142d;">
                Китоблар
              </h3>
              <div className="flex flex-col gap-[18px]">
                <p>Аудио китоблар</p>
                <p>Электрон китоблар</p>
                <p>Китоблар</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <h3 className="font-bold text-[20px] color: #11142d;">
              Мобил илова
            </h3>
            <div className="flex flex-col gap-4">
              <img src={google} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#10182c] pt-3 pb-[34px]">
        <div className="container flex gap-[101px] text-white">
          <div className="flex gap-[131px]">
            <div>
              <p className="font-light text-[14px] mb-3">Ижтимоий тармоқлар</p>
              <img src={logo} alt="" />
            </div>
            <div>
              <p className="font-light text-[14px] mb-[11px]">Боғланиш</p>
              <div className="flex gap-[23px]">
                <p className="font-light text-[16px]">+998 90 253 77 53</p>
                <p className="font-light text-[16px]">support@liber.uz</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-light text-[14px] mb-[9px]">Биз қабул қиламиз</p>
            <div className="flex gap-[7.69px]">
              <img src={uzcard} alt="" />
              <img src={uzcard} alt="" />
              <img src={uzcard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
