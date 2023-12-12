import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Listings from "./pages/listings/Listings";
import Navbar from "./components/navbar/Navbar";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Listings />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
