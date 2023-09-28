import React, { useState } from 'react';
import img1 from "../images/a.jpeg"
import img2 from "../images/b.jpeg"
import img3 from "../images/c.jpeg"
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home(props) {

    const [specilization, setSpecilization] = useState("");
    const [location, setLocation] = useState("");
    const [list, setList] = useState([]);
    const [apiURL, setApiURL] = useState("http://localhost:3000/doctors/search");

    // let da={"location":location}
    function search() {
        console.log(`?${location && "location=" + location + "&"}${specilization && "specilization=" + specilization}`)
        axios
            .get(apiURL + `?${location && "location=" + location + "&"}${specilization && "specilization=" + specilization}`).then((response) => {
                console.log(apiURL);
                console.log(response);
                console.log(response.data);
                setList(response.data);
            })  
            .catch((error) => {
                console.log("Invalid url resource invoked");
            })
    }
    return (

        // return (
        <div  >

{/* search bar  */}
            <div className="input-group  " style={{ padding:"0px 30px",margin:"20px"}} >
                <input type="search" class="form-control p-2  border border-primary" placeholder="serch city" onChange={e => setLocation(e.target.value)} aria-label="Search" aria-describedby="search-addon" />
                <select class="form-select form-select-sm border border-primary" value={specilization} onChange={e => setSpecilization(e.target.value)} aria-label=".form-select-sm example">
                    <option value="">select any one</option>
                    <option value="neurologist">neurologist</option>
                    <option value="doc">doc</option>
                    <option value="cardiology">cardiology</option>
                    <option value="urologist">urologist</option>
                </select>

                <button type="button" class="btn btn-outline-primary" onClick={search}>search</button>
            </div>
{/* search bar end */}

{/* doctor table start */}
<div className="border border-secondary m-5 p-2">

            <h2>View & Manage Doctor Details</h2>
            <table class="table table-bordered  table-hover ">
                <tr className="fs-4">
                    <td >Name</td>
                    <td>Email</td>
                    <td>Specilization</td>
                    <td>Mo_no</td>
                    <td>Location</td>
                    <td>Fees</td>
                    <td className="text-center">Action</td>

                </tr>
                {
                    list.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.specilization}</td>
                            <td>{row.mo_no}</td>
                            <td>{row.location}</td>
                            <td>{row.fees}</td>
                            <td className="text-center">
                                <button className="btn btn-info"><Link to={"/doctor/" + row.id}>show</Link></button>
                                <button className="btn btn-info "><Link to={"doctors/appointment/" + row.id}>Appointment</Link></button></td>
                        </tr>
                    ))}
            </table>
</div>

{/* doctor table end */}


            {/* <div> */}

            <h1>Now you can consult Doctor online </h1>
            <div class="d-flex justify-content-around m-3" >
                <div>
                    <div class="card m-3" >
                        <img src={img2} class="card-img-top " alt="image not found" />
                        <div class="card-body">
                            <h5 class="card-title">Internal medicine</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card m-3" >
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pathology</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card m-3" >
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Skin Problems</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card m-3" >
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Crousels  */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner bg-secondary ">
                    <div class="carousel-item active">
                        <img src="img" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Home;