import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
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
      </ul>
    </nav>
  );
};

export default Pagination;
