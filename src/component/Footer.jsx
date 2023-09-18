import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

    return (
        <div>
            <div class="container-fluid bg-dark text-light mt-5 py-5">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-4 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Get In Touch
                            </h4>
                            <p class="mb-4"></p>
                            <p class="mb-2">
                                <i class="fa fa-map-marker-alt text-primary me-3"></i>
                                EverPeakIt solution 
                            </p>
                            <p class="mb-2">
                                <i class="fa fa-envelope text-primary me-3"></i>
                                Indore(M.P) India
                            </p>
                            <p class="mb-0">
                                <i class="fa fa-phone-alt text-primary me-3"></i>+91 1234567890
                            </p>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Quick Links
                            </h4>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-light mb-2">
                                    <i class="fa fa-angle-right me-2"></i>
                                    <Link to="/" className='link-light'>Home</Link>
                                </a>
                                <a class="text-light mb-2">
                                    <i class="fa fa-angle-right me-2"></i>
                                    <Link to="/About" className='link-light'>About </Link>
                                </a>
                                <a class="text-light mb-2">
                                    <i class="fa fa-angle-right me-2"></i>
                                    <Link to="/contact" className='link-light'>Contact</Link>
                                </a>
                                <a class="text-light mb-2">
                                    <i class="fa fa-angle-right me-2"></i>
                                    <Link to="/service" className='link-light'>Service</Link>
                                </a>
                                <a class="text-light mb-2">
                                    <i class="fa fa-angle-right me-2"></i>
                                    <Link to="/Register" className='link-light'>Register</Link>
                                </a>
                                <a class="text-light mb-2">
                                    <i class="fa fa-angle-right me-2"></i>
                                    <Link to="/Login" className='link-light'>Login</Link>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                                Newsletter
                            </h4>
                            <form action="">
                                <div class="input-group">
                                    <input
                                        type="text"
                                        class="form-control p-3 border-0"
                                        placeholder="Your Email Address"
                                    />
                                    <button class="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <h6 class="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div class="d-flex">
                                <a
                                    class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                                    href="#"
                                >
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a
                                    class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                                    href="#"
                                >
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                                    href="#"
                                >
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a
                                    class="btn btn-lg btn-primary btn-lg-square rounded-circle"
                                    href="#"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-light border-top border-secondary py-4">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="mb-md-0">
                                &copy;{" "}
                                <a class="text-primary" href="#">
                                    Your Site Name
                                </a>
                                . All Rights Reserved.
                            </p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <p class="mb-0">
                                Designed by{" "}
                                <a class="text-primary" href="">
                                    ReactJs
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
