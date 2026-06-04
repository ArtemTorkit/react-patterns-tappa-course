import { useState, useEffect } from 'react';

const useFetch = <T>(url: string, options?: RequestInit): { data: T | null; loading: boolean; error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setData(null);
            setError(null);

            const controller = new AbortController();
            const { signal } = controller;

            try {
                const response = await fetch(url, { ...options, signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err: unknown) {
                if (err instanceof Error && err.name === 'AbortError') {
                    return; 
                }

                if (err instanceof Error) {
                    setError(err.message);
                  } else {
                    setError(String(err));
                }
            } finally {
               if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
}

export default useFetch;