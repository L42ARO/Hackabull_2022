import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface Leader {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

function renderLeader(leader: Leader) {
    return <tr key={leader.id}>
        <td>{leader.id}</td>
        <td>{leader.firstName}</td>
        <td>{leader.lastName}</td>
        <td>{leader.email}</td>
    </tr>
}

export default function UserAuth() {

    const [leaders, setLeaders] = useState([] as Leader[]);

    useEffect(() => {
        fetch('/.netlify/functions/getUsers')
            .then(response => response.json() as Promise<Leader[]>)
            .then(data => setLeaders(data));
    }, []);
    console.log(typeof leaders);
    return <>
        <h2>UserAuth</h2>
        {leaders.length === 0 ? 
            <div>No leader scores to display. Would you like to <Link to="admin">add one</Link>?</div>
        :
            <table className="table leader-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.map(l => renderLeader(l))}
                </tbody>
            </table>
        }
    </>
}