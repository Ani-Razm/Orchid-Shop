import styles from './Product.module.css';
import PopOut from '../PopOut/PopOut';

import orch5 from '../../assets/images/png/orch5.png';

const infos = [
    {
        name: "Purple Orchid",
        description:
            "An exotic and elegant addition to your home, this orchid boasts stunning purple blooms with intricate detailing.",
        price: "25.99",
        care: {
            watering: "Water once a week, allowing soil to dry slightly.",
            sunlight: "Prefers bright, indirect sunlight.",
            temperature: "Thrives in temperatures between 65°F and 75°F.",
            tips: "Fertilize every two weeks during the growing season."
        },
        image: orch5,
    },
]

import { useState } from 'react';


function Product(product) {
    const [showPopOut, setShowPopOut] = useState(false);
    const toggle = () => {
        setShowPopOut(!showPopOut);
        console.log(showPopOut)
    }
    return (

        <>
            <PopOut
                show={showPopOut}
                care={infos[0].care}
                img={infos[0].image}
                name={infos[0].name}
                description={infos[0].description}
                price={infos[0].price}
                addToCart={() => console.log('Added to cart')}
                onClose={() => {
                    console.log('Closed')
                    toggle()
                }}
            />
            <div className={styles.product}>
                <div className="info" onClick={() => {
                    console.log('show product')
                    toggle();
                    console.log(styles.showPopOut)
                }}><i className='bx bx-chevron-right'></i></div>
                <img src={product.image} alt={product.name} />
                <div className={styles.title}>{product.name}</div>
            </div>
        </>
    );
}

export default Product