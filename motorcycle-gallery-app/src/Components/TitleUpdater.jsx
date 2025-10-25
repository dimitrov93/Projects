import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const TitleUpdater = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${getTitleForRoute(location.pathname)}`;
  }, [location.pathname])
  

  const getTitleForRoute = (pathname) => {
    switch (pathname) {
      case "/":
        return "Home Page";
      case "/about":
        return "About Page";
      case "/gallery":
        return "Gallery Page";
      case "/contact":
        return "Contact Page";
        case "/login":
          return "Login Page";
      default:
        return "React Test";
    }
  }


  return children;
};

export default TitleUpdater;
