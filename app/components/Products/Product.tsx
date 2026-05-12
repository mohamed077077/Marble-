"use client";

import { useState } from "react";
import ImageModal from "../ImageModal";

interface ProductProps {
    name: string;
    image: string;
    isFocused?: boolean;
}

export default function Product({ name, image, isFocused }: ProductProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div 
                className={`group relative overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-md aspect-square flex items-end transition-all duration-500 ease-in-out cursor-pointer ${
                    isFocused ? 'scale-100 opacity-100' : 'scale-90 opacity-40 grayscale blur-[2px]'
                }`}
                onClick={() => setIsDialogOpen(true)}
            >
                <img 
                    alt={name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative z-10 w-full p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className={`font-headline-md text-headline-md text-primary-fixed mb-2 transition-colors duration-300 ${
                        isFocused ? 'text-secondary' : 'text-primary-fixed'
                    }`}>
                        {name}
                    </h3>
                    <div className={`h-1 w-8 bg-secondary origin-left transition-transform duration-300 ${
                        isFocused ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                </div>
            </div>

            <ImageModal 
                isOpen={isDialogOpen} 
                onClose={() => setIsDialogOpen(false)} 
                imageUrl={image} 
                altText={name} 
            />
        </>
    );
}

