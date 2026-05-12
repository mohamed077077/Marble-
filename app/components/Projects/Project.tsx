"use client";

import { useState } from "react";
import ImageModal from "../ImageModal";

interface CardProps {
    title: string;
    imageUrl: string;
    className?: string;
}

export default function Card({ title, imageUrl, className = "block" }: CardProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div 
                className={`group relative overflow-hidden rounded-lg bg-surface-container-high/60 backdrop-blur-md border-t border-l border-outline-variant/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] cursor-pointer ${className}`}
                onClick={() => setIsDialogOpen(true)}
            >
                <div className="w-full aspect-[4/3] overflow-hidden">
                    <img alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={imageUrl}/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-headline-md text-headline-md text-primary-fixed mb-2 group-hover:text-secondary transition-colors duration-300 drop-shadow-md">{title}</h3>
                    <div className="h-[2px] w-0 bg-secondary group-hover:w-16 transition-all duration-500 ease-out"></div>
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