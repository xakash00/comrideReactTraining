import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../modules/aboutUs";
import ContactUs from "../modules/contactUs";
import Home from "../modules/home";
import Header from "../components/header";
import Count from "../modules/count";
import Login from "../modules/login";
import PrivateRoute from "./PrivateRoute";
import RegistrationPage from "../modules/registrationPage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dictionary from "../modules/dictionary";
const Index = () => {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        <Route path="/count" element={<Count />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default Index;
