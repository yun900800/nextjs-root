import styles from  '../styles/pets.module.css';
import Image from  'next/image';
import img from '../public/1.jpg';
import { ModalContainer } from 'reoverlay';
import  {PostPage } from '../components/post/post-page';
import 'reoverlay/lib/ModalWrapper.css';
function Pets() {
    return (
        <>
            <div className={styles.pets_container}>
                {
                    [1,2,3,4,5].map( path=>{
                        return (
                            <div key={path} className={styles.pets_item}>
                                <Image src={`/${path}.jpg`} alt="pet" width='280' style={{width:'100%',objectFit:'cover'}} height='420'/>
                            </div>
                        )
                    })
                }
            </div>
            <PostPage></PostPage>
            <Image src={img} placeholder='blur' alt="pet" width='280' className={styles.small_pets_item} height='420'/>
            <ModalContainer/>
        </>
    )
}

export default Pets;