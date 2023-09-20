import styles from  '../../styles/imagebox.module.css';
import Image from  'next/image';
import defaultImg from '../../public/next.svg';
import PropTypes from 'prop-types';

function ImageBox({ src = defaultImg, wrapperClassName ='imgBx'}) {
    return <div 
                className={`${styles['img-bx']} ${wrapperClassName}`} 
                >
                <Image src={src}   
                    // width={0}
                    // height={0}
                    placeholder='empty'
                    fill
                    alt='show picture all properties'
                    sizes="100vw"
                    // style={{ width: '100%', height: '100%' }}
                    >
                </Image>
            </div>
}
export default ImageBox;

ImageBox.propTypes = {
    /**
     * 图片的地址
     */
    src: PropTypes.string || PropTypes.func,
    /**
     * 图片的css类名称
     */
    wrapperClassName: PropTypes.string,
  };

//设计容器的时候,nextjs的css属性,如果从模块获取的话,那么这些属性是私有的,比如${styles['img-bx']}这个值就是一个class为
// imagebox_img-bx__Ikzm1的类,外面的样式类是不能覆盖的,除非是内联属性,比如这里的style属性;
// 1. 既然是一个容器类,那么宽和高应该是可以配置的