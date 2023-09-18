import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PatientsAll(props) {
  const [list, setList] = useState([]);
  const [api, setApi] = useState("http://localhost:3000/patients");

  useEffect(() => {
    axios.get(api).then((response) => {
      console.log(response.data[0].name);
      setList(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container-fluid bg-secondary p-0">
        <div>
          {/* {JSON.stringify(list)} */}
          <h2>View & Manage Patients Details</h2>
          <table className="table table-bordered  table-hover">
            <thead >
              <tr className="bg-secondary">
                <td >Name</td>
                <td>Mo_no</td>
                <td>Email</td>
                <td>address</td>
                <td>gender</td>
                <td>Action</td>
              </tr>
            </thead>

            {
              list.map((row,i) => (
                  <tbody>
                  <tr key={i}> 
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mo_no}</td>
                  <td>{row.address}</td>
                  <td>{row.gender}</td>
                 <td><button><Link to={"/patients/"+row.id}>show</Link></button>
                <button><Link to={"/update/"+row.id}>Edit</Link></button></td>
                </tr>
              </tbody>
                ))
            }
          </table>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}

export default PatientsAll;
