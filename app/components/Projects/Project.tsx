"use client";

import { useState } from "react";
import ImageModal from "../ImageModal";
import useSubsent from "../../hooks/useSubsent";

interface CardProps {
    title: string;
    imageUrl: string;
    className?: string;
}

export default function Card({ title, imageUrl, className = "block" }: CardProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { imgRef, isLoaded, setIsLoaded } =    useSubsent();

    return (
        <>
            <div
                className={`group mb-6 break-inside-avoid overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container shadow-sm transition hover:shadow-xl cursor-pointer ${className}`}
                onClick={() => setIsDialogOpen(true)}
            >
                <div className="overflow-hidden relative aspect-[4/3]">
                    {!isLoaded && (
                        <div className="absolute inset-0 z-0 bg-surface-variant animate-pulse" />
                    )}
                    <img 
                        ref={imgRef}
                        alt={title} 
                        className={`aspect-[4/3] h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`} 
                        src={imageUrl}
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>

                <div className="p-8">
                    <h3 className="font-headline-md text-headline-md text-primary mb-2 transition group-hover:text-secondary">
                        {title}
                    </h3>
                    <div className="h-[2px] w-16 bg-secondary"></div>
                </div>
            </div>

            <ImageModal 
                isOpen={isDialogOpen} 
                onClose={() => setIsDialogOpen(false)} 
                imageUrl={imageUrl} 
                altText={title} 
            />
        </>
    )
}