import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PatientsAll from './PatientsAll';
import { Link } from 'react-router-dom';

function Patient_delete(props) {
    const param = useParams()
    console.log(param.id)
    const navigate = useNavigate()


    const [pat, setPat] = useState()

    // const url = "http://localhost:3000/patients/"

    function delItem(params) {   
        axios.delete(`http://localhost:3000/patients/${param.id}`).then((res) => {

            console.log("item delete successfully ")
            alert(`Item delete ${param.name} successfully`)
        }).catch((error) => {       
            // Handle error
            alert("error in delete")

            console.error('Error deleting item:', error);
        });
    }

    return (
        <div className="text-center">
        <h3>Are you sure to delete patient ?</h3>
            <button onClick={delItem } className="m-3">delete item </button>
            <button onClick={(e)=>navigate('/patientsAll')}>Cancel</button>

        </div>
    );
}

export default Patient_delete;