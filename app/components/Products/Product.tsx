"use client";

import { useState } from "react";
import ImageModal from "../ImageModal";
import useSubsent from "../../hooks/useSubsent";
import { DataType } from "./Products";

interface ProductProps {
    product: DataType;
    isFocused?: boolean;
}

export default function Product({ product, isFocused }: ProductProps) {
    const { _id, title, imageUrl } = product;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { imgRef, isLoaded, setIsLoaded } = useSubsent();

    return (
        <>
            <div 
                className={`group relative overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-lowest transition-all duration-500 ease-in-out cursor-pointer ${
                    isFocused ? 'scale-100 opacity-100' : 'scale-90 opacity-40 grayscale blur-[2px]'
                }`}
                onClick={() => setIsDialogOpen(true)}
            >
                <div className="relative aspect-[4/3] overflow-hidden">
                    {!isLoaded && (
                        <div className="absolute inset-0 z-0 bg-surface-variant animate-pulse" />
                    )}
                    <img 
                        ref={imgRef}
                        alt={title} 
                        className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`} 
                        src={imageUrl} 
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
                
                <div className="p-6">
                    <h3 className={`font-headline-md text-headline-md text-primary mb-2 transition group-hover:text-secondary ${
                        isFocused ? 'text-primary' : 'text-secondary'
                    }`}>
                        {title}
                    </h3>
                    <div className={`h-1 w-8 origin-left bg-secondary transition group-hover:scale-x-100 ${
                        isFocused ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                </div>
            </div>

            <ImageModal 
                isOpen={isDialogOpen} 
                onClose={() => setIsDialogOpen(false)} 
                imageUrl={imageUrl} 
                altText={title} 
            />
        </>
    );
}

