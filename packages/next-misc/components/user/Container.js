import styles from  '../../styles/container.module.css';
function Container({active,children}) {
    return <div className={`${styles.container} ${active?'active container':'container'}`}>
        {children}
    </div>
}

export default Container;