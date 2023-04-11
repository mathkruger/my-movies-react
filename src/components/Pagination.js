import { DOTS, usePagination } from "../hooks/usePagination";
import { PaginationContainer } from "../styles/PaginationContainer";

export function Pagination({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage = 1,
    pageSize
}) {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    return (
        <PaginationContainer>
            <li className="pagination-item" onClick={onPrevious}>
                <div className="arrow left" />
            </li>

            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li className="pagination-item" onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </li>
                );
            })}
            <li className="pagination-item" onClick={onNext}>
                <div className="arrow right" />
            </li>
        </PaginationContainer>
    );
}
