import styles from '../styles/Register.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faUser,
    faLock,
} from "@fortawesome/free-solid-svg-icons";

function Register() {
    const submit = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/Register', {
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
                             <i className={styles.login_icon_one}>
                                 <FontAwesomeIcon icon={faUser}/></i>
                             <input type="text" className={styles.login_input} name="username" placeholder="Username" required />
                         </div>
                         <div className={styles.login_field}>
                             <i className={styles.login_icon_one}><FontAwesomeIcon icon={faLock} /></i>
                             <input type="password" className={styles.login_input} name="password" placeholder="Password" required />
                         </div>
                         <div className={styles.login_field}>
                             <i className={styles.login_icon_one}><FontAwesomeIcon icon={faLock} /></i>
                             <input type="password" className={styles.login_input} name="confirm_password" placeholder="Confirm Password" required />
                         </div>
                         <button className={styles.login_submit} type="submit">
                             <span className={styles.button_text}>Create Account</span>
                         </button>
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

export default Register;