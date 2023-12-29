import { useState } from "react";

const Login = props => {

    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    
    const handleLogin = event => {
        setLogin(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.onLogin({
            login,
            password
        })
    }

    return<form onSubmit={handleSubmit}>
        <section data-name="adding">
            <input 
                type="text" 
                placeholder="Login"
                value={login}
                onChange={handleLogin}
            />
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={handlePassword}
            />
            <button 
                type="submit" 
            >Login</button>
        </section>
    </form>
}

const Logout = props => {

    const handleLogout = () => {
        if(props.onLogout){
            props.onLogout();
        }
    }

    return<div>
        <h2>Logout</h2>
        <p>Êtes-vous sûr de vouloir vous déconnecter?</p>
    <button onClick={handleLogout}>Se déconnecter</button>
    </div>
}

export {Login, Logout};