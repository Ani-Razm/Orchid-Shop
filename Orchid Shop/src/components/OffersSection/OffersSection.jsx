import BestOffer from "../../components/BestOffer/BestOffer";
import styles from "./OffersSection.module.css";

import orchid6 from '../../assets/images/orch6.jpg';
import orchid8 from '../../assets/images/orch8.jpg';
import orchid9 from '../../assets/images/orch9.jpg';
import orchid10 from '../../assets/images/orch10.jpg';
import orchid11 from '../../assets/images/orch11.jpg';


function OffersSection() {
    return (
        <>
            <div className={styles.offersSection}>
                <div className={styles.offer}>
                    <h3>get our 3 in one deal</h3>
                    <p>hello Ani, Shop some of our newest flowers</p>
                    <a href="/shop">Go To Shop</a>
                </div>

                <h3>Offers</h3>
                <div>
                    <BestOffer img={orchid10}></BestOffer>
                    <BestOffer img={orchid6}></BestOffer>
                    <BestOffer img={orchid8}></BestOffer>
                    <BestOffer img={orchid9}></BestOffer>
                    <BestOffer img={orchid11}></BestOffer>
                </div>
            </div>
        </>
    )
}

export default OffersSection;