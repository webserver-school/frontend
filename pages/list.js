export async function getServerSideProps(context) {
    let res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/MusicList', {
        credentials: 'include',
        headers: {
            cookie: context.req.headers.cookie,
        }
    });

    return {
        props: {
            musicList: res.status == 200 ? await res.json() : null
        }
    };
}

function TopThreeCard({ item, indexName }) {
    return (
        <a href={item.externalUrls.spotify} target="_blank" className="w-full md:w-4/12">
            <div
                className={`w-full md:h-full md:mx-5 md:my-0 px-6 py-5 rounded-md bg-cover bg-center flex flex-col justify-between text-left + ${indexName == '1st' ? 'h-48' : 'h-44'}`}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('${item.album.images[0].url}')` }}
            >
                <div>
                    <p className='text-gray-300 font-semibold text-lg'> { indexName } </p>
                </div>

                <div>
                    <p className='text-white font-bold text-2xl'> {item.name} </p>
                    <p className='text-gray-300 font-semibold text-lg'> { item.artists.map(e => e.name).join(', ') } </p>
                </div>
            </div>
        </a>
    );
}

export default function Home(props) {
    return (
        <div className="w-full md:h-[1520px] h-[1820px] min-h-screen bg-black text-center">
            <h1 className="w-full block font-bold text-white py-20 md:text-6xl text-5xl">Your list is ready</h1>

            <div className='w-100 lg:mx-40 mx-5 h-72 md:flex mt-5 grid gap-4'>
                <TopThreeCard item={props.musicList.items[2]} indexName="3rd" />
                <TopThreeCard item={props.musicList.items[0]} indexName="1st" />
                <TopThreeCard item={props.musicList.items[1]} indexName="2nd" />
            </div>

            <div className='w-100 h-min md:mt-16 mt-96 lg:mx-60 mx-6'>
                {props.musicList.items.slice(3, 10).map((item, index) => (
                    <a href={item.externalUrls.spotify} target="_blank">
                        <div className='flex items-center space-x-4 mb-2'>
                            <p className='text-gray-300 font-semibold text-lg'> { (index + 4) + (index == 3 ? 'rd' : 'th') } </p>
                            <div className='flex items-center w-full h-20 bg-gray-800 rounded-lg overflow-hidden'>
                                <img src={item.album.images[0].url} className="w-20 h-20" />

                                <div className='flex flex-col md:flex-row md:items-center justify-between grow px-4 relative text-left'>
                                    <p className='text-white font-bold text-2xl truncate max-w-[50%]'> {item.name} </p>
                                    <p className='text-gray-300 font-semibold text-lg truncate'> { item.artists.map(e => e.name).join(', ') } </p>
                                </div>
                            </div>
                        </div>
                    </a>
                )) }
            </div>
        </div>
    )
}
