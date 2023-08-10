import { useRouter } from 'next/router';
import styles from '../../../style/product.module.css';
function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;
    return <h2 className={styles.product}> 
        Detail about Product <span className='orange'>{productId}</span>
        </h2>
}
export default ProductDetail;