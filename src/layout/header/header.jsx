import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { SearchBar } from "./search-bar";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="py-[21px]">
      <div className="container flex justify-between gap-5 items-center">
        <div className="flex gap-[46px] grow">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <SearchBar />
        </div>
        <div className="flex gap-[20px] items-center">
          <button className="rounded-[14px] bg-[#eef4ff] font-semibold text-[16px] text-[#3f51b5] h-[48px] w-[105px]">
            Ўз
          </button>
          <button className="w-[151px] h-[48px] bg-[#3f51b5] text-[#fff] rounded-[14px]">
            Кириш
          </button>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
