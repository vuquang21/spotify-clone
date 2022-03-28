import React, { useContext, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { SongContext } from './Context'

export default function ListSong() {
    const { DataSongs, handleSetSong } = useContext(SongContext)
    console.log(DataSongs)
    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%] ">Author</th>
                        <th className="w-[10%] pl-10">
                            <FaDownload />
                        </th>
                    </tr>
                </thead>
                <tbody className='text-white px-2 py-2 '>
                    {DataSongs.map((song, index) => (

                        <tr key={index}
                            className={`h-12 cursor-pointer bg-slate-800 text-gray-700 hover:bg-slate-500 ${idSong === song.id && 'text-teal-400'}`} onClick={() => handlePlaySong(song.id)}>
                            <td className='text-center'>{index + 1}</td>
                            <td>{song.name}</td>
                            <td className='text-center'>{song.author}</td>
                            <td className='text-center pl-10'><a href={song.url}><FaDownload /></a></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
