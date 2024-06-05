import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import CartContextProvider from "./context/CartContextProvider.jsx";
import ProductLoader from "./containers/ProductLoader/ProductLoader";

import HomePage from "./pages/HomePage/HomePage";
import WomensPage from "./pages/WomensPage/WomensPage";
import ComingSoonPage from "./pages/ComingSoonPage /ComingSoonPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartPage from "./pages/CartPage/CartPage.jsx";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage.jsx";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter basename="/theMarketPlace/">
        <Layout>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/womens"
                element={<WomensPage pageHeaderText={"Women's"} />}
              />
              <Route path="/womens/:id" element={<ProductLoader />} />
              <Route path="/accessories" element={<ComingSoonPage />} />
              <Route path="/skincare" element={<ComingSoonPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/thankyou" element={<ThankYouPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </CartContextProvider>
          <Footer />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
