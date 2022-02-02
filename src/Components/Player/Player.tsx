import React from 'react';
import ReactPlayer from 'react-player';
import './Player.scss';

interface IPlayer {
    currentTimeCallback: (t: number) => void;
}

const Player: React.FC<IPlayer> = (p: IPlayer) => {
    return (
        <div className='player-component'>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=php8rANiCfU'
                onProgress={(e) => {
                    p.currentTimeCallback(Math.floor(e.playedSeconds));
                }}
                controls={true}
                width={'100%'}
            />
        </div>
    );
};

export default Player;
