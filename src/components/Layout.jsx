import { Route, Routes } from 'react-router-dom';
import logo from '../assets/logo.png'
import Review from "./Review";
import ReviewList from "./ReviewList";

const Layout = props => {

    return <>
    <nav fx="">
        <header>
            <a href="/"><img src={logo} alt="React-Wines logo" /></a>
        </header>
        <div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/view">Random</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    <main>
        {props.children}
    </main>
    <footer>
        <p>La Rochelle Université</p>
    </footer>
</>

}
export default Layout