import styles from '../styles/index.module.css'

export async function getServerSideProps(context) {
    let res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/User', {
        credentials: 'include',
        headers: {
            cookie: context.req.headers.cookie,
        }
    });

    return {
        props: {
            user: res.status == 200 ? await res.json() : null
        }
    };
}

export default function Home(props) {
    return (
        <div className={styles.background}>
            <div>
                
            </div>
            <div className={styles.text_background}>
                <h1 className={styles.main_title}>Songs <br/> Just <span className={styles.four_highlight}>4</span> You</h1>
                <button className={styles.button_login} type="button">
                        <span className={styles.button_text}>Get Started</span>
                </button>
            </div>
        </div>
        
        
        
        
        /*<div>
            <h1>Home</h1>

            {props.user ? (
                <p> Welcome { props.user.username } </p>
            ) : (
                <p> Welcome guest </p>
            )}
        </div>*/
    )
}
