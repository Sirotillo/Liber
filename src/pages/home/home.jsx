import { Spark } from "../../assets/icons/spark";
import { category } from "../../data/data";
import { Banner } from "./components/banner";
import { CategoryCard } from "./components/category-card";
import { ProductWrapper } from "./components/product-wrapper";

export const Home = () => {
  return (
    <>
      <Banner />

      <section>
        <div className="container">
          <div className="flex justify-between gap-[45px]">
            <div className="flex gap-5">
              <Spark />
              <div className="">
                <h4 className="font-bold text-[15px] text-[#11142d]">
                  Тезкор етказиш
                </h4>
                <p className="pt-[7px] font-normal text-[11px] text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Spark />
              <div className="">
                <h4 className="font-bold text-[15px] text-[#11142d]">
                  Тезкор етказиш
                </h4>
                <p className="pt-[7px] font-normal text-[11px] text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Spark />
              <div className="">
                <h4 className="font-bold text-[15px] text-[#11142d]">
                  Тезкор етказиш
                </h4>
                <p className="pt-[7px] font-normal text-[11px] text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Spark />
              <div className="">
                <h4 className="font-bold text-[15px] text-[#11142d]">
                  Тезкор етказиш
                </h4>
                <p className="pt-[7px] font-normal text-[11px] text-[#aaa]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-[62px]">
        <div className="container">
          <h2 className="font-semibold text-[32px] text-[#242424] mb-6">
            Рукнлар
          </h2>
          <div className="grid grid-cols-6 gap-1">
            {category.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="container">
          <h2 className="font-semibold text-[32px]">Янги қўшилганлар</h2>
          <ProductWrapper path={"new-books"} className="mt-8" />
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="font-semibold text-[32px]">Аудио китоблар</h2>
          <ProductWrapper path={"audio-books"} className="mt-8" />
        </div>
      </section>
    </>
  );
};
