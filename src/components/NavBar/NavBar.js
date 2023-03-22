import styles from './NavBar.module.scss';
import Container from "../Container/Container.js";

const NavBar = props => {
    return (
        <nav className={ styles.navbar }>
            <Container>
                <div className={ styles.navbarWrapper }>
                    <button className={ styles.navbarHamburger }>
                        <i className='fa fa-bars'></i>
                    </button>
                    <div className={ styles.navbarLinks }>
                        <a href="/" className={ styles.navbarLink }>Home</a>
                        <a href="/about" className={ styles.navbarLink }>Favourite</a>
                        <a href="/favorite" className={ styles.navbarLink }>About</a>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default NavBar;