import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Specific_patient(props) {
  const params = useParams()
  // console.log(params.id)
  const one = params.id
  console.log(one)
  const [list, setList] = useState([]);
  const [api, setApi] = useState("http://localhost:3000/patients/");
  console.log(api)

  useEffect(() => {
    axios.get(api + one).then((response) => {
      setList(response.data);
      console.log(response.data)
    });
  }, []);

  return (
    <div>
      <div className='container bg-secondary'>
        <div className="row">
          <div className="col-6">

            <h1>Specific Patient</h1>

            <tr><td><h3>Name : - {list.name}</h3></td></tr>
            <tr> <td><h3>Email : -{list.email}</h3></td></tr>
            <tr> <td><h3>Specilization : -{list.specilization}</h3></td></tr>
            <tr> <td><h3>address : -{list.address}</h3></td></tr>
            <tr> <td><h3>Mobile No : -{list.mo_no}</h3></td></tr>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Specific_patient;