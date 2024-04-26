import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Offers from "./pages/Offers";
import DetailsCar from "./pages/DetailsCar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/details" element={<DetailsCar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
