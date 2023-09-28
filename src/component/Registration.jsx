import { useState } from 'react';
import axios from 'axios';

function Register() {

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
    let userDetails = { "name": name, "email": email, "mo_no": mo_no, "location": location, "specilization": specilization, "fees": fees, "pasword": password, "image": image };
console.log(userDetails)
    axios.post("http://localhost:3000/doctors/", userDetails).then((response) => {
      console.log(response.data);
      console.log(response.data.image);
      setOutput("FORM SUBMIT SUCCESSFULLY");
      setName('');
      setEmail('');
      setMobile('');
      setLocation('');
      setPassword('');
      setFees('');
      setImage('');
    }).catch((err) => {
      console.log(err);
    });

  }

  return (
    <div>
      {/* About Start */}
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div className="col-lg-12">
            <br />
            <h1 className="display-5 mb-4">Doctor can Register <span className="text-primary">Here!!!</span></h1>
            <font style={{ "color": "white" }}>{output}</font>

            <div className='container-sm'>
              <p>{name}</p>
              <p>{mo_no}</p>
              <p>{email}</p>
              <p>{location}</p>
              <p>{fees}</p>
              {/* <p>{image}</p> */}
              <p>{specilization}</p>
              {/* <p>{output}</p> */}
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
                  <label htmlFor="specilization">specilization:</label>
                  <input type="text" className="form-control" value={specilization} onChange={e => setSpecilization(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile No:</label>
                  <input type="number" className="form-control" value={mo_no} onChange={e => setMobile(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <textarea rows="5" className="form-control" value={location} onChange={e => setLocation(e.target.value)}></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="fees">Fees :</label>
                  <input type="number" className="form-control" value={fees} onChange={e => setFees(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Create Password :</label>
                  <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Image :</label>
                  <input type="file" className="form-control" onChange={e => {
                    console.log("imae-----",   e.target.files[0].name)
                    setImage(e.target.files[0].name);
                    // setImage(e.target.value);
                  }} />
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            </div>

            <br /><br />
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}

export default Register;