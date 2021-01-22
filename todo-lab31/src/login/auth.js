import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from './context';

function Auth(props) {
    const [okToRender, setOkToRender] = setState(false);
    const loginContext = useContext(LoginContext);

    useEffect(() => {
        console.log('loginContext', loginContext);
        setOkToRender(
            loginContext.loggedIn && (props.capability ? loginContext.user.capabilities.includes(props.capability) : false)
        )
    }, [loginContext.loggedIn,props.capability])

    console.log(okToRender, loginContext.loggedIn);
    
    return(
        okToRender &&
        <div>{props.children}</div>
    )
}

export default Auth;

