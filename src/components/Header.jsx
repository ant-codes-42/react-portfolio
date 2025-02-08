import { HeadContext } from './HeadContext';
import { useContext } from 'react';

import Logo from './Logo'
import Nav from './Nav'
import Social from './Social'


export default function Header() {
    const { isVisible } = useContext(HeadContext);
    return (
            <div id='header'>
                <div className='top'>
                    <Logo />
                    <Nav />
                </div>
                <div className='bottom'>
                    <Social />
                </div>
            </div>
    );
}