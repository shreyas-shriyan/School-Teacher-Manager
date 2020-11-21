import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

export default function Login(props) {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    return (
        <div>
            <div style={{ margin: "50px 30%", border: "1px solid orange", borderRadius: "7px" }}>
                <h1>Login</h1>
                <div>Username</div>
                <input value={username} onChange={(e) => setusername(e.target.value)} style={{ marginTop: "10px" }} placeholder="enter username"></input>
                <div style={{ marginTop: "10px" }}>Password</div>
                <input value={password} onChange={(e) => setpassword(e.target.value)} style={{ marginTop: "10px" }} type="password" placeholder="enter username"></input>
                <div style={{ margin: "20px 0" }}>
                    <button onClick={() => props.history.push("/home")} style={{ backgroundColor: "blue", color: "white", border: "none", padding: "10px", borderRadius: "6px" }}>Login</button>
                </div>
            </div>
        </div >
    )
}
