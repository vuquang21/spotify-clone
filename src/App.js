import { SongContext } from './components/Context';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import DataSongs from './components/data/songs.json'
import Player from './components/Player';
import { useState } from 'react';


function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
  }
  return (
    <SongContext.Provider value={{ DataSongs, song, handleSetSong }}>

      <div className="bg-slate-900">
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
          <DetailSong />
          <ListSong />
        </div>
        <Player />
      </div >
    </SongContext.Provider>
  );
}

export default App;
