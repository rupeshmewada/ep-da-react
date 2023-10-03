import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function Login(props) {
  const [output, setOutput] = useState();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const api = "http://localhost:3000/auth/admin_login"


  let user_details = {"email":email, "password":password }
  console.log(`user details ${user_details} `)
  
  function handleSubmit(evt) {
    evt.preventDefault();
    axios.post(api, user_details).then((res)=>
  {
    console.log(res.data)
    localStorage.setItem("admin:token", res.data.token)
    alert(user_details)
  }).catch((err) => {
    console.log(err);
  });
  
}

  return (

    <div id="login">
      <Link to="/registration">Register here</Link>
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">

        <div id="login-column" className="col-md-5 " style={{ marginLeft: "300px", marginTop: "-50px" }} >
          {email}
          {password}

          <form onSubmit={handleSubmit} >
            <h3 className="text-center">Login</h3>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" id='name' className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div><br />

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="text" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
            </div><br />

            <div className="form-group">
              {/* <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" /> */}
              <button className="btn btn-info btn-md">Submit</button>
            </div><br />

          </form>
        </div>
      </div>
    </div>


  );
}

export default Login;
{/* <div className="form-group">
              <label for="password" >Password:</label><br />
              <input type="text" name="password" id="password" class="form-control" />
            </div><br /> */}