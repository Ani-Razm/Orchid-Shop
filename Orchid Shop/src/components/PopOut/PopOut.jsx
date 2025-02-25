import styles from './PopOut.module.css';
import SearchBar from '../SearchBar/searchBar';
import Sidebar from '../Sidebar/Sidebar';

function PopOut(props) {
    return (

        <div className={styles.popOut}>
            <Sidebar></Sidebar>
            <SearchBar></SearchBar>

            <div className={styles.popOutContent} onClick={props.onClose}>
                <div className={styles.infos}>

                    <div className={styles.info}>
                        <i className='bx bx-droplet' ></i>
                        <div>
                            <h3>Watering</h3>
                            <p>{props.care.watering}</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <i className='bx bx-sun' ></i>
                        <div>
                            <h3>Sunlight</h3>
                            <p>{props.care.sunlight}</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <i className='bx bxs-thermometer'></i>
                        <div>
                            <h3>Temperature</h3>
                            <p>{props.care.temperature}</p>
                        </div>

                    </div>
                    <div className={styles.info}>
                        <i className='bx bx-leaf'></i>
                        <div>
                            <h3>Care Tips</h3>
                            <p>{props.care.tips}</p>
                        </div>

                    </div>

                </div>
                <div className={styles.img}>
                    <img src={props.image} alt={props.name} />
                </div>
                <div className={styles.mainContent}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p className={styles.price}>Price: ${props.price}</p>
                    <div className={styles.buttons}>
                        <button onClick={props.addToCart}>Buy</button>
                        <button>Add To Favorites </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopOut;