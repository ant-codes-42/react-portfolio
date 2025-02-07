import { Link } from 'react-router'

export default function Nav() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'><span className='icon solid fa-user'>About Me</span></Link></li>
                    <li><Link to='portfolio'><span className='icon solid fa-th'>Portfolio</span></Link></li>
                    <li><Link to='resume'><span className='icon solid fa-file'>Resume</span></Link></li>
                    <li><Link to='contact'><span className='icon solid fa-envelope'>Contact</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}