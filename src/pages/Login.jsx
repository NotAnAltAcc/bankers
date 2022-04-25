import React, { useContext, useState } from "react";
import { UserContext } from "../App";


export default function Login() {
    const authinfo = {
        "user1": "password123"
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [user, setUser] = useContext(UserContext);
    
    const handleSubmit = (e, type) => {
        e.preventDefault();
        switch(type) {
            case "login":
                if (password === authinfo[username]) {
                    setUser({
                        "username": username,
                        "id": 1,
                        "cookie": "what'shappeningbiatches" 
                    })

                    setPassword('')
                    alert('signed in')
                } else {
                    alert('fat l')
                }
                break;
                case "logout":
                    setUser(null);
                    break;
            default:
                // fat L
        }
        
    }

    return (
        <>
        {!user ?
        
        <form onSubmit={e => handleSubmit(e, "login")}>
        
        <h2>Login {user ? "- Currently Logged In as " + user['username'] : ""}</h2>
        
          <label>
                        Username:
                        <input type="username" value={username}
                            onChange={(e) => { setUsername(e.target.value); } } required
                            placeholder="Enter username here " />
                    </label><br /><label>
                            Password:
                            <input type="password" value={password}
                                onChange={(e) => { setPassword(e.target.value); } } required
                                placeholder="Enter password here " />
                        </label><br /><input type="submit" value="Submit" />
        </form>
        
          :
         <form onSubmit={e => handleSubmit(e, "logout")}>
             <h2>{"Login - Currently Logged In as " + user['username']}</h2>
             <input type="submit" value="Logout"/>
         </form>
    
        }
        <br/><br/><br/>


        {!user &&
        <form onSubmit={e => handleSubmit(e, "register")}>
        <h2>Register (dosen't work)</h2>
        <label>
            Username:
            <input type="username" value={regUsername} 
                onChange={(e) => {setRegUsername(e.target.value)}} required
                placeholder="Enter username here " />
        </label>
        <br/>
        <label>
            Password:
            <input type="password" value={regPassword} 
                onChange={(e) => {setRegPassword(e.target.value)}} required
                placeholder="Enter password here " />
        </label>
        <br/>
        <input type="submit" value="Submit" />
        </form>
}   
        </>
      );
}