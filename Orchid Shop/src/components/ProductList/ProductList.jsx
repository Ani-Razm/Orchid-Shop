import Product from "../Product/Product";
import styles from './ProductList.module.css';

function ProductList({ products }) {
    return (
        <div className={styles.productList}>
            {products.map((product, index) => (
               
                <a href={`/product/${index}`}><Product key={index} name={product.name} image={product.image} page={product.page}/></a>
            ))}
        </div>
    );
}

export default ProductList