// generate a functional react component
import React from 'react';
import { Button } from 'primereact/button';
import { useAuth0 } from "@auth0/auth0-react";
import '../Login.css'

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
        <Button label="Log In" onClick={() => loginWithRedirect()} />
        </>
    )
}

export default Login
