import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { NewBookDetail } from "./pages/newbok-detail/newbook-detail";
import { AudiobookDetail } from "./pages/audiobook-detail/audiobook-detail";
import { NotFound } from "./pages/not-found/not-found";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="new-book/:id" element={<NewBookDetail />} />
          <Route path="audio-book/:id" element={<AudiobookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
