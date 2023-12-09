import { useState } from "react";
interface PaginationParams {
  page: number;
  setPage: (v: number) => void;
  totalPages: number;
}
const Pagination = ({ page, setPage, totalPages }: PaginationParams) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    const p = Math.max(currentPage - 1, 1);
    setPage(p);
    setCurrentPage(p);
  };

  const handleNext = () => {
    const p = Math.min(currentPage + 1, totalPages);
    setPage(p);
    setCurrentPage(p);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
              currentPage === i
                ? "bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-md shadow-pink-500/20"
                : ""
            }`}
            href="#"
            style={{
              background:
                currentPage === i
                  ? "linear-gradient( 0deg,rgba(164, 186, 183, 1) 0%, rgba(227, 250, 247, 1) 100%)"
                  : "",
            }}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="flex">
        <li>
          <a
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            aria-label="Previous"
            onClick={handlePrevious}
          >
            <svg
              style={{ opacity: 0.4 }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </a>
        </li>
        {renderPageNumbers()}
        <li>
          <a
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            aria-label="Next"
            onClick={handleNext}
          >
            <svg
              style={{ opacity: 0.4 }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
