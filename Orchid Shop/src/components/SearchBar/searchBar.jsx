import styles from './searchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search..." />

            <div className={styles.btns}>
                <div><i className='bx bx-cart' title='cart'></i></div>
                <div><i className='bx bx-bell' title='Notifications'></i></div>
                <div><i className='bx bx-user' title='Account'></i></div>
            </div>
        </div>

    );
}

export default SearchBar