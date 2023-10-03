import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Doctors(props) {
  const [list, setList] = useState([]);
  const [apiURL, setApiURL] = useState("http://localhost:3000/doctors");
  const [del_doctor, setDel_doctor] = useState("http://localhost:3000/doctors");

  useEffect(() => {
    getData()
  }, []);

  function getData(params) {
    axios
      .get(apiURL).then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((error) => {
        console.log("Invalid url resource invoked");
      });

  }

  function delete_doctor(id) {
    axios.delete(`del_doctor/${id}`)
    .then((res) => {
        getData()
        // setStatus('Delete successful')
        console.log("delete id " + id)
        alert("delete id " + id)
      }).catch((err) => console.log(err))
  }

  return (
    
    <div style={{marginTop:"-8px"}}>
   
      <h2 className="bg-secondary mb-0">View & Manage Doctor Details</h2>
      <table class="table bg-info">
        <tr className="bg-secondary">
          <td >id</td>
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
            <tr>
              <td>{row.id}</td>
              {/* <td>{row.password}</td> */}
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.specilization}</td>
              <td>{row.mo_no}</td>
              <td>{row.location}</td>
              <td>{row.fees}</td>
              <td className="text-center"><button className=""><Link to={"/doctor/" + row.id}>show</Link></button>
                {/* <button className="bg-warning"><Link to={"appointment/"+row.id}>Appointment</Link></button> */}
                {/* <button className="bg-warning"><Link to={"/doctor/appointments/"+row.id}>All Apointments</Link></button> */}
                <button className=" ms-3 "><Link  to={`/doctor/${row.id}/appointments`}>All Apointments</Link></button>
                {/* <button className=" ms-3"><Link to={`/doctor/${row.id}`}>Delete </Link></button> */}
                <button className=" ms-3" onClick={() => delete_doctor(row.id)}>Delete</button>

              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Doctors;
