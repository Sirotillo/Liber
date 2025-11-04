import { Link, Outlet } from "react-router-dom";
import profileImg from "../assets/profile.png";
import { useState } from "react";

export const ProfileLayout = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="container">
      <div className="rounded-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] py-6 pl-6 pt-[52px]">
        <div className="flex gap-[33px] h-[163px]">
          <img src={profileImg} alt="" />
          <div>
            <h2 className="font-bold text-[30px] text-[#11142d] mb-2.5">
              Суғдиёна Икромова
            </h2>
            <p className="font-medium text-[20px] text-[#242424] mb-2.5">
              +998 90 253 77 53
            </p>
            <p className="font-medium text-[20px] text-[#9a9a9a]">
              ID: 0001 Баланс: 45 000 сўм
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[60px] flex gap-9">
        <div className="flex flex-col gap-[23px] rounded-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] pl-6 pt-7 pb-[42px] pr-[98px] h-[345px]">
          <Link
            to={"/profile/subscribe"}
            onClick={() => setActive(1)}
            className={`${
              active === 1
                ? "font-bold text-[#3f51b5]"
                : "font-medium text-[18px]"
            }`}
          >
            Обуна бўлиш
          </Link>
          <Link
            to={"/profile/check"}
            onClick={() => setActive(2)}
            className={`${
              active === 2
                ? "font-bold text-[#3f51b5]"
                : "font-medium text-[18px]"
            }`}
          >
            Э-Хисоб
          </Link>
          <Link
            to={"/profile/books"}
            onClick={() => setActive(3)}
            className={`${
              active === 3
                ? "font-bold text-[#3f51b5]"
                : "font-medium text-[18px]"
            }`}
          >
            Китобларим
          </Link>
          <Link
            to={"/profile/saves"}
            onClick={() => setActive(4)}
            className={`${
              active === 4
                ? "font-bold text-[#3f51b5]"
                : "font-medium text-[18px]"
            }`}
          >
            Сақланганлар
          </Link>
          <Link
            to={"/profile/settings"}
            onClick={() => setActive(5)}
            className={`${
              active === 5
                ? "font-bold text-[#3f51b5]"
                : "font-medium text-[18px]"
            }`}
          >
            Созламалар
          </Link>
          <Link
            to={"/profile/dark-mode"}
            onClick={() => setActive(6)}
            className={`${
              active === 6
                ? "font-bold text-[#3f51b5]"
                : "font-medium text-[18px]"
            }`}
          >
            Тунги режим
          </Link>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
