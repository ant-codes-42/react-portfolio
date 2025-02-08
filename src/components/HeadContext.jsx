import { createContext, useState } from 'react';

export const HeadContext = createContext();

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