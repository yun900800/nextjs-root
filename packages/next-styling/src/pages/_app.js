import '../style/global.style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
const theme = {
    colors: {
        primary:'#355c7d'
    }
}
function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default MyApp;