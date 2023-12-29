import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Login } from './Auth';

const Layout = props => {

    const { user, onLogout } = props;

    return <>
    <nav fx="">
        <header>
            <a href="/"><img src={logo} alt="React-Wines logo" /></a>
        </header>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/view/random">Random</Link>
                </li>
                <li>
                {user.isLoggedIn ? (
                    <Link to="/logout" onClick={onLogout}>Logout</Link>
                    ) : (
                    <Link to="/login">Login</Link>
                )}
                </li>
            </ul>
        </div>
    </nav>
    <main>
        { user.isLoggedIn ? props.children : <Login onLogin={props.onLogin} />}
    </main>
    <footer>
        <p>La Rochelle Université</p>
    </footer>
</>

}
export default Layout