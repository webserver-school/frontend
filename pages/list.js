import Link from 'next/link';


export default function Home() {
    return (
        <div className="w-full md:h-[1520px] h-[1820px] min-h-screen bg-black text-center">
            <h1 className="w-full block font-bold text-white py-20 md:text-6xl text-5xl">Your list is ready</h1>
            <div className='w-100 lg:mx-40 mx-5 h-72 md:flex mt-5 grid'>
                <div className='md:w-4/12 md:h-5/6 h-48 bg-purple md:mt-4 rounded-md'></div>
                <div className='md:w-4/12 md:h-full h-48 bg-purple md:mx-5 md:my-0 my-5 rounded-md' ></div>
                <div className='md:w-4/12 md:h-5/6 h-48 bg-purple md:mt-4 mt-0 rounded-md'></div>
            </div>
            <div className='w-100 h-min md:mt-16 mt-96 lg:mx-60 mx-6'>
                <div className='w-full h-20 bg-white my-6 rounded-lg'></div>
                <div className='w-full h-20 bg-white my-6 rounded-lg'></div>
                <div className='w-full h-20 bg-white my-6 rounded-lg'></div>
                <div className='w-full h-20 bg-white my-6 rounded-lg'></div>
                <div className='w-full h-20 bg-white my-6 rounded-lg'></div>
                <div className='w-full h-20 bg-white my-6 rounded-lg'></div>
                <div className='w-full h-20 bg-white my-6 rounded-lg'></div>
            </div>
                <Link href="">
                    <button className = "xl:w-[600px] lg:w-2/4 w-3/4 bg-purple py-4 text-2xl uppercase text-white rounded-2xl md:mt-4 font-medium tracking-wide" type="button">
                        <span>Start listening now</span>
                    </button>
                </Link>
        </div>
    )
}
