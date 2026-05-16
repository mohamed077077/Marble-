import { useState, useEffect, useCallback } from 'react';

export default function useFetch<T>(url: string, initialData: T) {
    const [data, setData] = useState<T>(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            const res = await fetch(url);
            if (!res.ok) throw new Error('Failed to fetch data');

            const result = await res.json();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        isLoading,
        error,
        refetch: fetchData,
    };
}