import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './PaginationOffset.scss';

type PaginationOffsetProps = {
  totalPages: number
  currentPage: number
  onClick: (page: number) => any;
}

export function PaginationOffset ({ currentPage, totalPages, onClick }: PaginationOffsetProps)  {
  return (
    <Pagination className='PaginationOffset'>
       <PaginationItem disabled={currentPage === 0} onClick={() => onClick(0)}>
        <PaginationLink first />
      </PaginationItem>
      <PaginationItem disabled={currentPage < 1} onClick={() => onClick(currentPage - 1)}>
        <PaginationLink previous />
      </PaginationItem>
      {[...Array(totalPages)].map((n, i) => (
        <PaginationItem key={i} active={currentPage === i}>
          <PaginationLink onClick={() => onClick(i)}>
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))} 
      <PaginationItem disabled={currentPage >= totalPages - 1} onClick={() => onClick(currentPage + 1)}>
        <PaginationLink next  />
      </PaginationItem>
      <PaginationItem onClick={() => onClick(totalPages - 1)} disabled={totalPages - 1 === currentPage} >
        <PaginationLink last />
      </PaginationItem>
    </Pagination>
  );
}
