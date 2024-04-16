import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import WomensPage from "./pages/WomensPage/WomensPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter basename="/theMarketPlace">
        <Layout>
          <Navbar />
          {/* add layout and navbar
      think about any data that needs to be avaliable to all eg context */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/womens"
              element={<WomensPage pageHeaderText={"Women's"} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
