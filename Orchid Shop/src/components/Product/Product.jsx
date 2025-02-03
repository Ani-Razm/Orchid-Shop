import styles from './Product.module.css';
function Product(product) {
    
    return (

        <>    
            <div className={styles.product}>
                <div className="info"><i className='bx bx-chevron-right'></i></div>
                <img src={product.image} alt={product.name} />
                <div className={styles.title}>{product.name}</div>
            </div>
        </>
    );
}

export default Product