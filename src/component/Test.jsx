import axios from "axios";
import React, { useEffect, useState } from "react";

function Test(props) {
  // const [data, setData] = useState([]);
  const [api, setApi] = useState("http://localhost:3000/tests");
  const [name, setName] = useState("");
  const [no, setNo] = useState("");


  function handle(e)
{
e.preventDefault()
  let coll = { "name": name, "no": no};
axios.post(api,coll).then((res) => {
    console.log(res.data);
}).catch((err)=>
console.log(err.message))
}



  return (
      <div>
      <p>test page</p>
      <p>{name}</p>
      <p>{no}</p>

      <form action="" onSubmit={handle}>
        Name:
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <label htmlFor="num">num</label>
         :<input type="number" value={no}  onChange={(e) => setNo(e.target.value)} />
        <br />
       <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Test;
