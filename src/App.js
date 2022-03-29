import { useState } from 'react';
import { SongContext } from './components/Context';
import DataSongs from './components/data/songs.json';
import HomePage from './components/HomePage';
import NavbarSpotify from './components/NavbarSpotify';
import Player from './components/Player';
import SettingSpotify from './components/SettingSpotify';


function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
  }
  return (
    <SongContext.Provider value={{ DataSongs, song, handleSetSong }}>

      {/* <div className="bg-slate-900">
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
          <DetailSong />
          <ListSong />
        </div>
      </div > */}

      <div>
        <div className='flex flex-row h-screen-navbar-player'>
          <NavbarSpotify />
          <HomePage />
          <SettingSpotify />
        </div>
        <Player />
      </div>
    </SongContext.Provider>
  );
}

export default App;
