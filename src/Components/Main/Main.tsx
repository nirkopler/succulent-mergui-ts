import React, { useEffect, useState } from 'react';
import { songLineData, songMerguiAsur } from '../../Data/songs';
import Player from '../Player/Player';
import Song from '../Songs/Song';
import './Main.scss';

const Main: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const currentSongLineIndex = songMerguiAsur.findIndex((l: songLineData) => l.time === currentTime);
        if (currentSongLineIndex !== -1) {
            setCurrentIndex(currentSongLineIndex + 1);
        }
    }, [currentTime]);

    return (
        <div className='main-component'>
            <Player currentTimeCallback={(t) => setCurrentTime(t)} />
            <Song title='Asur' data={songMerguiAsur} currentIndex={currentIndex} />
        </div>
    );
};

export default Main;
