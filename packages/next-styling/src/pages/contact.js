import styles from '../style/contact.module.css';
import styles1 from '../style/contact.module.scss';
function Contact() {
    return (<>
    <h2 className={styles.highlight}>Contact Pages from css module</h2>
    <h2 className={styles1.highlightscss}>Contact Pages from scss module</h2>
    </>)
}
export  default Contact;