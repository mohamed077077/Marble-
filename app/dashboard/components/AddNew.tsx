"use client";

import { useState } from "react";
import { Tab } from "../page";
import { handleSubmitAction } from "../actions/handleSubmit";

export default function AddNew({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {
    const [category, setCategory] = useState<'projects' | 'products' | 'materials'>('projects');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>('');
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [type, settype] = useState<'granite' | 'marble' | 'natural-stone' | 'other'>('granite');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors , setError] = useState<{title?:string , image?:string ,fetch?:string}>({});

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setImageFile(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    }
};


    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        await handleSubmitAction({
            title,
            imageFile,
            category,
            type,
            setIsSubmitting,
            setError,
            setActiveTab,
        });
    };

    return (
        <div className="p-10 max-w-xl mx-auto font-body-md">
            <h2 className="text-headline-lg font-headline-lg mb-8 text-primary uppercase tracking-wider">
                Add New Item
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                {/* Category Dropdown */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="category" className="text-label-lg font-label-lg text-on-surface-variant uppercase">
                        Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value as 'projects' | 'products' | 'materials')}
                        className="p-4 border border-outline-variant rounded-xl outline-none focus:ring-2 focus:ring-primary bg-surface-container-lowest text-body-md transition-all"
                    >
                        <option value="projects">Projects</option>
                        <option value="products">Products</option>
                        <option value="materials">Materials</option>
                    </select>
                </div>
                {category === "materials" && (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="type" className="text-label-lg font-label-lg text-on-surface-variant uppercase">
                            Material Type
                        </label>
                        <select
                            id="type"
                            value={type}
                            onChange={(e) => settype(e.target.value as 'granite' | 'marble' | 'natural-stone' | 'other')}
                            className="p-4 border border-outline-variant rounded-xl outline-none focus:ring-2 focus:ring-primary bg-surface-container-lowest text-body-md transition-all"
                        >
                            <option value="granite">Granite</option>
                            <option value="marble">Marble</option>
                            <option value="natural-stone">Natural Stone</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                )}
                {/* Title Input */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-label-lg font-label-lg text-on-surface-variant uppercase">
                        Title
                    </label>
                    <input
                        required = {false}
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter item title..."
                        className={`p-4 border rounded-xl outline-none focus:ring-2 transition-all placeholder:text-outline bg-surface-container-lowest text-body-md ${errors.title ? 'border-error focus:ring-error/20' : 'border-outline-variant focus:ring-primary'}`}
                    />
                    {errors.title && <p className="text-error text-label-lg font-label-lg uppercase mt-1 px-1">{errors.title}</p>}
                </div>

{/* Local Image Uploader Box */}
                <div className="flex flex-col gap-2">
                    <label className="text-label-lg font-label-lg text-on-surface-variant uppercase">
                        Image
                    </label>
                    
                    <label className={`w-full h-80 border-2 border-dashed rounded-2xl flex items-center justify-center cursor-pointer hover:bg-surface-container-low overflow-hidden relative transition-all group ${isSubmitting ? 'opacity-50 pointer-events-none' : ''} ${errors.image ? 'border-error bg-error/5' : 'border-outline-variant'}`}>
                        
                        <input 
                            required = {false}
                            type="file" 
                            accept="image/jpeg, image/png, image/webp, image/jpg" 
                            className="hidden" 
                            onChange={handleImageChange}
                            disabled={isSubmitting}
                        />

                        {previewUrl ? (
                            <img
                                src={previewUrl}
                                alt="Local preview"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex flex-col items-center text-on-surface-variant">
                                <div className="p-4 rounded-full bg-surface-container-high mb-4 group-hover:scale-110 transition-transform">
                                    <svg className={`w-8 h-8 ${errors.image ? 'text-error' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                </div>
                                <span className={`font-label-lg text-label-lg uppercase tracking-widest ${errors.image ? 'text-error' : ''}`}>
                                    {errors.image ? errors.image : 'Click to select image'}
                                </span>
                            </div>
                        )}
                    </label>
                    {errors.image && previewUrl && <p className="text-error text-label-lg font-label-lg uppercase mt-1 px-1">{errors.image}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-on-primary font-label-lg text-label-lg uppercase py-4 px-8 rounded-full hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] tracking-widest disabled:opacity-70 disabled:cursor-wait flex justify-center items-center"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-3">
                                <svg className="animate-spin h-5 w-5 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                Processing...
                            </span>
                        ) : (
                            "Submit Item"
                        )}
                    </button>
                    {errors.fetch && <p className="text-error text-label-lg font-label-lg uppercase text-center">{errors.fetch}</p>}
                </div>
            </form>
        </div>
    );
}