import { useEffect, useState } from "react";

export function useWindowSize() {
    const [width, setWidth] = useState(innerWidth);
    const [height, setHeight] = useState(innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(innerWidth);
            setHeight(innerHeight);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])
    return { width, height };
}