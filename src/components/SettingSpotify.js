import React from 'react'
import { IoIosPersonAdd } from 'react-icons/io'
import { BsFillPersonFill } from 'react-icons/bs'

const SettingSpotify = () => {
    return (
        <div className='flex flex-col gap-5 w-[15%] bg-black h-[87.5vh] text-white'>
            <div className='flex flex-row items-center justify-around mt-[1.25rem]'>
                <span>Friend Activity</span>
                <IoIosPersonAdd className='text-[1rem]' />
            </div>
            <div className='flex flex-col justify-center pl-4 w-[95%] items-center'>
                <span className='text-[1rem] text-[#ababab]'>Let friends and followers on Spotify see what you're listening to.</span>
                <div className='flex flex-col gap-2 my-2'>
                    <div className='flex flex-row gap-2'>
                        <div className='w-12 h-12 flex justify-center items-center bg-[#333333] rounded-full'>
                            <BsFillPersonFill className='text-[2rem] text-[#b1b1b1]' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='h-2 w-28 bg-[#333333] rounded-full '></div>
                            <div className='h-2 w-20 bg-[#333333] rounded-full self-start'></div>
                            <div className='h-2 w-20 bg-[#333333] rounded-full self-start'></div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='w-12 h-12 flex justify-center items-center bg-[#333333] rounded-full'>
                            <BsFillPersonFill className='text-[2rem] text-[#b1b1b1]' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='h-2 w-28 bg-[#333333] rounded-full '></div>
                            <div className='h-2 w-20 bg-[#333333] rounded-full self-start'></div>
                            <div className='h-2 w-20 bg-[#333333] rounded-full self-start'></div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='w-12 h-12 flex justify-center items-center bg-[#333333] rounded-full'>
                            <BsFillPersonFill className='text-[2rem] text-[#b1b1b1]' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='h-2 w-28 bg-[#333333] rounded-full '></div>
                            <div className='h-2 w-20 bg-[#333333] rounded-full self-start'></div>
                            <div className='h-2 w-20 bg-[#333333] rounded-full self-start'></div>
                        </div>
                    </div>


                </div>
                <span className='text-[1rem] text-[#ababab]'>Go to Setting {'>'} Social and enable 'Share my listening activity on Spotify.'You can turn this off at any time.</span>
            </div>
            <div></div>
        </div>
    )
}

export default SettingSpotify