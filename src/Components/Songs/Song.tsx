import React, { useState } from 'react';
import { dictionary, SongLineData, WordTranslation } from '../../Data/songs';
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
    const _getLineWithTranslation = (): JSX.Element => {
        const wordsArray = lineData.text.split(' ');
        const res = wordsArray.map((word) => {
            if (dictionary[word]) {
                return <TranslatedWord word={word} data={dictionary[word]} />;
            } else {
                return <span>{word}</span>;
            }
        });
        return <div className='translated-line'>{res}</div>;
    };

    return <div className={`song-line-main ${isCurrentLine ? 'active' : ''}`}>{_getLineWithTranslation()}</div>;
};

interface ITranslatedWord {
    word: string;
    data: WordTranslation;
}
const TranslatedWord: React.FC<ITranslatedWord> = ({ word, data }) => {
    const [showTranslation, setShowTranslation] = useState<boolean>(false);

    return (
        <div
            className='translated-word-component'
            onMouseOver={() => setShowTranslation(true)}
            onMouseLeave={() => setShowTranslation(false)}>
            {showTranslation && (
                <div className='translation-bubble'>
                    <span className='translation-lang'>English: {data.english}</span>
                    <span className='translation-lang'>Hebrew: {data.hebrew}</span>
                </div>
            )}
            <span className='word'>{word}</span>
        </div>
    );
};

export default Song;
