import React, { useEffect, useRef, useState } from 'react';
import { dictionary, SongLineData, WordTranslation } from '../../Data/songs';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
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
            const _word: string = word.toLocaleLowerCase();
            const _data: WordTranslation = dictionary[_word];
            if (_data) {
                return <TranslatedWord word={_word} data={_data} />;
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
    const { width: screenWidth } = useWindowDimensions();
    const translationBubbleRef = useRef<HTMLDivElement>(null);
    const [bubblePosition, setBubblePosition] = useState<number>(0);
    const offset: number = 25;

    useEffect(() => {
        const bubbleSize = translationBubbleRef.current?.getBoundingClientRect();
        if (bubbleSize) {
            const rightX = bubbleSize.x + bubbleSize.width;
            if (rightX >= screenWidth) {
                const positionCalc = (rightX - screenWidth) * -1 - offset;
                setBubblePosition(positionCalc);
            }
        }
    }, [showTranslation]);

    const _handleMouseOver = (e: React.MouseEvent): void => {
        if (!showTranslation) {
            setShowTranslation(true);
        }
    };

    const _handleMouseLeave = (e: React.MouseEvent): void => {
        if (showTranslation) {
            setShowTranslation(false);
            setBubblePosition(0);
        }
    };

    return (
        <div className='translated-word-component' onMouseOver={_handleMouseOver} onMouseLeave={_handleMouseLeave}>
            {showTranslation && (
                <div
                    className='translation-bubble'
                    ref={translationBubbleRef}
                    style={{ position: 'absolute', top: offset, left: bubblePosition }}>
                    <span className='translation-lang'>English: {data.english}</span>
                    <span className='translation-lang'>Hebrew: {data.hebrew}</span>
                </div>
            )}
            <span className={`word ${showTranslation ? 'active' : ''}`}>{word}</span>
        </div>
    );
};

export default Song;
