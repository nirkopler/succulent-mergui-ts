import React, { useEffect, useState } from 'react';
import { SongLineData, merguiSongsData, SongData, WordTranslationMap, WordTranslation } from '../../Data/songs';
import Player from '../Player/Player';
import Song from '../Songs/Song';
import './Main.scss';

const Main: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentSong, setCurrentSong] = useState<SongData | null>();
    const [dic, setDic] = useState<WordTranslationMap>({});

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
        } else {
            setCurrentSong(null);
        }
    }, [currentTime]);

    // const [word, setWord] = useState<string>('');
    // const [eng, setEng] = useState<string>('');
    // const [heb, setHeb] = useState<string>('');

    // const addWord = (e: any) => {
    //     e.preventDefault();
    //     setDic({ ...dic, [word]: new WordTranslation(eng, heb) });
    //     setWord('');
    //     setEng('');
    //     setHeb('');
    // };

    // useEffect(() => {
    //     console.log(dic);
    // }, [dic]);

    return (
        <div className='main-component'>
            <Player currentTimeCallback={(t) => setCurrentTime(t)} />
            {/* <div className='dic-test'>
                <form onSubmit={addWord}>
                    <span>word</span>
                    <br />
                    <input type='text' name='word' onChange={(e) => setWord(e.target.value.toLocaleLowerCase())} value={word} />
                    <br />
                    <span>eng</span>
                    <br />
                    <input type='text' name='english' onChange={(e) => setEng(e.target.value.toLocaleLowerCase())} value={eng} />
                    <br />
                    <span>heb</span>
                    <br />
                    <input type='text' name='hebrew' onChange={(e) => setHeb(e.target.value)} value={heb} />
                    <br />
                    <button type='submit'>add word</button>
                </form>
            </div> */}
            {currentSong ? <Song title={currentSong.name} data={currentSong.data} currentIndex={currentIndex} /> : <h1>🦝</h1>}
        </div>
    );
};

export default Main;
