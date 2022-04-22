export async function getServerSideProps() {
    let res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/PageViews?' + new URLSearchParams({
        page: '/trackViews',
    }));

    return {
        props: {
            pageViews: await res.json(),
        },
    }
}

function trackViews({ pageViews }) {
    return (
        <div> 
            <p> This page has been viewed { pageViews.views } times. </p>
        </div>
    );
}

export default trackViews;
