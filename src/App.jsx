import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* add layout and navbar
      think about any data that needs to be avaliable to all eg context */}
        <Routes>
          <Route path="/" element={<HomePage text={"Update me"} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
