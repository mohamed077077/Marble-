import { useState, useRef, useEffect } from "react";

export default function useSubsent() {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<any>(null);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, []);

    /* Sometimes the image is already cached (ALREADY LOADED).
    onLoad does NOT fire again, so, isLoaded will be still false
    */



    return { imgRef, isLoaded, setIsLoaded };
}
