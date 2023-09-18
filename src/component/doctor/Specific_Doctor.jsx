import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Specific_Doctor(props) {
  const params = useParams()
  console.log(params.id)
  // const id = params.id

  // console.log(one)
  const [list, setList] = useState([]);
  const [api, setApi] = useState("http://localhost:3000/doctors/");
  // console.log(api)
  const [img, setImg] = useState("")

  useEffect(() => {
    axios.get(api + params.id).then((response) => {
      setList(response.data);
      console.log(response.data)
    });

    axios.get(api + params.id + "/image", { responseType: 'blob' }).then(async (res) => {
      const url = URL.createObjectURL(res.data);
      setImg(url);
      console.log(url)
    })


  }, []);

  return (
    <div>

      <div className='container-fluid bg-secondary  '>
            <h1 className="text-center">Specific Doctors</h1>
        <div className="row">
            {/* DOctor info */}
          <div className="col-6 bg-success">

            <tr><td><h3>Name : - {list.name}</h3></td></tr>
            <tr> <td><h3>Email : -{list.email}</h3></td></tr>
            <tr> <td><h3>Specilization : -{list.specilization}</h3></td></tr>
            <tr> <td><h3>fees : -{list.fees}</h3></td></tr>
            <tr> <td><h3>location : -{list.location}</h3></td></tr>
            <tr> <td><h3>Mobile No : -{list.mo_no}</h3></td></tr>
          </div>
          {/* doctor info end */}
          <div className="col-6 bg-primary ">
        <img src={img} className="text-center rounded mx-auto  d-block"/>
         
        </div>
        </div>

      </div>
  
      </div>

      );
    }
      export default Specific_Doctor;