import React from 'react';
import { LinkText } from './styles';

const Login = () => {

    const logar = () => {
        localStorage.setItem('logado', 'true')
    }

    return (
        <div>
            <h1>Login</h1>
            <LinkText to={'/profile'}>profile </LinkText>
            <br />
            <br />
            <br />

            <button onClick={logar}>Logar</button>

        </div>
    );
}

export default Login;