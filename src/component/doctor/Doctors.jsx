import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Doctors(props) {
  const [list, setList] = useState([]);
  const [apiURL, setApiURL] = useState("http://localhost:3000/doctors");

    useEffect(() => {
    axios
      .get(apiURL).then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((error) => {
        console.log("Invalid url resource invoked");
      })
    },[apiURL]);


  return (
    <div>
      {/* {JSON.stringify(list)} */}
      <h2>View & Manage Doctor Details</h2>
      <table class="table table-bordered  table-hover">
        <tr className="bg-primary">
         <td >Name</td>
         <td>Email</td>
         <td>Specilization</td>
         <td>Mo_no</td>
         <td>Location</td>
         <td>Fees</td>
         <td>Image</td>
         <td>Action</td>
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
            <td>{row.fees}</td>
            <td><button><Link to={"/doctor/"+row.id}>show</Link></button>
                {/* <button><Link to={"update/"+row.id}>Edit</Link></button></td> */}
                <button className="bg-warning"><Link to={"appointment/"+row.id}>Appointment</Link></button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Doctors;
