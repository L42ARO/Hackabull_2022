import React, { useState, useEffect, useRef} from 'react';

interface Leader {
    id: number,
    firstname: string,
    lastname: string,
    email: string
    password: string
}

export default function UserAuth() {

    const [leaders, setLeaders] = useState([] as Leader[]);
    let emailInput = useRef<HTMLInputElement>(null); 
    let passwordInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        fetch('/.netlify/functions/getUsers')
            .then(response => response.json() as Promise<Leader[]>)
            .then(data => setLeaders(data));
    }, []);
    function handleLogIn(e: React.ChangeEvent<any>) {
        e.preventDefault();
        if (emailInput.current != null && passwordInput.current != null) {
       
            leaders.forEach(leader => {
                if (leader.email === emailInput?.current?.value && leader.password === passwordInput?.current?.value) {
                    console.log("Logged in");
                }else{
                    console.log("Wrong credentials");
                }
            });
        }
        else{
            console.log("No credentials");
        }

    }
    return <>
        <h2>Welcome Back</h2>
        <h3>Login</h3>
        <input  ref={emailInput} placeholder="Username"></input>
        <input type="text" ref={passwordInput} placeholder="Password"></input>
        <button type="button" onClick={handleLogIn}>LOGIN</button>
        <button type="button">Sign Up</button>  
        
    </>
}