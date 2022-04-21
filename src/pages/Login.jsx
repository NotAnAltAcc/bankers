import React, { useState } from "react";


export default function Login() {
    const authinfo = {
        "user1": "password123"
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (password === authinfo[username]) {
            alert('signed in')
        } else {
            alert('fat l')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
          <label>
            Username:
            <input type="username" value={username} 
                onChange={(e) => {setUsername(e.target.value)}} required
                placeholder="Enter username here " />
          </label>
          <br/>
          <label>
            Password:
            <input type="password" value={password} 
                onChange={(e) => {setPassword(e.target.value)}} required
                placeholder="Enter password here " />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      );
}