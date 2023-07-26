import Link from 'next/link';
import styles from '../style/home.module.css';
import useRouter from 'next/router';
function Home() {
    const handleClick = ()=>{
        console.log('Place your order');
        useRouter.replace('/product');
    }
    return (
        <div className={styles.home}>
            <h2>Home</h2>
            <Link href="/blog" legacyBehavior>
                <a>Blog</a>
            </Link>
            <Link href="/product" legacyBehavior>
                <a>Product</a>
            </Link>
            <button onClick={handleClick} className={styles.place_order}>
                Place Order
            </button>
        </div>
    
    )
}
export default Home;