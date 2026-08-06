import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import HomeCleaning from "./pages/HomeCleaning";
import FinalCleaning from "./pages/FinalCleaning";
import OfficeCleaning from "./pages/OfficeCleaning";
import MoveOutCleaning from "./pages/MoveOutCleaning";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";

const App = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />}/>
          <Route path="home-cleaning" element={<HomeCleaning />} />
          <Route path="office-cleaning" element={<OfficeCleaning />} />
          <Route path="final-cleaning" element={<FinalCleaning />} />
          <Route path="move-out-cleaning" element={<MoveOutCleaning />} />
 
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
