"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ZoomIn, ZoomOut, X } from "lucide-react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    altText?: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, altText = "Image" }: ImageModalProps) {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleZoomIn = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.5, 5));
    };

    const handleZoomOut = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
    };

    const handleClose = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        onClose();
        setTimeout(() => setZoomLevel(1), 300); // Reset zoom after transition
    };

    if (!mounted) return null;

    return createPortal(
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
            onClick={handleClose}
        >
            {isOpen && (
                <>
                    <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-4 z-50">
                        <button onClick={handleZoomOut} className="p-3 bg-surface/80 hover:bg-surface text-primary-fixed rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg" aria-label="Zoom Out">
                            <ZoomOut className="w-6 h-6" />
                        </button>
                        <button onClick={handleZoomIn} className="p-3 bg-surface/80 hover:bg-surface text-primary-fixed rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg" aria-label="Zoom In">
                            <ZoomIn className="w-6 h-6" />
                        </button>
                        <button onClick={handleClose} className="p-3 bg-surface/80 hover:bg-error hover:text-on-error text-primary-fixed rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ml-4" aria-label="Close">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center overflow-auto">
                        <img 
                            src={imageUrl} 
                            alt={altText} 
                            className="max-w-full max-h-full object-contain transition-transform duration-300 ease-out cursor-default" 
                            style={{ transform: `scale(${zoomLevel})` }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </>
            )}
        </div>,
        document.body
    );
}
