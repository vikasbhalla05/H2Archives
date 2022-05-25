import './App.css';
import Nav from './Global Components/Nav';
import Footer from './Global Components/Footer';
import PatientLogin from './Pages/PatientLogin';
import DoctorLogin from './Pages/DoctorLogin';
import DoctorDash from "./Pages/Doctor Dashboard/DoctorDash";
import PatientDash from "./Pages/Patient Dashboard/PatientDash";

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
          <Route path="/patient/dashboard" element={<PatientDash />} />
          <Route path="/doctor/dashboard" element={<DoctorDash />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
