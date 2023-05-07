import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: '20px 0' }}>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} style={{ padding: '10px' }}>
            <button onClick={() => handleClick(pageNumber)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: currentPage === pageNumber ? 'bold' : 'normal' }}>
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
