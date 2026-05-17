"use client";

import Card from "./Card";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import { Types } from "mongoose";
import { Tab } from "../page";
import { handleReorder } from "../actions/handleReorder";
import { handleDelete } from "../actions/handleDelete";

interface DataType {
    _id: Types.ObjectId;
    title: string;
    imageUrl: string;
    order: number;
    type?: 'granite' | 'marble' | 'natural-stone' | 'other'
}




export default function Display({activeTab}: {activeTab: Tab}) {
    // handle data fetching 
    const endpoint = activeTab === 'projects' ? '/api/projects' : activeTab === 'products' ? '/api/products' : '/api/materials';
    const { data, isLoading, error , refetch } = useFetch<DataType[]>(endpoint, []);

    const deleteAction = (id: string , setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>) => {
        handleDelete(id, activeTab, refetch , setIsDeleting);
    };

    const upvoteAction = (id: string , setIsVoting: React.Dispatch<React.SetStateAction<boolean>>) => {
        handleReorder(id, 'up', activeTab, refetch , setIsVoting);
    };

    const downvoteAction = (id: string , setIsVoting: React.Dispatch<React.SetStateAction<boolean>>) => {
        handleReorder(id, 'down', activeTab, refetch , setIsVoting);
    };

    
    // handle pagination
    const {
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPages,
        currentData,
        displayedNumbers
    } = usePagination(data);

    if (isLoading) {
        return (
            <section id="projects" className="py-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[500px] flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-primary-fixed border-t-transparent rounded-full animate-spin"></div>
            </section>
        );
    }

    if (error || data.length === 0) {
        return (
            <section id="projects" className="py-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[500px] flex justify-center items-center">
                <div className="text-center">
                    <p className="text-headline-md text-error mb-4">{error || "No projects found."}</p>
                    <p className="text-body-lg text-on-surface-variant">Please check back later.</p>
                </div>
            </section>
        );
    }




    return (
        <section  className="py-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start content-start">
                {Array.from({ length: itemsPerPage }).map((_, index) => {
                    const item = currentData[index];
                    const globalIndex = data.findIndex(d => d._id.toString() === item?._id.toString());
                    const isFirst = globalIndex === 0;
                    const isLast = globalIndex === data.length - 1;

                    return item ? (
                        <Card 
                            key={item._id.toString()}
                            id={item._id.toString()}
                            title={item.title} 
                            imageUrl={item.imageUrl} 
                            type={item.type}
                            deleteAction={deleteAction}
                            upvoteAction={upvoteAction}
                            downvoteAction={downvoteAction}
                            activeTab={activeTab}
                            refetch={refetch}
                        />
                    ) : (
                        <div key={`placeholder-${index}`} className="w-full aspect-[4/3] invisible"></div>
                    );
                })}
            </div>

            {totalPages > 1 && (
                <div className="mt-16 flex justify-center gap-3">
                    {displayedNumbers.map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-12  h-12 flex   items-center justify-center rounded-sm border transition-all duration-300 font-label-lg text-label-lg cursor-pointer  ${
                                currentPage === page
                                    ? "bg-secondary border-secondary text-on-primary-fixed "
                                    : "bg-transparent border-outline-variant text-on-surface hover:border-primary-fixed hover:text-primary-fixed hover:scale-110 active:scale-95"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </section>
    )
}