import React, { useEffect, useRef, useState } from 'react';
import { SongLineData, merguiSongsData, SongData } from '../../Data/songs';
import Footer from '../Footer/Footer';
import Instructions from '../Instructions/Instructions';
import Loader from '../Loader/Loader';
import Player from '../Player/Player';
import Song from '../Songs/Song';
import './Main.scss';

const Main: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentSong, setCurrentSong] = useState<SongData | null>();
    const [showLoadPage, setLoadShowPage] = useState<boolean>(true);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoadShowPage(false);
        }, 3 * 1000);

        return () => clearTimeout(delay);
    }, []);

    useEffect(() => {
        const _currentSong: SongData | undefined = merguiSongsData.find(
            (song: SongData) => song.start <= currentTime && currentTime <= song.end
        );

        if (_currentSong) {
            setCurrentSong(_currentSong);
            const _currentSongLineIndex = _currentSong.data.findIndex((l: SongLineData) => l.time === currentTime);
            if (_currentSongLineIndex !== -1) {
                setCurrentIndex(_currentSongLineIndex + 1);
            }
        }
    }, [currentTime]);

    useEffect(() => {
        if (!showLoadPage) bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [showLoadPage]);

    return (
        <div className={`main-component ${showLoadPage ? 'loader' : ''}`}>
            {showLoadPage && <Loader />}
            <Player currentTimeCallback={(t) => setCurrentTime(t)} />
            <div ref={bottomRef} className='auto-scroll' />
            {currentSong ? (
                <Song title={currentSong.name} data={currentSong.data} currentIndex={currentIndex} />
            ) : !showLoadPage ? (
                <Instructions />
            ) : (
                <></>
            )}
            <Footer />
        </div>
    );
};

export default Main;
