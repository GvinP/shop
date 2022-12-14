import { Announcement } from "./components/Announcement";
import { Navbar } from "./components/Navbar";
import { Main } from "./pages/Main";
import { ProductList } from "./pages/ProductList";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "./app/hooks";

function App() {
  const user = useAppSelector(state=>state.auth.currentUser?.username);
  return (
    <Routes>
      <Route path="/" element={<>
                                  <Announcement />
                                  <Navbar />
                                  <Outlet/>
                                  <Newsletter />
                                  <Footer />
                                </>}>
        <Route path="/" element={<Main />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<div>404 Page not found</div>} />
      </Route>
      <Route path="register" element={user ? <Navigate to={"/"} /> : <Register />} />
      <Route path="login" element={user ? <Navigate to={"/"} /> : <Login />} />
    </Routes>
  );
}

export default App;
