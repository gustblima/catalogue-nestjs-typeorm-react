import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './PaginationOffset.scss';

type PaginationOffsetProps = {
  totalPages: number;
  currentPage: number;
  onClick: (page: number) => any;
};

export function PaginationOffset({
  currentPage,
  totalPages,
  onClick,
}: PaginationOffsetProps) {
  const [minPage, maxPage] = [
    Math.max(currentPage - 3, 0),
    Math.min(currentPage + 3, totalPages),
  ];
  return (
    <Pagination className="PaginationOffset">
      <PaginationItem disabled={currentPage === 1} onClick={() => onClick(1)}>
        <PaginationLink first />
      </PaginationItem>
      <PaginationItem
        disabled={currentPage === 1}
        onClick={() => onClick(currentPage - 1)}
      >
        <PaginationLink previous />
      </PaginationItem>
      {[...Array(maxPage - minPage)].map((n, i) => (
        <PaginationItem
          key={currentPage + i}
          active={currentPage === minPage + i + 1}
        >
          <PaginationLink onClick={() => onClick(minPage + i + 1)}>
            {minPage + i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={currentPage === totalPages}
        onClick={() => onClick(currentPage + 1)}
      >
        <PaginationLink next />
      </PaginationItem>
      <PaginationItem
        onClick={() => onClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        <PaginationLink last />
      </PaginationItem>
    </Pagination>
  );
}
