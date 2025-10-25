import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contacts/Contacts";
import Header from "./Layout/Header/Header";
import Gallery from "./Pages/Gallery/Gallery";
import Login from "./Pages/Auth/Login/Login";

import { AuthProvider } from "./context/AuthContext";
import Logout from "./Pages/Auth/Logout/Logout";
import TitleUpdater from "./Components/TitleUpdater";
import Footer from "./Layout/Footer/Footer";
import About from "./Pages/About/About";

function App() {
  const galleryItems = [
    {
      title: "Yamaha",
      imageSrc:
        "https://media.zigcdn.com/media/model/2022/Jun/yamaha-yzf-r15s-right-side-view_360x240.jpg",
      description:
        "Yamaha bikes are known for their performance and reliability. They offer a wide range of models suitable for various riding styles.",
    },
    {
      title: "CBR",
      imageSrc:
        "https://images.carandbike.com/bike-images/large/honda/cbr-1000rr/honda-cbr-1000rr.jpg?v=21",
      description:
        "The CBR series by Honda includes high-performance sport bikes. These bikes are designed for speed and agility on the racetrack.",
    },
    {
      title: "HD",
      imageSrc:
        "https://cdn-fastly.motorcycle.com/media/2023/03/30/11414683/harley-davidson-motorcycles.jpg?size=720x845&nocrop=1",
      description:
        "Harley-Davidson is an iconic brand known for its cruiser motorcycles. These bikes emphasize style, comfort, and the joy of cruising.",
    },
    {
      title: "KTM",
      imageSrc:
        "https://www.bajajautofinance.com/uploads/vehicles/KTM-Duke-200-black.jpg",
      description:
        "KTM bikes are popular for their off-road capabilities and aggressive design. They're often chosen by adventure and dirt bike enthusiasts.",
    },
    {
      title: "Hayabusa",
      imageSrc:
        "https://blog.deagostini.com/wp-content/uploads/2017/03/Suzuki-Hayabusa-history-blog-cover.jpg",
      description:
        "The Suzuki Hayabusa is a legendary sportbike known for its exceptional speed and power. It has a devoted following among speed enthusiasts.",
    },
    {
      title: "Suzuki",
      imageSrc:
        "https://www.bennetts.co.uk/-/media/bikesocial/2020-october-images/suzuki-gsx1300r-hayabusa-2021-rumours/suzuki-gsx1300r-hayabusa-2021-rumours-(2).ashx?h=493&la=en&w=740&hash=4774FAA06952B76CDF8CB5EB679E62A0AE6BBC04",
      description:
        "Suzuki offers a diverse range of motorcycles, including sportbikes, cruisers, and adventure bikes. Each model is known for its unique features.",
    },
  ];

  return (
    <AuthProvider>
      <Header />
      <TitleUpdater >
      <Routes>
        <Route path="/" element={<Home galleryItems={galleryItems} />}></Route>

        <Route path="/contacts" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/gallery"
          element={<Gallery galleryItems={galleryItems} />}
        ></Route>
      </Routes>
      </TitleUpdater>
      <Footer />
    </AuthProvider>
  );
}

export default App;
