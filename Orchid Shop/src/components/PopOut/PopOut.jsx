import styles from './PopOut.module.css';

function PopOut(props) {
    return (
        <div className={props.show ? styles.popOut : styles.popOutHidden}>
            <div className={styles.popOutContent}>
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
                    <img src={props.img} alt={props.name} />
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
                <div className={styles.x} onClick={props.onClose}><i className='bx bx-x' ></i></div>
            </div>
        </div>
    );
}

export default PopOut;