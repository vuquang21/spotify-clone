import React from 'react'
import { BiDotsHorizontal, BiSearch } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'
import { MdOutlineAddBox } from 'react-icons/md'
import { FcLike } from 'react-icons/fc'

const NavbarSpotify = () => {
    return (
        <div
            className=' flex flex-col gap-5 w-[15%] bg-black h-[87.5vh] text-[#ababab] pl-4 z-0'>
            <BiDotsHorizontal className='text-[2rem] z-10 pt-1' />
            <div className='flex flex-col justify-start items-center gap-3'>
                <button
                    className='flex flex-row self-start gap-5 decoration-none text-[#ababab] hover:text-white'>
                    <AiFillHome className='self-center text-[2rem]' /><span>Home</span></button>
                <button
                    className='flex flex-row self-start gap-5 decoration-none text-[#ababab] hover:text-white'>
                    <BiSearch className='self-center text-[2rem]' /><span>Search</span></button>
                <button
                    className='flex flex-row self-start gap-5 decoration-none text-[#ababab] hover:text-white'>
                    <VscLibrary className='self-center text-[2rem]' /><span>Your Library</span></button>
            </div>
            <div className='flex flex-col items-start justify-start gap-3'>
                <button className='flex flex-row gap-5 decoration-none text-[#ababab] hover:text-white'>
                    <MdOutlineAddBox className='self-center text-[2rem]' /><span>Create Playlist</span></button>
                <button className='flex flex-row gap-5 decoration-none text-[#ababab] hover:last:text-white'>
                    <FcLike className='self-center text-[2rem]' /><span>Liked Songs</span></button>
            </div>
        </div>
    )
}

export default NavbarSpotify