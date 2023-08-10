import { useRouter } from 'next/router';
function Docs() {
    const router = useRouter();
    const {params = [] } = router.query;
    console.log(params);
    if (params.length === 2) {
        return <h2>View docs for Feature {params[0]} and concepts {params[1]}</h2>
    } else if (params.length === 1) {
        return <h2>View docs for Feature {params[0]} </h2>
    }
    return <h2>Docs Home Page</h2>
}
export default Docs;