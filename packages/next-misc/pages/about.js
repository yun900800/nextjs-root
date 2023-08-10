import Footer from "../components/Footer";
import Head from 'next/head'
function About() {
    return (
        <>
            <Head>
                <title>About Description</title>
                <meta name="description" content="about tutorials "/>
                <link rel="icon" href="/vercel.svg"/>
            </Head>
            <div className="content">About</div>
        </>
    )
}

export default About;


About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}