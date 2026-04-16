import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        const localValue = localStorage.getItem(key);
        if (!localValue) return initialValue;
        try {
            return JSON.parse(localValue) as T;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.storageArea !== localStorage) return;
            if (event.key !== key) return;

            if (event.newValue === null) {
                setValue(initialValue);
                return;
            }

            try {
                setValue(JSON.parse(event.newValue) as T);
            } catch {
                setValue(initialValue);
            }
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [key, initialValue]);

    return [value, setValue] as const;
}