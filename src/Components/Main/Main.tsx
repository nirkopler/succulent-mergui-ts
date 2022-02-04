import React, { useEffect, useState } from 'react';
import { SongLineData, merguiSongsData, SongData } from '../../Data/songs';
import Player from '../Player/Player';
import Song from '../Songs/Song';
import './Main.scss';

const Main: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentSong, setCurrentSong] = useState<SongData | null>();

    useEffect(() => {
        const _currentSong: SongData | undefined = merguiSongsData.find((song: SongData) => song.start <= currentTime && currentTime <= song.end);

        if (_currentSong) {
            setCurrentSong(_currentSong);
            const _currentSongLineIndex = _currentSong.data.findIndex((l: SongLineData) => l.time === currentTime);
            if (_currentSongLineIndex !== -1) {
                setCurrentIndex(_currentSongLineIndex + 1);
            }
        } else {
            setCurrentSong(null);
        }
    }, [currentTime]);

    return (
        <div className='main-component'>
            <Player currentTimeCallback={(t) => setCurrentTime(t)} />
            {currentSong ? <Song title={currentSong.name} data={currentSong.data} currentIndex={currentIndex} /> : <h1>GREETING</h1>}
        </div>
    );
};

export default Main;
