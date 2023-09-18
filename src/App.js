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
import Appointment from "./component/Appointment";

function App() {
  return (
    <div className="App">
      <Top />
      <Banner />
      {/* <Appointment /> */}
      
      {/* <Patients /> */}
      {/* <Test /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tests" element={<Test />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/nav" element={<Nav />}></Route>

        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/doctor/:id" element={<Specific_Doctor />}></Route>

        <Route path="/doctors/appointment/:id" element={<Appointment />}></Route>

        <Route path="/patients/:id" element={<Specific_patient />}></Route>
        <Route path="/patients_create" element={<Patients_Create />}></Route>
        <Route path="/patientsall" element={<PatientsAll />}></Route>
        <Route path="/doctor_search" element={<Doctor_search />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
