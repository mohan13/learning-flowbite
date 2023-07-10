import React, { useState } from 'react';

import { Pagination } from 'flowbite-react';

export default function DefaultPagination({ Data }: { Data: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    console.log('pagellllll', page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={onPageChange}
      totalPages={Data.length}
    />
  );
}
