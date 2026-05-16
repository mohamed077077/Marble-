"use client";

import { useState } from "react";
import EditModal from "./EditModal";
import useSubsent from "../../hooks/useSubsent";
import { Trash2, ChevronUp, ChevronDown } from "lucide-react";

interface CardProps {
    id: string;
    title: string;
    imageUrl: string;
    className?: string;

    deleteAction: (id: string , setDeleting: React.Dispatch<React.SetStateAction<boolean>>) => void;
    upvoteAction: (id: string , setVoting: React.Dispatch<React.SetStateAction<boolean>>) => void;
    downvoteAction: (id: string , setVoting: React.Dispatch<React.SetStateAction<boolean>>) => void;
    activeTab: string;
    refetch: () => void;
}

export default function Card({ id, title, imageUrl, className = "block", deleteAction , upvoteAction , downvoteAction, activeTab, refetch }: CardProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { imgRef, isLoaded, setIsLoaded } =    useSubsent();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isVoting, setIsVoting] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const onDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowConfirm(true);
    };

    return (
        <>
            <div
                className={`group mb-6 break-inside-avoid overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container shadow-sm transition hover:shadow-xl cursor-pointer relative ${className}`}
                onClick={() => setIsDialogOpen(true)}
            >
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-100 ">
                    <button 
                        onClick={onDeleteClick}
                        disabled={isDeleting}
                        className="p-2 bg-error text-on-error rounded-full disabled:opacity-50 hover:bg-error/80 shadow-md"
                        title="Delete item"
                    >
                        <Trash2 className="w-5 h-5 cursor-pointer" />
                    </button>

                </div>
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

                <div className="p-8 flex justify-between">

                    <div>
                        <h3 className="font-headline-md text-headline-md text-primary mb-2 transition group-hover:text-secondary">
                            {title}
                        </h3>
                        <div className="h-[2px] w-16 bg-secondary"></div>
                    </div>
                    <div className="flex items-end">
                    {upvoteAction && (
                        <button 
                            disabled={isVoting}
                            onClick={(e) => { e.stopPropagation(); upvoteAction(id , setIsVoting); }}
                            className="p-2 bg-surface text-on-surface rounded-full hover:bg-surface-variant shadow-md"
                            title="Move up"
                        >
                            <ChevronUp className="w-5 h-5 cursor-pointer" />
                        </button>
                    )}
                    {downvoteAction && (
                        <button 
                            disabled={isVoting}
                            onClick={(e) => { e.stopPropagation(); downvoteAction(id , setIsVoting); }}
                            className="p-2 bg-surface text-on-surface rounded-full hover:bg-surface-variant shadow-md"
                            title="Move down"
                        >
                            <ChevronDown className="w-5 h-5 cursor-pointer" />
                        </button>
                    )}
                    </div>
                </div>
            </div>

            <EditModal
                isOpen={isDialogOpen} 
                onClose={() => setIsDialogOpen(false)} 
                imageUrl={imageUrl} 
                title={title} 
                id={id} 
                activeTab={activeTab}
                refetch={refetch}
            />

            {showConfirm && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={(e) => { e.stopPropagation(); setShowConfirm(false); }}
                >
                    <div 
                        className="bg-surface p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 border border-outline-variant/30 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Confirm Deletion</h3>
                        <p className="text-body-md text-on-surface-variant mb-6">
                            Are you sure you want to delete &quot;{title}&quot;? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button 
                                onClick={(e) => { e.stopPropagation(); setShowConfirm(false); }}
                                disabled={isDeleting}
                                className="px-4 py-2 rounded-md font-label-lg text-primary hover:bg-surface-variant transition-colors cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteAction(id, setIsDeleting);
                                    setShowConfirm(false); 
                                }}
                                disabled={isDeleting}
                                className="px-4 py-2 rounded-md font-label-lg bg-error text-on-error hover:bg-error/90 transition-colors flex items-center gap-2 cursor-pointer"
                            >
                                {isDeleting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-on-error border-t-transparent rounded-full animate-spin"></div>
                                        Deleting...
                                    </>
                                ) : (
                                    "Delete"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}