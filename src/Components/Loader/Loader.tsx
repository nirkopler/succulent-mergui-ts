import React from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Loader.scss';

const Loader: React.FC = () => {
    const { width, height } = useWindowDimensions();
    return (
        <div className='loader-component' style={{ width: width, height: height }}>
            <span className='logo'>🦝</span>
            <span className='line'>I LOVE YOU</span>
            <span className='line'>RACCOON 💖</span>
        </div>
    );
};

export default Loader;
