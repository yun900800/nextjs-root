import { useRouter } from 'next/router';
function Product({product}) {
    const router = useRouter();
    if (router.isFallback) {
        return <h2>Loadding...</h2>
    }
    return (<div>
        <h2>
            {product.id} {product.title} {product.price}
        </h2>
        <p>{product.description}</p>
    </div>)
}

export default Product;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {productId: "1"}
            }
    
            
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    console.log(`Regenerating product for ${params.productId}`);
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json();
    if (!data.id) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            product: data
        },
        revalidate: 10
    }
}
