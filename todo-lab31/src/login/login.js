import React, { usesContext, useState } from 'react';
import { LoginContext } from './context';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginContext = useContext(LoginContext);

    const handleSubmit = e => {
        e.preventDefault();
        // Send username and Password to context
        loginContext.login(username, password);
    }

    const handleNameChange = e => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} type="text" name="name"/>
            <input onChange={handlePasswordChange} type="password" name="password"/>
            <button>Sign In</button>
        </form>
    )
}

export default Login;
