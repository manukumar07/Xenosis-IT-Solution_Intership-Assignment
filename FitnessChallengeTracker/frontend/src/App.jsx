import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./components/Home";
import ActivityForm from "./Pages/ActivityForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workouts" element={<ActivityForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
