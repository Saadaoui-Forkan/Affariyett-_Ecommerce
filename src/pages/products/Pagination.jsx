import React from 'react'
import './pagination.css'

function Pagination({pages, currentPage, setCurrentPage}) {
    const generatedPages = [];
    for (let i = 1; i <= pages; i++) {
        generatedPages.push(i);
    }
  return (
    <div className="pagination">
        
        <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="page next"
            disabled={currentPage === 1}
        >
            Next
        </button>

        {generatedPages.map((page) => (
            <div 
            onClick={() => setCurrentPage(page)} 
            className={currentPage === page ? "page active" : "page"}
            key={page}
            >
            {page}
            </div>
        ))}

        <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="page previous"
            disabled={currentPage === 1}
        >
            Previous
        </button>
        
    </div>
  )
}

export default Pagination
