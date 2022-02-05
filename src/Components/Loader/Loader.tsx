import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => {
    return (
        <div className='loader-component'>
            <span className='logo'>🦝</span>
            <span className='line'>I LOVE YOU</span>
            <span className='line'>RACCOON 💖</span>
        </div>
    );
};

export default Loader;
