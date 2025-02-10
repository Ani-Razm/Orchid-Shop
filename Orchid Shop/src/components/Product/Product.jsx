import styles from './Product.module.css';
function Product(product) {

    return (
        <>
            <a href={product.page}>
                <div className={styles.product}>

                    <div className="info"><i className='bx bx-chevron-right'></i></div>
                    <img src={product.image} alt={product.name} />

                    <div className={styles.title}>{product.name}</div>
                </div>
            </a>
        </>
    );
}

export default Product