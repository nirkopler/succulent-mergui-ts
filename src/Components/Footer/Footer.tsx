import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className='footer-component'>
            <div className='wrapper'>
                <span>
                    By{' '}
                    <a href='https://github.com/nirkopler/' target='_blank'>
                        @nirkopler
                    </a>
                </span>
                <span>made with love</span>
                <span>🦝💖🦧</span>
            </div>
        </div>
    );
};

export default Footer;
