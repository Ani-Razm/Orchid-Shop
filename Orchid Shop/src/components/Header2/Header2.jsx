import styles from './Header2.module.css';

function Header2() {
    return (
        <div className={styles.header}>
            <div className="top">
                <h3>Welcome!</h3>
                <p>hello Ani, Shop some of our newest flowers</p>
            </div>

            <div className={styles.cover}>
                <h2>best orchid shop</h2>
            </div>
        </div>
    );
}

export default Header2