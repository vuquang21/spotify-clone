import React, { useContext } from 'react'
import { SongContext } from './Context'

export default function DetailSong() {
    const { song } = useContext(SongContext)
    return (
        <div className='flex flex-col col-span-1 px-5 py-2'>
            <span className='text-cyan-500 font-bold text-xl'>Now playing</span>
            <h2 className=' text-[1.5rem] text-slate-300'>Sing me to sleep</h2>

            <div className='w-[240px] m-auto text-xl'>
                <img
                    className='w-full'
                    src={song.links.images[0].url} alt='avatar'></img>
                <div className='flex justify-evenly items-center pt-2 gap-12'>
                    <img
                        className='w-[70px] rounded-full '
                        src={song.links.images[1].url} alt='avatar'></img>
                    <span className='text-slate-300 text-xl'>{song.author}</span>
                </div>
            </div>
        </div >
    )
}
