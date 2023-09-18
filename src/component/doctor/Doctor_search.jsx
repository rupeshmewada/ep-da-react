import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Doctor_search(props) {
    const [specilization, setSpecilization] = useState("");
    const [location, setLocation] = useState("");
    const [list, setList] = useState([]);
    const [apiURL, setApiURL] = useState("http://localhost:3000/doctors/search");
    
    // let da={"location":location}
    function search(){
        console.log(`?${location && "location="+location+"&"}${specilization && "specilization="+specilization}`)
        axios
                .get(apiURL+`?${location && "location="+location+"&"}${specilization && "specilization="+specilization}`).then((response) => {
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
        <div  >
<p>{specilization}</p>
<p>{location}</p>
             
            <div class="input-group ">
                <input type="search" class="form-control p-2 " placeholder="serch city" onChange={e => setLocation(e.target.value)} aria-label="Search" aria-describedby="search-addon" />
                <select class="form-select form-select-sm" value={specilization} onChange={e => setSpecilization(e.target.value)} aria-label=".form-select-sm example">
                    <option >neurologist</option>
                    <option >Doctor</option>
                    <option >cardiology</option>
                    <option >urologist</option>
                </select>
       
                <button type="button" class="btn btn-outline-primary" onClick={search}>search</button>
            </div>

            <h2>View & Manage Doctor Details</h2>
            <table class="table table-bordered  table-hover">
                <tr className="bg-primary">
                    <td >Name</td>
                    <td>Email</td>
                    <td>Specilization</td>
                    <td>Mo_no</td>
                    <td>Location</td>
                    <td>Fees</td>
                   
                </tr>
                {
                    list.map((row) => (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.specilization}</td>
                            <td>{row.mo_no}</td>
                            <td>{row.location}</td>
                            <td>{row.fees}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default Doctor_search;
