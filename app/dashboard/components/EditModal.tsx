"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Upload, ImagePlus, Loader2 } from "lucide-react";
import { handleEditAction } from "../actions/handleEdit";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    title: string;
    id: string;
    activeTab: string;
    refetch: () => void;
}

export default function EditModal({ isOpen, onClose, imageUrl, title, id, activeTab, refetch }: ImageModalProps) {
    const [mounted, setMounted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<{ title?: string; fetch?: string } | null>(null);
    const [formData, setFormData] = useState({
        title: title,
        imageUrl: imageUrl
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    // Sync state if props change
    useEffect(() => {
        setFormData({ title, imageUrl });
    }, [title, imageUrl]);

    const handleClose = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        onClose();
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, imageUrl: previewUrl }));
        }
    };
    const handleSubmit = async () => {
        setIsSubmitting(true);
        const submissionData = {
            title: formData.title,
            image: fileInputRef.current?.files?.[0]
        };
        await handleEditAction({
            id,
            activeTab,
            submissionData,
            setError,
            handleClose: onClose,
            setIsSubmitting,
            refetch
        });
    };

    if (!mounted) return null;

    return createPortal(
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
            onClick={handleClose}
        >
            <div 
                className={`relative w-full max-w-xl bg-surface-container-high rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Hidden File Input */}
                <input 
                    type="file" 
                    name="image"
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleFileChange}
                />

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
                    <h2 className="text-2xl font-display text-on-surface">Edit Item</h2>
                    <button 
                        onClick={handleClose}
                        className="p-2 hover:bg-surface-variant/50 text-on-surface-variant rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-8 space-y-8 overflow-y-auto max-h-[70vh]">
                    {/* Image Upload Area */}
                    <div className="space-y-4">
                        <label className="text-sm font-medium text-primary ml-1 uppercase tracking-wider">Item Image</label>
                        <div 
                            onClick={handleImageClick}
                            className="relative aspect-video rounded-2xl overflow-hidden bg-surface-variant/20 border-2 border-dashed border-outline-variant/50 hover:border-primary/50 transition-all cursor-pointer group"
                        >
                            <img 
                                src={formData.imageUrl} 
                                alt={formData.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2">
                                <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
                                    <ImagePlus className="w-8 h-8" />
                                </div>
                                <span className="font-medium">Change Image</span>
                            </div>

                            {/* Corner Indicator */}
                            <div className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                <Upload className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Title Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary ml-1 uppercase tracking-wider">Item Title</label>
                            <input 
                                type="text"
                                name='title'
                                value={formData.title}
                                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                className={`w-full bg-surface p-4 rounded-2xl border ${error?.title ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-on-surface font-body-lg`}
                                placeholder="Enter title..."
                            />
                            {error?.title && <p className="text-sm text-error ml-1">{error.title}</p>}
                        </div>

                        {error?.fetch && (
                            <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm">
                                {error.fetch}
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Footer */}
                <div className="p-6 bg-surface-container border-t border-outline-variant/30 flex justify-end gap-3">
                    <button 
                        onClick={handleClose}
                        className="px-6 py-3 rounded-full text-on-surface-variant hover:bg-surface-variant/50 transition-colors font-medium"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-full bg-primary text-on-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all font-medium active:scale-95 disabled:opacity-70 disabled:grayscale flex items-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            "Save Changes"
                        )}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
