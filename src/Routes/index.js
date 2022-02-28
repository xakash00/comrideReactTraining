import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../modules/aboutUs";
import ContactUs from "../modules/contactUs";
import Home from "../modules/home";
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
