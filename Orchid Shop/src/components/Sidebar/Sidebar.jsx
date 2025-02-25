import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <h1>Elenorchid</h1>

            <nav className={styles.nav}>
                <ul>

                    <li>
                        <a href="/dashboard">
                            <span>
                                <i class='bx bx-square-rounded' ></i>
                                <i class='bx bx-square-rounded' ></i>
                                <i class='bx bx-square-rounded' ></i>
                                <i class='bx bx-square-rounded' ></i>
                            </span>
                            dashboard
                        </a>
                    </li>
                    <li><a href="/orders"><i class='bx bx-check-square'></i>orders</a></li>
                    <li><a href="/favorites"><i class='bx bx-heart'></i>favorites</a></li>
                    <li><a href="/cart"><i class='bx bx-cart' ></i>cart</a></li>
                    
                </ul>

                <div className={styles.logout}><a href="/introduction"><i class='bx bx-log-out' ></i>log out</a></div>
            </nav>
        </div>
    );
}

export default Sidebar