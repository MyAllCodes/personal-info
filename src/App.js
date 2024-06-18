import './App.css';
// import AboutUs from './component/AboutUs';
// import ContactUs from './component/ContactUs';
// import Home from './component/Home';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Counter from './component/Counter';

function App() {

  return (
    <>
      <Header/>
      {/* <Counter/> */}
        {/* <Router>
        
           <Routes>
            <Route
              path="/personal-info/home"
              element={<Home />}
            ></Route>
            <Route
              path="/personal-info/contactUs"
              element={<ContactUs />}
            ></Route>
            <Route
              path="/personal-info/aboutUs"
              element={<AboutUs />}
            ></Route>
          </Routes>
      </Router>  */}
    </>
  );
}

export default App;
