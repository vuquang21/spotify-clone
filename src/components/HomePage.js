import React, { useContext, useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa'
import { FcNext } from 'react-icons/fc'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { SongContext } from './Context'

const Banner = () => {
    return (
        <div className='flex flex-col justify-start gap-5 h-[45vh]'>
            <div className='flex flex-row justify-between'>

                {/* arrow  */}
                <div className='flex flex-row gap-3 ml-8 pt-4'>
                    <div className='w-10 h-10  bg-gray-800 rounded-full flex justify-center items-center hover:bg-zinc-900 cursor-pointer' >
                        <FcNext className='text-white text-[1.5rem] rotate-180' />
                    </div>

                    <div className='w-10 h-10  bg-gray-800 rounded-full flex justify-center items-center hover:bg-zinc-900 cursor-pointer' >
                        <FcNext className='text-white text-[1.5rem] ' />
                    </div>
                </div>
                {/* profile */}
                <div className=' flex flex-row text-white mr-16 items-center gap-5 '>
                    {/* button upgrade */}
                    <div className='border-2 border-white py-1 px-7 rounded-full bg-zinc-900 hover:bg-black'>
                        <button className='border-1 rounded-full border-1 border-white font-bold'>UPGRADE</button>
                    </div>
                    {/* user */}
                    <div className='flex flex-row items-center gap-2 border-white rounded-full bg-zinc-800 py-[0.2rem] px-[0.1rem] cursor-pointer hover:bg-black'>
                        <img
                            className='w-8  h-8 rounded-full'
                            src='https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/271778337_3005587769771551_2761399793135752073_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=yYVYxOzwFocAX9xNxin&tn=vDVPutXR-Dnp8Ta9&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-kYUbyLthW452Win3ofoLg6eBTPLktEo-DmqMXiumuPQ&oe=625B65EF' alt='avatar-user' />
                        <span className='font-bold'>Quang Vũ</span>
                        <MdOutlineNavigateNext className='rotate-90' />
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className='flex justify-center items-start'>
                <img src='https://www.soroptimistinternational.org/wp-content/uploads/2020/03/imld.jpg' className='w-[95%] h-[60%]' alt='banner' />
            </div>
        </div>
    )
}
const HomePage = () => {
    const { DataSongs, handleSetSong } = useContext(SongContext)
    console.log(DataSongs)
    const [idSong, setIdSong] = useState(0)
    const [isHover, setIsHover] = useState(false)
    const [isOut, setIsOut] = useState(true)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }

    const handleHover = (index) => {
        if (isHover) {
            setIsHover(true)
        }
        else {
            setIsHover(false)
        }

    }
    const handleOut = (index) => {
        if (isOut) {
            setIsOut(false)
        }
        else {
            setIsOut(true)
        }
    }
    return (
        <div className='flex flex-col w-[70%] h-[87.5vh] bg-gradient-to-b from-stone-700 to-black '>
            <Banner />
            <span className='text-[1.25rem] text-white font-bold ml-[2rem] pb-2'>Your shows</span>
            {/* list song */}
            <div className='col-span-2 overflow-y-scroll h-[48vh] '>
                <table className="table-auto w-[96.5%] ml-6">
                    <tbody className='text-white px-2 py-2 '>
                        {DataSongs.map((song, index) => (
                            <tr key={index}
                                id={index}
                                className={`h-12 cursor-pointer bg-zinc-800 text-white hover:bg-slate-500 ${idSong === song.id && 'text-[#20cf59]'} rounded-md`}
                                onClick={() => handlePlaySong(song.id)}
                                onMouseOver={() => handleHover(index)}
                                onMouseOut={() => handleOut(index)}
                            >
                                <td className={`text-center ${isHover ? 'opacity-0' : 'opacity-100'}`}>{isHover ? <BsFillPlayFill /> : index + 1}</td>

                                <td>{song.name}</td>
                                <td className='text-center'>{song.author}</td>
                                <td className='text-center pl-10'><a href={song.url}><FaDownload /></a></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default HomePage