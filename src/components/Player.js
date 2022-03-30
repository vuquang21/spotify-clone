import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import { SongContext } from './Context';
import '../App.css'
import styles from './player.module.scss'

const Player = () => {
    const { song, handleSetSong } = useContext(SongContext)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPrevious = () => {
        handleSetSong(song.id - 1)
    }   
    return (
        <AudioPlayer
            className={styles.player}
            src={song.url} showSkipControls={true}
            showJumpControls={false}
            layout='stacked-reverse'
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
        />
    )
}

export default Player