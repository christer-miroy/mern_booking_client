import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Listings from "./pages/listings/Listings";
import Property from "./pages/property/Property";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Listings />} />
      <Route path="/hotels/:id" element={<Property />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
