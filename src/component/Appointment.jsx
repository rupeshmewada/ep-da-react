import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Appointment(props) {
    const params = useParams()
    console.log(params.id)

    const [list, setList] = useState([]);
    const [api, setApi] = useState("http://localhost:3000/doctors/");
    // console.log(api)
    const [img, setImg] = useState("")

    useEffect(() => {
        axios.get(api + params.id).then((response) => {
            setList(response.data);
            console.log(response.data)
        });


    }, []);


    const [output, setOutput] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mo_no, setMobile] = useState();
    const [location, setLocation] = useState();
    const [fees, setFees] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState([]);
    const [specilization, setSpecilization] = useState();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let userDetails = { "name": name, "email": email, "mo_no": mo_no, "location": location, "specilization": specilization, "fees": fees, "image": image[0] };


        axios.post("http://localhost:3000/doctors/", userDetails).then((response) => {
            console.log(response);
            setOutput(response.data.result);
            setName('');
            setEmail('');
            setMobile('');
            setLocation('');
            setFees('');
            setImage('');
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className='container-fluid bg-secondary '>

            <div className='container-fluid '>
                <div className="row">
                    {/* DOctor info */}
                    <div className="col-6 bg-secondary">

                        <tr><td><h3>Name : - {list.name}</h3></td></tr>
                        <tr> <td><h3>Email : -{list.email}</h3></td></tr>
                        <tr> <td><h3>Specilization : -{list.specilization}</h3></td></tr>
                        <tr> <td><h3>fees : -{list.fees}</h3></td></tr>
                        <tr> <td><h3>location : -{list.location}</h3></td></tr>
                        <tr> <td><h3>Mobile No : -{list.mo_no}</h3></td></tr>
                    </div>
                    {/* doctor info end */}

                    {/* patient appointment */}
                    <div className="col-6 ">
                        <h1>Enter patient info</h1>
                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                    
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile No:</label>
                                <input type="number" className="form-control" value={mo_no} onChange={e => setMobile(e.target.value)} />
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