import Logo from './Logo'
import Nav from './Nav'
import Social from './Social'


export default function Header() {
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