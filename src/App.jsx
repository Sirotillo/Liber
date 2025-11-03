import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { NewBookDetail } from "./pages/newbok-detail/newbook-detail";
import { AudiobookDetail } from "./pages/audiobook-detail/audiobook-detail";
import { NotFound } from "./pages/not-found/not-found";
import { ProfileLayout } from "./layout/profile-layout";
import { Subscribe } from "./pages/profile/subscribe";
import { Profile } from "./pages/profile/profile";
import { Check } from "./pages/profile/check";
import { Books } from "./pages/profile/books";
import { Saves } from "./pages/profile/saves";
import { Settings } from "./pages/profile/settings";
import { DarkMode } from "./pages/profile/dark-mode";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="new-book/:id" element={<NewBookDetail />} />
          <Route path="audio-book/:id" element={<AudiobookDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="check" element={<Check />} />
            <Route path="books" element={<Books />} />
            <Route path="saves" element={<Saves />} />
            <Route path="setting" element={<Settings />} />
            <Route path="dark-mode" element={<DarkMode />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
