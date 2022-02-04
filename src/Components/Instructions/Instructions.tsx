import React from 'react';
import './Instructions.scss';

const Instructions: React.FC = () => {
    return (
        <div className='instructions-component'>
            <div className='wrapper'>
                <h1>Hi Raccoon 🦝💖</h1>
                <div className='greeting'>
                    <p>
                        So I built this tool cuz you love this succulent session.
                        <br />
                        Just wanted to say that I think you're really beautiful and special. I really enjoy being with you,
                        discover new things (food 🍔) and talk with you and everything 😁💘. Hope you'll love this.
                    </p>
                </div>
                <h2>Instructions</h2>
                <div className='instructions'>
                    <span>
                        * <b>Play</b> the video and the current song lyrics will appear.
                    </span>
                    <span>
                        * The current played line is <span className='bold-mark'>bold and marked</span>.
                    </span>
                    <span>
                        * Words that have a translation has a <span className='tran-word'>red underline</span>.
                    </span>
                    <span>
                        * <b>Click</b> on word to see translation 💪😚.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Instructions;
