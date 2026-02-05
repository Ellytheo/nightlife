import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Amenities from './components/Amenities';
import Navbar from './common/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ correct
import Footer from './common/Footer';
import ScrollToTop from './common/ScrollToTop';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import FontTest from './Font';
import NotFound from './components/NotFound';
import Gallery from './components/Gallery';
import AdminPage from './common/AdminPage';
import Login from './common/Login';
import TermsAndPrivacy from './common/TermsAndPrivacy';
import ChatBot from './common/ChatBot';
import CookieBanner from './common/CookieBanner';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fonts" element={<FontTest />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/wp-adman" element={<AdminPage />} />
            <Route path="/sponge" element={<Login />} />
            <Route path="/terms" element={<TermsAndPrivacy />} />
          </Routes>
           <CookieBanner /> {/* 👈 place here */}
          
          <Footer />
      </div>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
