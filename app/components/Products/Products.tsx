"use client";

import MaterialCarousel from './MaterialCarousel';
import { Types } from 'mongoose';

export interface DataType {
    _id: Types.ObjectId;
    title: string;
    imageUrl: string;
}

export default function Products() {





    return (
        <section id="products" className="py-24 w-full overflow-hidden bg-surface-container">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <div className="flex flex-col xl:flex-row gap-16 lg:gap-24">
                    <MaterialCarousel 
                        title="Our Products" 
                        isMaterial = {false}
                    />
                    <MaterialCarousel 
                        title="Our Materials" 
                        isMaterial = {true}
                    />
                </div>
            </div>
        </section>
    );
}