import { createContext, useState } from 'react';

export const HeadContext = createContext();

// Context set up to get isVisible from HeaderToggle (the mobile button)
// The 'header-visible' class enables all of the CSS animations  for navbar when in mobile mode
export const HeadProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleVisibleState = () => {
        setIsVisible(!isVisible);
    }

    return (
        <HeadContext.Provider value={{ isVisible, handleVisibleState }}>
            <div className={isVisible ? 'header-visible' : ''}>
                {children}
            </div>
        </HeadContext.Provider>
    );
};