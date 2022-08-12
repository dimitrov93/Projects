import ProductDetails from "./components/Details/ProductDetails";
import Home from "./components/Home/Home";
import CatalogList from "./components/Catalog/CatalogList";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import Logout from "./components/Logout/Logout";
import { Routes, Route } from "react-router-dom";
import Notfound from "./components/common/Notfound";
import { AuthProvider } from "./context/AuthContext";
import LogginGuard from "./components/common/logginGuard";
import Create from "./components/CreateProduct/Create";
import Navbar from "./components/Navigation/Navbar";
import Announcement from "./components/Announcement/Announcement";
import Footer from "./components/Footer/Footer";
import NewsLetter from "./components/Home/NewsLetter";
import Edit from "./components/EditProduct/Edit";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Announcement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalog" element={<CatalogList all='all' />} />
          <Route path="/catalog/woman" element={<CatalogList women='women' />} />
          <Route path="/catalog/men" element={<CatalogList men='men' />} />
          <Route path="/catalog/kids" element={<CatalogList kids='kids' />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/catalog/:id/edit" element={<Edit />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<LogginGuard />}></Route>
          <Route path="/create" element={<Create />} />
            <Route path="/cart" element={<Cart />} />
          <Route element={<LogginGuard />}>
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
