import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Api() {
    const [cours, setcours] = useState([]);
    const [id, setid] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments?')
            .then((response) => setcours(response.data))
    }, []);

    return (
        <>
            <input
                type="text"
                placeholder="Rechercher"
                onChange={(e) => setid(e.target.value)}
            />

            {cours.filter((c) => c.id.toString() === id) 
                .map((c) => (
                    <div key={c.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
                        <p><h2>Id:</h2> {c.id}</p>
                        <p><h2>Name:</h2> {c.name}</p>
                        <p><h2>Email:</h2> {c.email}</p>
                        <p><h2>Body:</h2> {c.body}</p>
                    </div>
                ))}
        </>
    );
}
