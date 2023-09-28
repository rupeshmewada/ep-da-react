import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
// import img1 from "../../images/c.jpeg"



function Specific_Doctor(props) {
  const params = useParams()
  console.log(params.id)
  // const id = params.id

  // console.log(one)
  const [list, setList] = useState([]);
  const [image, setImage] = useState(null);
  const [api, setApi] = useState("http://localhost:3000/doctors/");
  // console.log(api)
  const [img, setImg] = useState("")

  useEffect(() => {
    axios.get(api + params.id).then((response) => {
      setList(response.data.doctor);
      setImage(response.data.image)
      console.log(response.data)
      console.log(response.data.doctor)
    });

    // axios.get(api + params.id + "/image", { responseType: 'blob' }).then(async (res) => {
    //   const url = URL.createObjectURL(res.data);
    //   setImg(url);
    //   console.log(url)
    // })


  }, []);
  console.log("-----------",list.image)

  return (
    <div>

      <div className='container-fluid   '>
            <h1 className="text-center"> Doctors Details</h1>
        <div className="row">
            {/* DOctor info */}
          <div className="col-6 px-5">
           
            <h3><td className="text-primary">{"Dr. "+list.name}</td></h3>
            <p><td className="text-primary">{list.specilization}</td></p>
            <p><td>Address : <b>{list.location}</b></td></p>
            <p><td> contact no : <b>{list.mo_no}</b></td></p>
            <p><td> contact no : <b>{list.i}</b></td></p>
            {/* <p><td>Image: <img src={list.image} alt="image not found" /></td></p> */}
          {/* <img src={} alt="" /><br/><br/> */}
            <p><td>you can contact by Email  <b>{list.email}</b></td></p>
          </div>
          {/* doctor info end */}

          <div className="col-6  ">
        {/* <img src={img} className="text-center rounded mx-auto  d-block"/> */}
          {/* <img src={img1} alt="" /><br/><br/> */}
          <p><td> {image ? <img src={image} alt="image not found" />:""}</td></p>

          <button className="btn btn-info px-5"><Link to={"/doctors/appointment/"+params.id  }>Appointment</Link></button>
       
        </div>
        </div>

      </div>
  
      </div>

      );
    }
      export default Specific_Doctor;