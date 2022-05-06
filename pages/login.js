import styles from '../styles/Login.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faUser,
    faLock,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function Login() {
    const submit = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/Login', {
            method: "POST",
            body: JSON.stringify(
                Object.fromEntries(formData)
            ),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <div className={styles.content}>
                        <form className={styles.login} onSubmit={submit}>
                            <div className={styles.login_field}>
                                {/* Dont work for some reason */}
                                <i className={styles.login_icon_one}>
                                    <FontAwesomeIcon icon={faUser}/></i>
                                <input type="text" className={styles.login_input} name="username" placeholder="Username" required />
                            </div>
                            <div className={styles.login_field}>
                                {/* Dont work for some reason */}
                                <i className={styles.login_icon_one}><FontAwesomeIcon icon={faLock} /></i>
                                <input type="password" className={styles.login_input} name="password" placeholder="Password" required />
                            </div>
                            <button className={styles.login_submit} type="submit">
                                <span className={styles.button_text}>Log in now</span>
                            </button>

                            <Link href="/register">
                            <button className={styles.signup_submit} type="button">
                                <span className={styles.button_text}>Sign up</span>
                            </button>
                            </Link>
                        </form>
                    </div>
                    <div className={styles.shape_backgrounds}>
                        <span className={`${styles.shape_rotation} ${styles.shape_four}`}></span>
                        <span className={`${styles.shape_rotation} ${styles.shape_three}`}></span>
                        <span className={`${styles.shape_rotation} ${styles.shape_two}`}></span>
                        <span className={`${styles.shape_rotation} ${styles.shape_one}`}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;