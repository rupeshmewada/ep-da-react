import React from "react";
import { Link } from "react-router-dom";
// import "./Head.css"

function Head() {
  return (
    <div class="container-fluid sticky-top bg-white shadow-sm">
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0  text-primary"><i class="fa fa-clinic-medical me-2"></i>EverPeakIt
                </h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">

                  <a class="nav-item nav-link"><Link to="/">Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/nav">Nav</Link></a>
                    <a class="nav-item nav-link"><Link to="/login">Login</Link></a>

                </div>
            </div>
       </nav>
    </div>
</div>
  )
}

export default Head
