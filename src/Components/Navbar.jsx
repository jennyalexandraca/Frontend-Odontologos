import { useContext } from "react"
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import ChangeModeButton from "./ChangeModeButton"

const Navbar = ({ toggleTheme }) => {

    const themeContext = useContext(ThemeContext)

    const handleTheme = () => {
        themeContext.dispatchTheme({
        type: themeContext.theme.color === 'light' ? 'SET_DARK' : 'SET_LIGHT',
        })
        toggleTheme()
    }

    return (
        <header >
            <nav className="flex">
                <div className="menu">
                <h1 className={`navbar-brand ${styles.navbarBrand}`}>
                    Clínica odontológica
                </h1>
                <ChangeModeButton onClick={handleTheme} />
                <hr/>
                    <div>
                        <ul>
                            <li>
                                <Link  to="/home">
                                    Home
                                </Link>
                            </li>
                            <li >
                                <Link to="/contacto">
                                    Contacto
                                </Link>
                            </li>
                            <li >
                            <Link  to="/destacados">
                                    Destacados
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar