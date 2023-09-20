import styles from '../styles/home.module.css';
import ImageBox from '../components/image/ImageBox';
import UserBx from '../components/user/UserBx';
import Container from '../components/user/Container';
import FormBox from '../components/form/FormBox';
import { useState } from 'react';
import formStyles from '../styles/formbox.module.css'
export default function Home() {

    const [active,setActive] = useState(false);
    const clickHandler = ()=>{
        const current = active;
        setActive(!current);
    }
    const activeStyle = styles.active;

    return <section className={`${styles.container} ${active? activeStyle: ''}`}>
        <Container active={active}>
            <UserBx className="signinBx">
                <ImageBox src="https://t7.baidu.com/it/u=986208791,1567055894&fm=193&f=GIF" className="imgBx"></ImageBox>
                <FormBox className="formBx">
                    <form>
                        <h2>Sign In</h2>
                        <input type="text" placeholder="UserName"/>
                        <input type="password" placeholder="PassWord"/>
                        <input type="submit" value="Login"/>
                        <p className={`${formStyles.signup}`}>{`Don't have an account?`}<a href="#" onClick={clickHandler}>Sign Up.</a></p>
                    </form>
                </FormBox>
            </UserBx>
            <UserBx className="signupBx">
                <ImageBox src="https://t7.baidu.com/it/u=2931491413,1199396761&fm=193&f=GIF" className="imgBx"></ImageBox>
                <FormBox className="formBx">
                    <form>
                        <h2>Create an account</h2>
                        <input type="text" placeholder="UserName"/>
                        <input type="text" placeholder="Email Address"/>
                        <input type="password" placeholder="Create PassWord"/>
                        <input type="password" placeholder="Confirm PassWord"/>
                        <input type="submit" value="Sign Up"/>
                        <p className={`${formStyles.signup}`}>{`Already't have a account?`}<a href="#" onClick={clickHandler}>Sign In.</a></p>
                    </form>
                </FormBox>
            </UserBx>
        </Container>   
    </section>
}