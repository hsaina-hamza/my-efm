import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Api() {
    const [cours, setcours] = useState([]);
    const [id, setid] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
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
                .map((c, i) => (
                    <div key={c.id}>
                        <p>{c.id}</p>
                        <p>{c.name}</p>
                        <p>{c.email}</p>
                        <p>{c.body}</p>
                    </div>
                ))}
        </>
    );
}
