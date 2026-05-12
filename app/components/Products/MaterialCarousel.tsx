"use client";

import { useState } from 'react';
import Product from './Product';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MaterialCarouselProps {
    title: string;
    items: { name: string; image: string }[];
}

export default function MaterialCarousel({ title, items }: MaterialCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    // To ensure right and left always exist visually, we render [last, ...items, first]
    // The activeIndex (0 to items.length-1) will map to index (1 to items.length) in the display list
    const displayItems = [items[items.length - 1], ...items, items[0]];
    const displayIndex = activeIndex + 1;

    return (
        <div className="w-full overflow-hidden">
            <div className="mb-12 flex justify-between items-end">
                <div className="flex flex-col items-start">
                    <h2 className="font-headline-xl text-headline-xl text-primary-fixed inline-block relative pb-4 tracking-widest uppercase ">
                        {title}
                        <span className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/30"></span>
                        <span 
                            className="absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ease-out"
                            style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
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
                    className="flex transition-transform duration-700 ease-in-out [--item-width:80%] md:[--item-width:45%] lg:[--item-width:70%]"
                    style={{ 
                        transform: `translateX(calc(50% - (var(--item-width) / 2) - (${displayIndex} * var(--item-width))))`,
                    } as React.CSSProperties}
                >
                    {displayItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="shrink-0 px-4 transition-all duration-700"
                            style={{ width: "var(--item-width)" }}
                        >
                            <Product 
                                name={item.name} 
                                image={item.image} 
                                isFocused={index === displayIndex}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
