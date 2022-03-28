import React from 'react'
import { FaSpotify } from 'react-icons/fa'
const Navbar = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-5 bg-slate-900 text-white text-center py-6'>
            <FaSpotify className='text-[2rem]' />
            <h1 className='text-[2rem]'>Spotify</h1>
        </div>
    )
}

export default Navbar