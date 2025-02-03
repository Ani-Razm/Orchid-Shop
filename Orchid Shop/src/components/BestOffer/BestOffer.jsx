import styles from "./BestOffer.module.css";

function BestOffer(props) {
    return (
        <div className={styles.offer}>
            <div className={styles.image}>
                <img src={props.img} alt="pink orchid"/>
            </div>
            <h5>pink orchid</h5>
            <div className={styles.prices}>
                <p className={styles.Oldprice}>$52</p>
                <p className={styles.newPrice}>$29</p>
            </div>
        </div>
    )
}

export default BestOffer