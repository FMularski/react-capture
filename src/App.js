import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/our-work" exact element={<OurWork />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
