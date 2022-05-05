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
        <div>
            <h1>Home</h1>

            {props.user ? (
                <p> Welcome { props.user.username } </p>
            ) : (
                <p> Welcome guest </p>
            )}
        </div>
    )
}
