import React from 'react';
import { SongLineData } from '../../Data/songs';
import './Song.scss';

interface ISong {
    title: string;
    data: SongLineData[];
    currentIndex: number;
}

const Song: React.FC<ISong> = (p: ISong) => {
    const _getLines = (): JSX.Element[] => {
        return p.data.map((e, i) => {
            if (e.text.length > 0) {
                const isCurrentLine: boolean = p.currentIndex - 2 < i && i < p.currentIndex;
                return <SongLine lineData={e} isCurrentLine={isCurrentLine} />;
            } else {
                return <br />;
            }
        });
    };

    return (
        <div className='song-main'>
            <div className='song-name'>
                <span>{p.title}</span>
            </div>
            <div className='song-lines'>{_getLines()}</div>
        </div>
    );
};

interface ISongLine {
    lineData: SongLineData;
    isCurrentLine: boolean;
}

const SongLine: React.FC<ISongLine> = ({ lineData, isCurrentLine }) => {
    return (
        <div
            className={`song-line-main ${isCurrentLine ? 'active' : ''}`}
            style={{
                backgroundColor: isCurrentLine ? 'yellow' : '',
            }}>
            <span>{lineData.text.toUpperCase()}</span>
        </div>
    );
};

export default Song;
