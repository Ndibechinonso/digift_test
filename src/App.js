import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PersonalHomepage from './pages/PersonalHomepage';
import BusinessHomepage from './pages/BusinessHomepage';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <div className="container_padding">
        <Routes>
          <Route path="/" element={<PersonalHomepage />} />
          <Route path="/business" element={<BusinessHomepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;