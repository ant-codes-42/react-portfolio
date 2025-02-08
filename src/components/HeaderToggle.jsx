import { useContext } from 'react';
import { HeadContext } from './HeadContext';

// This context is passed up to HeadContext
// HeadContext resides in <HeadProvider> which sits on the edge of the render
// It has a div that toggles the CSS for the navbar animations (mobile only)
export default function HeaderToggle() {
    const { handleVisibleState } = useContext(HeadContext);
    
    return (
        /* This is the hamburger button to slide out the nav bar */
        <div id="headerToggle">
            <a href="#header" className="toggle" onClick={handleVisibleState}></a>
        </div>
    );
}