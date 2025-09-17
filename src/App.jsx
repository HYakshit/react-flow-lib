import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

export default function App() {
  return (

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/404" element={<Page404 />} />
            <Route path="/contactus" element={<ContactUS />} />
            <Route path="/about" element={<AboutUs />} /> */}

            {/* Add more routes as needed */}
          </Routes>
     
      </BrowserRouter>
  
  );
}
