import React, { useState } from "react";

export default function LoginWithHooks() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState("");
    const handleLogin = e => {
        e.preventDefault();
        console.log("logging in with hooks", username, password);
        const feedback = `Thanks for logging in with username: "${username}" and password: "${password}."`;
        setFeedback(feedback);
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="button" type="submit">
                    Login
                </button>
            </form>
            {feedback && <p>{feedback}</p>}
        </div>
    );
}
