import { useState, useEffect } from 'react';

function usePersistedState(key: string, initialState: any) {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key); // Get actual theme on localStorage

        if (storageValue) { // If exists
            return JSON.parse(storageValue); // Return the theme when the page has refreshed
        } else {
            return initialState; // Return default theme
        }
    });

    useEffect(() => { // Save the theme on localStorage
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState]
};

export default usePersistedState;