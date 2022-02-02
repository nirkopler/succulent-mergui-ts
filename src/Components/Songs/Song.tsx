import React from 'react';
import { songLineData } from '../../Data/songs';
import './Song.scss';

interface ISong {
    title: string;
    data: songLineData[];
    currentIndex: number;
}

const Song: React.FC<ISong> = (p: ISong) => {
    return (
        <div className='song-main'>
            <div className='song-name'>
                <span>{p.title}</span>
            </div>
            {p.data.map((e, i) => {
                if (e.text.length > 0) {
                    const isCurrentLine = p.currentIndex - 2 < i && i < p.currentIndex;
                    return (
                        <div
                            style={{
                                backgroundColor: isCurrentLine ? 'yellow' : '',
                            }}>
                            <span>{e.text}</span>
                            <span> {e.time}</span>
                        </div>
                    );
                } else {
                    return <br />;
                }
            })}
        </div>
    );
};

export default Song;
