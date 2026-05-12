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
                className={`group relative aspect-square overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-lowest  transition-all duration-500 ease-in-out cursor-pointer flex items-end ${
                    isFocused ? 'scale-100 opacity-100' : 'scale-90 opacity-40 grayscale blur-[2px]'
                }`}
                onClick={() => setIsDialogOpen(true)}
            >
                <img 
                    alt={name} 
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" 
                    src={image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent opacity-80 transition group-hover:opacity-40"></div>
                <div className="relative z-10 flex h-full w-full items-end p-6">
                    <div className="w-full">
                        <h3 className={`mb-2 font-headline-md text-headline-md transition group-hover:text-secondary ${
                            isFocused ? 'text-primary' : 'text-secondary'
                        }`}>
                            {name}
                        </h3>
                        <div className={`h-1 w-8 origin-left bg-secondary transition group-hover:scale-x-100 ${
                            isFocused ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                    </div>
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

