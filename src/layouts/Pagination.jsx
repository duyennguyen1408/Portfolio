import React from "react";
import "./Pagination.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPaginationButtons = () => {
        const buttons = [];

        // Display the first page
        if (totalPages > 3) {
            buttons.push(
                <button
                    key={1}
                    className={`pagination-button ${
                        currentPage === 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(1)}
                >
                    1
                </button>
            );

            // Display second page if not the first
            if (currentPage > 3) {
                buttons.push(<span key="ellipsis-start">...</span>);
            }

            // Determine which pages to display
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                buttons.push(
                    <button
                        key={i}
                        className={`pagination-button ${
                            currentPage === i ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }

            // Always show the last page if not already displayed
            if (currentPage < totalPages - 1) {
                buttons.push(<span key="ellipsis-end">...</span>);
                buttons.push(
                    <button
                        key={totalPages}
                        className={`pagination-button ${
                            currentPage === totalPages ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                );
            }
        } else {
            // If total pages are less than or equal to 3, show all buttons
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button
                        key={i}
                        className={`pagination-button ${
                            currentPage === i ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        }

        return buttons;
    };

    return (
        <div className="pagination">
            <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FaArrowLeft />
            </button>
            {renderPaginationButtons()}
            <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Pagination;
