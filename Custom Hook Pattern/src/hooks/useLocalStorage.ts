import { useState, useCallback } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (newValue: T) => void] => {

    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item === null ? initialValue : JSON.parse(item);
        } catch (error) {
            console.error('Error parsing local storage item:', error);
            return initialValue;
        }
    });

    const changeStoredValue = useCallback((newValue: T) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
            setStoredValue(newValue);
        } catch (error) {
            console.error('Error setting local storage item:', error);
        }
    }, [key]);

    return [storedValue, changeStoredValue];
}

export default useLocalStorage;