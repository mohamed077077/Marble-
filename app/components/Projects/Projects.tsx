"use client";

import Card from "./Project";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import { Types } from "mongoose";

interface ProjectType {
    _id: Types.ObjectId;
    title: string;
    imageUrl: string;
}

export default function Projects() {
    // handle data fetching 
    const { data: projectsData, isLoading, error } = useFetch<ProjectType[]>('/api/projects', []);
    
    // handle pagination
    const {
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPages,
        currentData: currentProjects,
        displayedNumbers
    } = usePagination(projectsData);

    if (isLoading) {
        return (
            <section id="projects" className="py-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[500px] flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-primary-fixed border-t-transparent rounded-full animate-spin"></div>
            </section>
        );
    }

    if (error || projectsData.length === 0) {
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
        <section id="projects" className="py-24 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 flex flex-col items-start">
                <h2 className="font-headline-xl text-headline-xl text-primary-fixed inline-block relative pb-4">
                    Featured Projects
                    <span className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/30"></span>
                    <span 
                        className="absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300 ease-out"
                        style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-start content-start">
                {Array.from({ length: itemsPerPage }).map((_, index) => {
                    const project = currentProjects[index];
                    return project ? (
                        <Card 
                            key={project._id.toString()} 
                            title={project.title} 
                            imageUrl={project.imageUrl} 
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