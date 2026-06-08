import { useEffect, useCallback } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLDivElement | null>, callback: ()=> void): void => {
    
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    }, [ref, callback]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, callback, handleClickOutside])

    return
}

export default useClickOutside;