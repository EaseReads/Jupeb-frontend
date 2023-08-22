import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/AuthContext";

import SignUp from "./pages/SignUP/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import PdfasImage from "./pages/PDF/PdfasImage";
import ContactUs from "./pages/Contact/ContactUs";
import Pricing from "./pages/Pricing-Page/Pricing";
import ScrollToTop from "./layout/ScrollToTop/ScrollToTop";
import About from "./pages/About/About";
import Syllabus from "./pages/Syllabus/Syllabus"
function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </UserProvider>
      {/* <Home /> */}
      {/* <ContactUs /> */}
      {/* <Pricing /> */}
      {/* <PdfasImage /> */}
      {/* <h1>i amgood</h1> */}
    </div>
  );
}

export default App;
