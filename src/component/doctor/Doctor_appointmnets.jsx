import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Doctor_appointments(props) {
    const params = useParams()
    console.log(params.id)
    //   const id = params.id

    // console.log(one)
    const [list, setList] = useState([]);
    const [appo, setAppo] = useState([]);
    const [pat, setpat] = useState([]);
    const [image, setImage] = useState(null);
    const [api, setApi] = useState("http://localhost:3000/doctors/");
    const [doctors, setDoctors] = useState("http://localhost:3000/doctors/");
    const [patients, setpatients] = useState("http://localhost:3000/doctors/");

    // console.log(api)
    const [img, setImg] = useState("")

    useEffect(() => {
        axios.get(api + params.id).then((response) => {
            setList(response.data.doctor);
            setImage(response.data.image)
            console.log(response.data)
            console.log(response.data.doctor)
        });
        all_appo()
        allpatients()
    }, []);
    // http://localhost:3000/doctors/1/doctor_all_appointmentent

    function all_appo() {
        axios.get(`${doctors}+${params.id}/doctor_all_appointmentent`).then((response) => {
            setAppo(response.data);
            console.log(response.data[0])
        });
    }
    function allpatients() {
        axios.get(`${doctors}+${params.id}/doc_pat`).then((response) => {
            setpat(response.data);
            console.log(response.data[0])
        });
    }

    return (
        <div>

            <div className='container-fluid   '>
                <h1 className="text-center"> Doctors Details</h1>
                {/* DOctor info */}
                <div className="row">
                    <div className="col-6 px-5">
                        <h3><td className="text-primary">{"Dr. " + list.name}</td></h3>
                        <p><td className="text-primary">{list.specilization}</td></p>
                        <p><td>Address : <b>{list.location}</b></td></p>
                    </div>

                    <div className="col-6  ">
                        <p><td> contact no : <b>{list.mo_no}</b></td></p>
                        <p><td> contact no : <b>{list.i}</b></td></p>
                        <p><td>you can contact by Email  <b>{list.email}</b></td></p>
                    </div>
                </div>
                {/* doctor info end */}<br />

                <div>
                    <h2 className="bg-info">all appointments of {"Dr. " + list.name}</h2>

                    <div className="row">
                 
                    <div className="col-6 ps-5">
                    <table className="table ">
                            <thead>
                                <tr>
                                    <td>id</td>
                                    <td>name</td>
                                    <td>mo_no</td>
                                    <td>address</td>
                                    <td>email</td>
                                    <td>gender</td>
                                   
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    pat.map((row) =>
                                    (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.mo_no}</td>
                                            <td>{row.address}</td>
                                            <td>{row.email}</td>
                                            <td>{row.gender}</td>
                                           
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                    <div className="col-6 ">
                        <table className="table ">
                            <thead>
                                <tr>
                                    {/* <td>id</td>
                                    <td>name</td>
                                    <td>mo_no</td>
                                    <td>address</td>
                                    <td>email</td>
                                    <td>gender</td> */}
                                    <td>date</td>
                                    <td>time</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    appo.map((row) =>
                                    (
                                        <tr key={row.id}>
                                            {/* <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.mo_no}</td>
                                            <td>{row.address}</td>
                                            <td>{row.email}</td>
                                            <td>{row.gender}</td> */}
                                            <td>{row.date}</td>
                                            <td>{row.time}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>

                </div>
            </div>

        </div>

    );
}
export default Doctor_appointments;