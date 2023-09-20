import styles from  '../../styles/userbox.module.css';
function UserBx({className, children}) {
    return <div className={`${styles.user} ${className}`}>
        {children}
    </div>
}

export default UserBx;