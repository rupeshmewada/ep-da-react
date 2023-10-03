import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Top from "./component/Top";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Banner from "./component/Banner";
import Registration from "./component/Registration";
import Footer from "./component/Footer";
import Patients_Create from "./component/Patient/Patients_Create";
import PatientsAll from "./component/Patient/PatientsAll";
import Specific_patient from "./component/Patient/Specific_patient";

import Doctors from "./component/doctor/Doctors";
import Specific_Doctor from "./component/doctor/Specific_Doctor";
import Doctor_search from "./component/doctor/Doctor_search";
import Test from "./component/Test";
import Appointment from "./component/doctor/Appointment";
import Patient_delete from "./component/Patient/Patient_delete";
import Doctor_appointments from "./component/doctor/Doctor_appointmnets";
import Login from "./component/Login";
import Admin from "./component/Admin";

function App() {
  
  return (
    <div className="App">
      {/* <Doctor_appointments /> */}

      <Top />
      <Banner />
      {/* <Patient_delete/> */}
      {/* <Appointment /> */}
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tests" element={<Test />}></Route>
        <Route path="/nav" element={<Nav />}></Route>
        <Route path="/registration" element={<Registration />}></Route>

        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/doctor/:id" element={<Specific_Doctor />}></Route>
        <Route path="/doctor/:id/appointments" element={<Doctor_appointments />}></Route>
        <Route path="/doctors/:id/appointment" element={<Appointment />}></Route>

        <Route path="/patients/:id" element={<Specific_patient />}></Route>
        <Route path="/patients_create" element={<Patients_Create />}></Route>
        <Route path="/patientsall" element={<PatientsAll />}></Route>
        <Route path="/patients_delete/:id" element={<Patient_delete />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adminregistration" element={<Admin />}></Route>
        {/* <Route path="/doctor_search" element={<Doctor_search />}></Route> */}
    
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
