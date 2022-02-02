import React from 'react';
import { songLine } from '../../Data/songs';
import './Song.scss';

interface ISong {
    title: string;
    data: songLine[];
}

const Song: React.FC<ISong> = (p: ISong) => {
    return (
        <div className='song-main'>
            <div className='song-name'>
                <span>{p.title}</span>
            </div>
        </div>
    );
};

export default Song;
