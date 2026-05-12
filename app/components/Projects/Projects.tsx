"use client";

import { useState, useEffect } from "react";
import Card from "./Project";
import projectsData from "./projectsData";




export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(4);
            } else {
                setItemsPerPage(6);
            }
        };
        // Without this: the correct value would NOT be set on first load.
        handleResize();

        // event to track window resize
        // that's why we use useEffect because without useEffect the event listener would be added every time the component re-renders
        window.addEventListener("resize", handleResize);
        
        // Cleanup on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const maxPage = Math.ceil(projectsData.length / itemsPerPage);
        if (currentPage > maxPage) { // if the current page is greater than the max page, reset to 1
            setCurrentPage(1);
        }
    }, [itemsPerPage]); // runs when itemsPerPage changes

    const totalPages = Math.ceil(projectsData.length / itemsPerPage); // This calculates the total number of pages.
    const startIndex = (currentPage - 1) * itemsPerPage; // This calculates where slicing should start.
    const currentProjects = projectsData.slice(startIndex, startIndex + itemsPerPage); // This slices the array to get the current page.

    const getDisplayedNumbers = (page: number) => {
        const maxVisible = 7;

        // if total pages less than 7
        if (totalPages <= maxVisible) {
            return Array.from(
                { length: totalPages },
                (_, i) => i + 1
            );
        }

        let start = page - 3;
        let end = page + 3;

        // prevent negative numbers
        if (start < 1) {
            start = 1;
            end = maxVisible;
        }

        // prevent overflow
        if (end > totalPages) {
            end = totalPages;
            start = totalPages - (maxVisible - 1);
        }

        return Array.from(
            { length: end - start + 1 },
            (_, i) => start + i
        );
    };

    const displayedNumbers = getDisplayedNumbers(currentPage);

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start content-start">
                {Array.from({ length: itemsPerPage }).map((_, index) => {
                    const project = currentProjects[index];
                    return project ? (
                        <Card 
                            key={project.id} 
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