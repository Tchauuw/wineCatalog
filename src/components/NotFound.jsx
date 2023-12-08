import { Link } from "react-router-dom"

const NotFound = () => {
    return<div>
        <p>Page introuvable</p>
        <Link to="/">Retour à la page d'accueil</Link>
    </div>
}

export default NotFound