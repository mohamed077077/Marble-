import { useState, useEffect } from "react";

export default function usePagination<T>(data: T[]) {
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
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(data.length / itemsPerPage) || 1;

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [itemsPerPage, totalPages, currentPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const getDisplayedNumbers = () => {
        const maxVisible = 7;
        if (totalPages <= maxVisible) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        let start = currentPage - 3;
        let end = currentPage + 3;

        if (start < 1) {
            start = 1;
            end = maxVisible;
        }

        if (end > totalPages) {
            end = totalPages;
            start = totalPages - (maxVisible - 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const displayedNumbers = getDisplayedNumbers();

    return {
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPages,
        currentData,
        displayedNumbers
    };
}
