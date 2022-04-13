import { useState } from 'react';
import logo from './logo.svg';
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
      <head>
        <img src={logo} className="App-logo" alt="logo" />
      </head>
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
