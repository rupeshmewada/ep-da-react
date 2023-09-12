import React, { useEffect } from 'react';
import { useState } from 'react';

function FindDoctor(props) {
    const[list,setList] = useState([])
    useEffect(
        async ()=>
        {
            const responce = await fetch("http://localhost:3001/doctors");
            const ls = await responce.json();
            setList(ls);
        }, []
    )
    return (
        <div>
            {JSON.stringify(list)}
        </div>
    );
}

export default FindDoctor;