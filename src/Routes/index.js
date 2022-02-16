import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../components/aboutUs";
import ContactUs from "../components/contactUs";
import Home from "../components/home";
import Header from "../components/header"
const Index = () => {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default Index;
