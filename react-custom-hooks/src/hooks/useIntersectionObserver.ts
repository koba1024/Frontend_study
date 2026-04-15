import { useEffect, type RefObject } from "react";

export function useIntersectionObserver(
    refs: RefObject<HTMLElement | null>[],
    callback: (entries: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit,
): void {
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);

        refs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        })

        return () => {
            observer.disconnect();
        }
    }, [refs, callback, options])
}