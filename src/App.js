import './App.css';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            ></Route>
            <Route
              path="/contactUs"
              element={<ContactUs />}
            ></Route>
            <Route
              path="/aboutUs"
              element={<AboutUs />}
            ></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
