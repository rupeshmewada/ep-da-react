import React from "react";
import { Link } from "react-router-dom";
import "./Top.css"

function Head() {
  return (
    <div class="container-fluid  sticky-top  shadow-sm  head">
    <div class="container ">
        <nav class="navbar navbar-expand-lg  navbar-light py-3 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0  text-primary"><Link to="/">EverPeakIt</Link>
                </h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">

                  <Link class="nav-link" to="/">Home</Link>
                    <Link class="nav-link"  to="/doctors">Doctors</Link>
                    <Link class="nav-link" to="/patientsall">PatientsAll</Link>
                    <Link class="nav-link" to="/registration">Registration</Link>
                    <Link class="nav-link" to="/adminregistration">Admin Registration</Link>
                    <Link class="nav-link" to="/login">Login</Link>
                    {/* <a class="nav-item nav-link"><Link to="/doctor_search">Doctor_search</Link></a> */}

                </div>
            </div>
       </nav>
    </div>
</div>
  )
}

export default Head
