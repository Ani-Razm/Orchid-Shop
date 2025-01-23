import Product from "../Product/Product";
import styles from './ProductList.module.css';

function ProductList({ products }) {
    return (
        <div className={styles.productList}>
            {products.map((product, index) => (
                <Product key={index} name={product.name} image={product.image}/>
            ))}
        </div>
    );
}

export default ProductList