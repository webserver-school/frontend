import React from 'react'
import styles from '../styles/Login.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faUser,
    faLock,
} from "@fortawesome/free-solid-svg-icons";

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
        <div class={styles.background}>
            <div class={styles.container}>
                <div class={styles.screen}>
                    <div class={styles.content}>
                        <form class={styles.login} onSubmit={submit}>
                            <div class={styles.logn_field}>
                                {/* Dont work for some reason */}
                                <i class={styles.login_icon_one}>
                                    <FontAwesomeIcon icon={faUser}/></i>
                                <input type="text" class={styles.login_input} name="username" placeholder="Username" required />
                            </div>
                            <div class="login_field">
                                {/* Dont work for some reason */}
                                <i class={styles.login_icon_two}><FontAwesomeIcon icon={faLock} /></i>
                                <input type="password" class={styles.login_input} name="password" placeholder="Password" required />
                            </div>
                            <button class={styles.login_submit} type="submit">
                                <span class={styles.button_text}>Log in now</span>
                            </button>
                            <button class={styles.signup_submit}>
                                <span class={styles.button_text}>Sign up</span>
                            </button>
                        </form>
                    </div>
                    <div class={styles.shape_backgrounds}>
                        <span class={`${styles.shape_rotation} ${styles.shape_four}`}></span>
                        <span class={`${styles.shape_rotation} ${styles.shape_three}`}></span>
                        <span class={`${styles.shape_rotation} ${styles.shape_two}`}></span>
                        <span class={`${styles.shape_rotation} ${styles.shape_one}`}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;