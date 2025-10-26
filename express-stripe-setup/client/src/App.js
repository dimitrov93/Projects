import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pay from "./components/Pay/Pay";
import Success from "./components/Success/Success";

function App() {
  return (
    <Routes>
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
