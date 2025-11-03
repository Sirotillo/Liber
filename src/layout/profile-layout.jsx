import { Link, Outlet } from "react-router-dom";

export const ProfileLayout = () => {
  return (
    <div>
      <div>
        <p>Profile</p>
      </div>
      <div>
        <div>
          <Link to={"/profile/subscribe"}>Обуна бўлиш</Link>
          <Link to={"/profile/check"}>Э-Хисоб</Link>
          <Link to={"/profile/books"}>Китобларим</Link>
          <Link to={"/profile/saves"}>Сақланганлар</Link>
          <Link to={"/profile/settings"}>Созламалар</Link>
          <Link to={"/profile/dark-mode"}>Тунги режим</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
