import { useRouter } from 'next/router';
import styles from '../../../../style/product.module.css';
function Review() {
    const router = useRouter();
    const {reviewId, productId} = router.query;
    return <h2 className={styles.product}> 
        Review <span className='green'>{reviewId}</span> for Product <span className='orange'>{productId}</span>
        </h2>
}
export default Review;