import React, { Component } from 'react';
class Login extends Component {

    constructor() {
        super();
        this.state = { username: "", password: "", feedback: "" };
    }

    handleLogin = e => {
        e.preventDefault();
        console.log("logging in", this.state.username, this.state.password);
        const feedback = `Thanks for logging in with username: "${this.state.username
            }" and password: "${this.state.password}."`;
        this.setState({ feedback });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button className="button" type="submit">
                        Login
                    </button>
                </form>
                {this.state.feedback && <p>{this.state.feedback}</p>}
            </div>
        );
    }
}

export default Login;
