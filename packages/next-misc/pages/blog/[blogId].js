import Head from "next/head";

function Blog({title, description}) {
    return (
        <>  
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/next.svg"/>
            </Head>
            <h1 className="content">Article</h1>
        </>
    )
}

export default Blog;

export async function getServerSideProps() {
    return {
        props : {
            title: "Article Title",
            description: "Article Description"
        }
    }
}