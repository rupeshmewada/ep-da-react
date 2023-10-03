import { useState } from 'react';
import axios from 'axios';

function Admin() {

  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let userDetails = { "name": name, "email": email, "mobile": mobile, "password": password };
    console.log(userDetails)
    axios.post("http://localhost:3000/super_admins/create/", userDetails).then((response) => {
      console.log(response.data);
      setOutput("FORM SUBMIT SUCCESSFULLY");
      // setName('');
      // setEmail('');
      // setMobile('');
      // setPassword('');
    }).catch((err) => {
      console.log(err);
    });

  }

  return (
    <div>

      <div className="container-fluid  " style={{ marginTop: "-8px" }} >
        <div className="row g-0">
          <div className="col-lg-12">
            <br />
            <h1 className="display-5 mb-4 text-center"> Admin Register <span className="text-primary">Here!!!</span></h1>
            <font style={{ "color": "white" }}>{output}</font>

            <div className='container-sm px-5'>
              {/* <p>{name}</p>
              <p>{email}</p>
              <p>{mobile}</p>
              <p>{password}</p> */}
              <p>{output}</p>

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
                  <input type="number" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Create Password :</label>
                  <input type="text" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <br />
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

export default Admin;