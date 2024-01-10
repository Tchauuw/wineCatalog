import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Layout = props => {

    const { user, onLogout, onLogin } = props;

    return <>
    <nav fx="">
        <header>
            <Link to="/"><img src={logo} alt="React-Wines logo" /></Link>
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
                    <Link to="/login" onClick={onLogin}>Login</Link>
                )}
                </li>
            </ul>
        </div>
    </nav>
    <main>
        { props.children }
    </main>
    <footer>
        <p>La Rochelle Université</p>
    </footer>
</>

}
export default Layout