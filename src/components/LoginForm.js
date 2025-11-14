import React, { useState } from "react";

export default function LoginForm({ handleLogin }) {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username"
                placeholder="username" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password"
                placeholder="password" 
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
}