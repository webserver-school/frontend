import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

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

function TopThreeCard({ onClick, item, indexName }) {
    return (
        <div
            className={`w-full md:w-4/12 md:h-full md:mx-5 md:my-0 px-6 py-5 rounded-md bg-cover bg-center flex flex-col justify-between text-left + ${indexName == '1st' ? 'h-48' : 'h-44'}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('${item.album.images[0].url}')` }}
            onClick={onClick}
        >
            <div>
                <p className='text-gray-300 font-semibold text-lg'> {indexName} </p>
            </div>

            <div>
                <p className='text-white font-bold text-2xl'> {item.name} </p>
                <p className='text-gray-300 font-semibold text-lg'> {item.artists.map(e => e.name).join(', ')} </p>
            </div>
        </div>
    );
}

function SelectedTrackModal({ track }) {
    let [comments, setComments] = useState([]);

    function addComment(trackId, e) {
        e.preventDefault();
    
        let data = new FormData(e.target);
    
        data.append('trackId', trackId);
    
        fetch(process.env.NEXT_PUBLIC_URL + '/api/comments', {
            method: 'POST',
            body: data,
        }).then(res => {
            if (res.status == 200) {
                setComments([...comments, { author_name: 'You', body: data.get('body') }]);
            }
        });
    }

    useEffect(async () => {
        let commentsRes = await fetch(process.env.NEXT_PUBLIC_URL + `/api/comments?` + new URLSearchParams({ trackId: track.id }));

        setComments(await commentsRes.json());
    }, [track]);

    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <img src={track.album.images[0].url} className='h-16 w-16 rounded-md' />

                    <div>
                        <p className='text-white font-bold text-2xl'> {track.name} </p>
                        <p className='text-gray-300 font-semibold text-lg'> {track.artists.map(e => e.name).join(', ')} </p>
                    </div>
                </div>

                <a href={track.externalUrls.spotify} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1DB954] h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>

            <form onSubmit={(...args) => addComment(track.id, ...args)} className='mt-4'>
                <input className='w-full bg-gray-800 px-5 py-4 rounded-md text-white' placeholder="Add a comment.." name='body' />
            </form>

            <div className='mt-4 space-y-2'>
                {comments.length ? comments.map((comment, i) => (
                    <div className='bg-gray-600 rounded-md px-6 py-5 w-full' key={`comment-${i}`}>
                        <p className='text-gray-300 font-bold'> { comment.author_name } </p>
                        <p className='text-white font-bold'> { comment.body } </p>
                    </div>
                )) : (
                    <p className='text-gray-300 font-bold text-center'> No comments </p>
                ) }
            </div>
        </>
    );
}

export default function Home(props) {
    let [isOpen, setIsOpen] = useState(false);
    let [selectedTrack, setSelectedTrack] = useState(null);

    function showSelectedTrack(track) {
        setSelectedTrack(track);
        setIsOpen(true);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                                    {selectedTrack && <SelectedTrackModal track={selectedTrack} />}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className="w-full md:h-[1520px] h-[1820px] min-h-screen bg-black text-center">
                <h1 className="w-full block font-bold text-white py-20 md:text-6xl text-5xl">Your list is ready</h1>

                <div className='w-100 lg:mx-40 mx-5 h-72 md:flex mt-5 grid gap-4'>
                    <TopThreeCard item={props.musicList.items[2]} indexName="3rd" onClick={() => showSelectedTrack(props.musicList.items[2])} />
                    <TopThreeCard item={props.musicList.items[0]} indexName="1st" onClick={() => showSelectedTrack(props.musicList.items[0])} />
                    <TopThreeCard item={props.musicList.items[1]} indexName="2nd" onClick={() => showSelectedTrack(props.musicList.items[1])} />
                </div>

                <div className='w-100 h-min md:mt-16 mt-96 lg:mx-60 mx-6'>
                    {props.musicList.items.slice(3, 10).map((item, index) => (
                        <div className='flex items-center space-x-4 mb-2' onClick={() => showSelectedTrack(item)}>
                            <p className='text-gray-300 font-semibold text-lg'> {(index + 4) + (index == 3 ? 'rd' : 'th')} </p>
                            <div className='flex items-center w-full h-20 bg-gray-800 rounded-lg overflow-hidden'>
                                <img src={item.album.images[0].url} className="w-20 h-20" />

                                <div className='flex flex-col md:flex-row md:items-center justify-between grow px-4 relative text-left'>
                                    <p className='text-white font-bold text-2xl truncate max-w-[50%]'> {item.name} </p>
                                    <p className='text-gray-300 font-semibold text-lg truncate'> {item.artists.map(e => e.name).join(', ')} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
