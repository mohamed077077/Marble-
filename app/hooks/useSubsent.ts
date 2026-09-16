import { useState, useRef, useEffect } from "react";

export default function useSubsent() {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<any>(null);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, []);


    return { imgRef, isLoaded, setIsLoaded };
}


