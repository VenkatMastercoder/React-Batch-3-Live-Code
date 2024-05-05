/* eslint-disable react/prop-types */
import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HeroSection from "./component/HeroSection/HeroSection";
import RestaurantLayout from "./component/RestaurantLayout/RestaurantLayout";
import Banner from "./component/Banner/Banner";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Banner/>
      <HeroSection />
      <RestaurantLayout/>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // <div id="root"></div>
root.render(<AppLayout />);