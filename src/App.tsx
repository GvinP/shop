import { Announcement } from "./components/Announcement";
import { Navbar } from "./components/Navbar";
import { Main } from "./pages/Main";
import { ProductList } from "./pages/ProductList";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <ProductList />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
