import React, { useState } from 'react';
import { Table, Pagination } from 'flowbite-react';

const Index = ({ Data }: { Data: any[] }) => {
  const [currentPage, setCurrentPage] = useState(5);
  const indexOfLastPost = currentPage * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>First Brewed</Table.HeadCell>

          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {Data?.slice(indexOfFirstPost, indexOfLastPost).map((item: any) => {
            return (
              <Table.Row
                key={item.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>
                <Table.Cell>
                  <img src={item.image_url} alt="" className="w-6" />
                </Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.first_brewed}</Table.Cell>

                <Table.Cell>
                  <a
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    href="/tables"
                  >
                    <p>Edit</p>
                  </a>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={Data.length / 5}
      />
    </>
  );
};

export default Index;
