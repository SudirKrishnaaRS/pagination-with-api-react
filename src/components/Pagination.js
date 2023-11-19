import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, handlePrevious, handleNext }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {/* Previous Button */}
        <li onClick={() => handlePrevious()}
        className="page-item page-link ">{"<<"}</li>

        {/* Page Numbers */}
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber} className="page-item">
            <div
              onClick={() => paginate(pgNumber)}
              className="page-link hover-overlay pe-auto"
            >
              {pgNumber}
            </div>
          </li>
        ))}

        {/* Next Button */}
        <li onClick={() => handleNext()}
        className="page-item page-link ">{">>"}</li>
      </ul>
    </nav>
  );
};

export default Pagination;
