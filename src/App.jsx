import "./App.css";
import StoreNavigation from "./components/StoreNavigation";
import PromoSection from "./components/PromoSection";
import ProductList from "./components/ProductList";
import Swiper from "./components/Swiper";

function App() {
  return (
    <div>
      <StoreNavigation />
      <PromoSection />
      <Swiper />
      <ProductList />
    </div>
  );
}

export default App;
