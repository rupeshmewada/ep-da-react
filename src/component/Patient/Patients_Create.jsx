import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Patients_Create(props) {

  const [api, setApi] = useState("http://localhost:3000/patients")
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [mo_no, setMo_no] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    let userDetails = { "name": name, "email": email, "mo_no": mo_no, "address": address, "gender": gender };

    axios.post(api, userDetails).then((response) => {
      console.log(response.data);
      setOutput(response.data.result);
      setName('');
      setEmail('');
      setAddress('');
      setMo_no('');
    }).catch((err) => {
      console.log(err);
    });

  }

  return (

    <div>
      {/* About Start */}
      <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
          <div class="col-lg-12">
            <br />
            <h1 class="display-5 mb-4">Register <span class="text-primary">Here!!!</span></h1>
            <font style={{ "color": "blue" }}>{output}</font>

            <form onSubmit={handleSubmit} >
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div class="form-group">
                <label for="mo_no">Mobile No:</label>
                <input type="text" class="form-control" value={mo_no} onChange={e => setMo_no(e.target.value)} />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
              </div>

              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            <br /><br />
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}

export default Patients_Create;