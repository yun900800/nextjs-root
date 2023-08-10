import styles from '../style/about.module.css';
import styles1 from '../style/about.module.scss'
function About() {
    return (<>
        <h2 className={styles.highlight}>About Pages from css module</h2>
        <h2 className={styles1.highlightscss}>About Pages from scss module</h2>
        <button className='btn btn-success'>Success</button>
    </>)
}
export  default About;