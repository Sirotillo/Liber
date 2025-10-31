import { Outlet } from "react-router-dom";
import { Header } from "./header/header";

export const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
