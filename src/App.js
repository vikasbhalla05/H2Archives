import './App.css';
import Nav from './Global Components/Nav';
import Footer from './Global Components/Footer';
import PatientLogin from './Pages/PatientLogin';
import DoctorLogin from './Pages/DoctorLogin';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Nav />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/doctor/login" element={<DoctorLogin />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
