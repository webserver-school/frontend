import Link from 'next/link';
import styles from '../styles/index.module.css'

export async function getServerSideProps(context) {
    let userRes = await fetch(process.env.NEXT_PUBLIC_URL + '/api/User', {
        credentials: 'include',
        headers: {
            cookie: context.req.headers.cookie,
        }
    });

    let pageViewsRes = await fetch(process.env.NEXT_PUBLIC_URL + '/api/PageViews?' + new URLSearchParams({
        page: '/'
    }), {
        credentials: 'include',
        headers: {
            cookie: context.req.headers.cookie,
        }
    });

    return {
        props: {
            user: userRes.status == 200 ? await userRes.json() : null,
            pageViews: pageViewsRes.status == 200 ? await pageViewsRes.json() : null,
        }
    };
}

export default function Home(props) {
    return (
        <div className="w-full min-h-screen flex overflow-hidden bg-background">
            <div className="flex flex-row justify-between z-20">
                <div className="container flex flex-col my-auto ml-16">
                    <h1 className="text-8xl font-bold pb-10 leading-tight text-white">Songs <br /> Just <span className={styles.four_highlight}>4</span> You</h1>

                    <div className='rounded-md overflow-hidden divide-y-2 divide-[#4a02e3] flex flex-col'>
                        <Link href={props.user ? "/list" : "/Login"}>
                            <button className = "bg-purple hover:bg-[#4a02e3] transition text-xl py-4 text-white font-medium px-5" type="button">
                                <span>Get Started</span>
                            </button>
                        </Link>

                        <button className = "bg-purple text-2xl py-3 px-5 text-white font-medium cursor-default" type="button">
                            <p className='text-white font-semibold text-xs'> I've been visited { props.pageViews.views } times! </p>
                        </button>
                    </div>
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
