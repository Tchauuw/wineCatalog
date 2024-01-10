import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = (props) => {

    const {
      onLogin
    } = props;

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (event) => {
      setLogin(event.target.value);
      onLogin();
    };
  
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };

    const location = useLocation();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (login !== "" && password !== "") {
        props.onLogin({
          login,
          password,
        });
      }
      
      { location.state && navigate(location.state.from); }
  
    };

    
    return (
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </section>
      </form>
    );
  };
  

const Logout = props => {

  const navigate = useNavigate();

  const handleLogout = () => {
      if (props.onLogout) {
          props.onLogout();
      }
        
      navigate("/");
  }

  return (
    <div>
      <h2>Logout</h2>
      <p>Êtes-vous sûr de vouloir vous déconnecter?</p>
      <button type="button" onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}

export {Login, Logout};