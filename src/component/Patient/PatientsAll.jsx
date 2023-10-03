import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function PatientsAll(props) {
  const navigate = useNavigate()
  const [list, setList] = useState([]);
  const [status, setStatus] = useState();
  const [api, setApi] = useState("http://localhost:3000/patients");
  useEffect(() => {
    getData()
  }, []);

  function getData(params) {
    const token = localStorage.getItem("admin:token");
    if(!token) 
    navigate("/login")
    console.log(token);
    axios.get(api, {
      headers: {
        Authorization: "Bearer "+token
    }
    }).then((response) => {
      // console.log(response.data);
      setList(response.data);
    });

  }

  function delete_pat(id) {
    axios.delete(`http://localhost:3000/patients/${id}`)
      .then((res) => {
        setStatus('Delete successful')
        console.log("delete id " + id)
        getData()
      }).catch((err) => console.log(err))
  }

  return (
    <div>
      <div className="container-fluid bg-secondary p-0">
        <div>
          {/* {JSON.stringify(list)} */}
          <h2>View & Manage Patients Details</h2>
          <p>{status}</p>
          <table className="table table-bordered  table-hover">
            <thead >
              <tr className="bg-secondary">
                <td >S.No</td>
                <td >Id</td>
                <td >Name</td>
                <td>Mo_no</td>
                <td>Email</td>
                <td>address</td>
                <td>gender</td>
                <td>Action</td>
              </tr>
            </thead>

            {
              list.map((row, i) => (
                <tbody>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.mo_no}</td>
                    <td>{row.address}</td>
                    <td>{row.gender}</td>
                    <td><button><Link to={"/patients/" + row.id}>show</Link></button>
                      {/* <button><Link to={"/update/"+row.id}>Edit</Link></button> */}
                      {/* <button><Link to={"/patients_delete/" + row.id}>Delete</Link></button> */}
                      {/* </td> */}
                      <button onClick={() => delete_pat(row.id)}>Delete</button>
                    </td>
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
