import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Logout from "./pages/Logout";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import { AuthProvider } from "./context/AuthContext";
import LogginGuard from "./common/logginGuard";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Announcement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<ProductList />} />
          <Route path="/catalog/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<LogginGuard />}></Route>
          <Route path="/create" element={<Create />} />
          <Route element={<LogginGuard />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
            <Route path="/logout" element={<Logout />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <NewsLetter />
      <Footer />
    </AuthProvider>
  );
}

export default App;
