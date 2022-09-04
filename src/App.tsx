import { Announcement } from "./components/Announcement";
import { Navbar } from "./components/Navbar";
import { Main } from "./pages/Main";
import { ProductList } from "./pages/ProductList";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";
import { Products } from "./components/Products";
import { Product } from "./pages/Product";

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      {/* <Main/> */}
      {/* <ProductList />
      <Products /> */}
      <Product/>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
