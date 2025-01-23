import BestOffer from "../../components/BestOffer/BestOffer";
import styles from "./OffersSection.module.css";

function OffersSection() {
    return (
        <>
            <div className="offers-section">
                <h3>get our 3 in one deal</h3>
                <p>hello Ani, Shop some of our newest flowers</p>
                <a href="/shop">Go To Shop</a>
                <div className="offers">
                    <BestOffer></BestOffer>
                    <BestOffer></BestOffer>
                    <BestOffer></BestOffer>
                    <BestOffer></BestOffer>
                    <BestOffer></BestOffer>
                </div>
            </div>
        </>
    )
}

export default OffersSection;