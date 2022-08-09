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

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<LogginGuard />}></Route>
          <Route path="/Product" element={<Product />} />
          <Route element={<LogginGuard />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
