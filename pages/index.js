import Link from 'next/link';
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
        <div className="w-full min-h-screen flex overflow-hidden bg-black">
            <div className="flex flex-row justify-between z-20">
                <div className="container flex flex-col my-auto ml-16">
                    <h1 className="text-8xl font-bold pb-10 leading-tight text-white">Songs <br /> Just <span className={styles.four_highlight}>4</span> You</h1>

                    {props.user ? (
                        <p> Welcome {props.user.displayName} </p>
                    ) : (
                        <Link href="/Login">
                            <button className = "bg-purple text-2xl py-4 uppercase text-white rounded-2xl mr-6" type="button">
                                <span>Get Started</span>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            <img src="/Polygon 6.svg" alt="icon_triangle" id={styles.svg1}></img>
            <img src="/Polygon 6.svg" alt="icon_triangle" id={styles.svg2}></img>
            <img src="/Polygon 6.svg" alt="icon_triangle" id={styles.svg3}></img>
            <img src="/Polygon 6.svg" alt="icon_triangle" id={styles.svg4}></img>
            <img src="/Polygon 2.svg" alt="icon_triangle" id={styles.svg5}></img>
            <img src="/Polygon 3.svg" alt="icon_triangle" id={styles.svg6}></img>
        </div>
    )
}
