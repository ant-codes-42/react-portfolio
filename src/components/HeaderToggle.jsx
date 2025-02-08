import { useContext } from 'react';
import { HeadContext } from './HeadContext';

export default function HeaderToggle() {
    const { handleVisibleState } = useContext(HeadContext);
    
    return (
        <div id="headerToggle">
            <a href="#header" className="toggle" onClick={handleVisibleState}></a>
        </div>
    );
}