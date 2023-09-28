import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import img1 from "../../images/c.jpeg"

function Appointment(props) {
    const params = useParams()
    // console.log("param id" , params.id)

    const [output, setOutput] = useState();

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [mo_no, setpatMobile] = useState();
    const [address, setAddress] = useState([]);
    const [date, setDate] = useState([]);
    const [gender, setGender] = useState([]);
    const [list, setList] = useState([]);

    const [doc, setDoc] = useState([]);

    const docApi = ("http://localhost:3000/doctors/");
    const appId = (`http://localhost:3000/doctors/${params.id}/appointments/pat_create`);


    useEffect(() => {
        axios.get(docApi + params.id).then((response) => {
            setDoc(response.data);
            console.log(response.data)
        });

    }, []);

    let patient_details = { "name": name, "email": email, "mo_no": mo_no, "address": address, "gender": gender, };
    // console.log(name)
    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post(appId, patient_details).then((response) => {
            console.log(response.data)
            setList(response.data);
            setOutput("Form submit successfully");
            setname('');
            setemail('')
            setpatMobile('')
            setAddress('')
            setDate('')
            setGender('')
 
        }).catch((err) => {
            setOutput("Form not  successfully");

            console.log(err.message);
        });

    }

    return (
        <div className='container-fluid bg-secondary '>

            <div className='container-fluid '>
                <div className="row">
                    {/* DOctor info */}

                    <h3 className="text-white">ghjk{output}</h3>
                    <div className="col-6 bg-secondary">

                        <tr><td><img src={img1} alt="" /></td></tr><br />
                        <tr><td><h3>Name : - {doc.name}</h3></td></tr>
                        <tr> <td><h3>Email : -{doc.email}</h3></td></tr>
                        <tr> <td><h3>Specilization : -{doc.specilization}</h3></td></tr>
                        <tr> <td><h3>fees : -{doc.fees}</h3></td></tr>
                        <tr> <td><h3>location : -{doc.location}</h3></td></tr>
                        <tr> <td><h3>Mobile No : -{doc.mo_no}</h3></td></tr>
                    </div>
                    {/* doctor info end */}

                    {/* patient appointment */}
                    <div className="col-6 ">
                        <h1>Enter your  info here!</h1>
                        {/* <p>{name}</p>
                    <p>{email}</p>
                    <p>{mo_no}</p>
                    <p>{gender}</p> */}
                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" value={name} onChange={e => setname(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input type="email" className="form-control" value={email} onChange={e => setemail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Mobile no:</label>
                                <input type="number" className="form-control" value={mo_no} onChange={e => setpatMobile(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Address no:</label>
                                <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Date :</label>
                                <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender">Gender :</label>
                                <input type="text" className="form-control" value={gender} onChange={e => setGender(e.target.value)} />
                            </div>


                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>

                    {/* patient end  */}

                </div>

            </div>

        </div>

    );
}
export default Appointment;