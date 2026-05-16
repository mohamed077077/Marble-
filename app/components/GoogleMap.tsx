"use client";

import useSubsent from "../hooks/useSubsent";
import { MapPin } from "lucide-react";

export default function GoogleMap() {
    const { imgRef, isLoaded, setIsLoaded } = useSubsent();

    return (
        <div className="relative w-full h-full">
            {!isLoaded && (
                <div className="absolute inset-0 z-0 bg-surface-variant/50 animate-pulse flex flex-col gap-2 items-center justify-center text-on-surface-variant/50">
                    <MapPin className="w-8 h-8 animate-bounce" />
                    <span className="font-body-sm tracking-wider uppercase">Loading Map...</span>
                </div>
            )}
            <iframe 
                ref={imgRef}
                className={`block w-full h-full transition-all duration-1000 ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
            translate="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9504481541813!2d-74.00839062341996!3d40.71821037139234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a3033d599%3A0xc6c764e7c75b871c!2sDesign%20District!5e0!3m2!1sen!2sus!4v1715485000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
            onLoad={() => setIsLoaded(true)}
        ></iframe>
        </div>
    );
}
