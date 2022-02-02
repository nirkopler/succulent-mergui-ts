import React from 'react';
import Player from '../Player/Player';
import './Main.scss';

const Main: React.FC = () => {
    return (
        <div className='main-component'>
            Main
            <Player currentTimeCallback={(t) => console.log(t)} />
        </div>
    );
};

export default Main;
