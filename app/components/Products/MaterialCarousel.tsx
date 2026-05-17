"use client";

import { useState } from 'react';
import Product from './Product';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useFetch from '../../hooks/useFetch';

import { DataType } from './Products';

interface MaterialCarouselProps {
    title: string;
    isMaterial?: boolean;
}

export default function MaterialCarousel({ title, isMaterial }: MaterialCarouselProps) {
    const endpoint = isMaterial ? '/api/materials' : '/api/products';
    const {data, isLoading, error } = useFetch<DataType[]>(endpoint, []);
    const [activeIndex, setActiveIndex] = useState(0);

    if (isLoading) {
        return (
            <section id="products" className="py-24 w-full overflow-hidden bg-surface-container flex justify-center items-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-primary-fixed border-t-transparent rounded-full animate-spin"></div>
            </section>
        );
    }

    if (error || data.length === 0) {
        return (
            <section id="products" className="py-24 w-full overflow-hidden bg-surface-container flex justify-center items-center min-h-[400px]">
                <div className="text-center">
                    <p className="text-headline-md text-error mb-4">{error || "No products found."}</p>
                    <p className="text-body-lg text-on-surface-variant">Please check back later.</p>
                </div>
            </section>
        );
    }

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % data.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    // To ensure right and left always exist visually, we render [last, ...items, first]
    // The activeIndex (0 to items.length-1) will map to index (1 to items.length) in the display list
    const displayItems = [data[data.length - 1], ...data, data[0]];
    const displayIndex = activeIndex + 1;

    return (
        <div className="w-full overflow-hidden">
            <div className="mb-12 flex justify-between items-end">
                <div className="flex flex-col items-start">
                    <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-primary-fixed inline-block relative pb-4 tracking-widest uppercase ">
                        {title}
                        <span className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/30"></span>
                        <span 
                            className="absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ease-out"
                            style={{ width: `${((activeIndex + 1) / data.length) * 100}%` }}
                        ></span>
                    </h2>
                </div>
                
                <div className="flex gap-4">
                    <button 
                        onClick={prev}
                        className="p-3 rounded-full border border-outline-variant/30 text-primary-fixed hover:bg-surface-container-high transition-colors cursor-pointer"
                        aria-label="Previous item"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={next}
                        className="p-3 rounded-full border border-outline-variant/30 text-primary-fixed hover:bg-surface-container-high transition-colors cursor-pointer "
                        aria-label="Next item"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
            
            <div className="relative w-full">
                <div 
                    className="flex transition-transform duration-700 ease-in-out [--item-width:100%] md:[--item-width:100%] lg:[--item-width:100%]"
                    style={{ 
                        transform: `translateX(calc(-${displayIndex} * var(--item-width)))`,
                    } as React.CSSProperties}
                >
                    {displayItems.map((item, index) => (
                        <div 
                            key={`${item._id.toString()}-${index}`} 
                            className="shrink-0 w-full transition-all duration-700"
                            style={{ width: "var(--item-width)" }}
                        >
                            <Product 
                                product={item}
                                isFocused={index === displayIndex}
                                isMaterial={isMaterial}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
