import styles from './NavBar.module.scss';
import Container from "../Container/Container.js";
import { Link, NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <nav className={ styles.navbar }>
            <Container>
                <div className={ styles.navbarWrapper }>
                    <button className={ styles.navbarHamburger }>
                        <i className='fa fa-bars'></i>
                    </button>
                    <ul className={ styles.navbarLinks }>
                        <li>
                            <NavLink 
                                className={ ({ isActive }) => isActive ? styles.linkActive : ''  } 
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={ ({ isActive }) => isActive ? styles.linkActive : ''  } 
                                to="/favorite"
                            >
                                Favorite
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={ ({ isActive }) => isActive ? styles.linkActive : ''  } 
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default NavBar;