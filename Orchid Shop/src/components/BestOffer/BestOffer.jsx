import styles from "./BestOffer.module.css";

function BestOffer() {
    return (
        <div className={styles.offer}>
            <div className="image">
                <img src="./assets/images/orch1.jpg" alt="pink orchid"/>
            </div>
            <h5>pink orchid</h5>
            <div className="prices">
                <p id="old-price">$50</p>
                <p id="new-price">$30</p>
            </div>
        </div>
    )
}

export default BestOffer