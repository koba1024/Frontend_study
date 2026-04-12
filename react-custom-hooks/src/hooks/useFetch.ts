import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(url, { signal: controller.signal });

                if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

                const result: T = await res.json();
                setData(result);

            } catch (error: unknown) {
                setError(error instanceof Error ? error.message : "エラーが発生しました");
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => controller.abort();
    }, [url]);
    return ({ data, loading, error });
}
