import React from 'react';
import TablePage from '@/modules/Home/Table/Table';
import Banner from '@/modules/Carousel/index';
// import DefaultPagination from '@/modules/Home/Pagination/Index';
const a = ({ List }: { List: any }) => {
  return (
    <div>
      <Banner />
      <TablePage Data={List} />
      {/* <DefaultPagination Data={List} /> */}
    </div>
  );
};

export default a;
