import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / 5); i++) {
    pageNumbers.push(i);
  }

   const handlePageClick = (pageNumber) => {
    // window.alert(pageNumber)
      onPageChange(pageNumber);
  };

  const handleFirstPageClick =(pageNumber)=>{
    onPageChange(pageNumber);
  }

  const handleLastPageClick =(pageNumber)=>{
    onPageChange(pageNumber);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        >
          <Link
            href={currentPage}
            onClick={()=>handleFirstPageClick(1)}
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
          
        </li>
        <li  className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}>
        <Link
            href={currentPage}
            onClick={() => handlePageClick(currentPage - 1)}
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">&lt;</span>
          </Link>
          
        </li>
        {pageNumbers?.map((pageNumber) => (
   
          <li
            key={pageNumber}
            className={`pagination-item ${
              currentPage === currentPage ? "active" : ""
            }`}
          >
            <Link
              href={currentPage}
              onClick={() => handlePageClick(pageNumber)}
            >
              {currentPage}
            </Link>
          </li>
        ))}
         <li  className={`pagination-item ${currentPage === totalPages ? "disabled" : ""}`}>
        <Link
            href={currentPage}
            onClick={() => handlePageClick(currentPage + 1)}
            className="page-link"
            aria-label="Next"
          >
            <span aria-hidden="true">&gt;</span>
          </Link>
          
        </li>
        <li
          className={`pagination-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <Link
            href={currentPage}
            onClick={()=>handleLastPageClick(totalPages)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
