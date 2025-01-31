import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Api(){
    const [cours,setcours] = useState('')


    useEffect{
        axios.get(' https://www.robotstxt.org/robotstxt.html');
        .then((A)=>setcours(A.data))

    }
}