// Not  being used currently but saving this for the future

import { useState, useEffect } from 'react';

const useMountTransition = (isMounted, unmountDelay) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (isMounted && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        } else if (!isMounted && hasTransitionedIn) {
            timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
        }

        return () => clearTimeout(timeoutId);
    }, [isMounted, unmountDelay, hasTransitionedIn]);

    return hasTransitionedIn;
};

export default useMountTransition;