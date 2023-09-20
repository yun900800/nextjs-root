import styles from '../../styles/formbox.module.css'
import PropTypes from 'prop-types';
const FormBox = ({className ='formBx' , children}) => {
    return <div className={`${styles.formBx} ${className}`}>
                {children}
            </div>
}
export default FormBox;

FormBox.propTypes = {
    /**
     * 图片的css类名称
     */
    className: PropTypes.string
}