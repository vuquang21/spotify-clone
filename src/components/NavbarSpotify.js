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
                <a href='#'
                    className='flex flex-row self-start gap-5 decoration-none text-[#ababab]'>
                    <AiFillHome className='self-center text-[2rem]' /><span>Home</span></a>
                <a href='#'
                    className='flex flex-row self-start gap-5 decoration-none text-[#ababab]'>
                    <BiSearch className='self-center text-[2rem]' /><span>Search</span></a>
                <a href='#'
                    className='flex flex-row self-start gap-5 decoration-none text-[#ababab]'>
                    <VscLibrary className='self-center text-[2rem]' /><span>Your Library</span></a>
            </div>
            <div className='flex flex-col items-start justify-start gap-3'>
                <a href='#' className='flex flex-row gap-5 decoration-none text-[#ababab]'>
                    <MdOutlineAddBox className='self-center text-[2rem]' /><span>Create Playlist</span></a>
                <a href='#' className='flex flex-row gap-5 decoration-none text-[#ababab]'>
                    <FcLike className='self-center text-[2rem]' /><span>Liked Songs</span></a>
            </div>
        </div>
    )
}

export default NavbarSpotify