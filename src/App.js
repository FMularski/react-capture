import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from "./pages/MovieDetail";
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation(); // needed for animating out
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/our-work" exact element={<OurWork />} />
          <Route path="/our-work/:id" exact element={<MovieDetail />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
