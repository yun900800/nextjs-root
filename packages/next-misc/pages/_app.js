import Header  from '@/layout/Header';
import Footer  from '@/layout/Footer';
import Head from 'next/head';
import 'styles/global.css';
import 'styles/layout.css';
// 配置了jsconfig.json的baseUrl属性为项目当前目录以后,
// 代码中的引用文件可以使用绝对路径
function MyApp({Component , pageProps}) {

    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps}/>)
    }

    return (
        <>
            <Head>
                <title>Home Page Description</title>
                <meta name="description" content="Home Page tutorials "/>
                <link rel="icon" href="/next.svg"/>
            </Head>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </>
    )
    
}

export default MyApp;