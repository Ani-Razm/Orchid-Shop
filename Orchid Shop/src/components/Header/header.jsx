import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    const scrollToSection = (id) => {  
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <header>
            <a href="/introduction">
                <h1>ELENORCHID</h1>
            </a>

            <nav>
                <ul>
                    <li onClick={() => scrollToSection('about-us')}>About Us</li>
                    <li onClick={() => scrollToSection('about')}>About Orchids</li>
                    <li onClick={() => scrollToSection('shop')}>Shop</li>
                </ul>

                <div className={styles.buttons}>

                    <Link to="/login">
                        <div id={styles.login}>
                            <p>Log In</p>
                        </div>
                    </Link>

                    <Link to="/register">
                        <div id={styles.signup}>
                            <p>Sign Up</p>
                        </div>
                    </Link> 
                </div>
            </nav>
        </header>
    );
}

export default Header