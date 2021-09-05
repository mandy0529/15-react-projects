import React from 'react';

const Page = (data) => {
  const itemPerPage = 15;
  const pageNumber = Math.ceil(data.length / itemPerPage);
  const newItemArray = Array.from({length: pageNumber}, (no, index) => {
    const starting = index * itemPerPage;
    return data.slice(starting, starting + itemPerPage);
  });
  return newItemArray;
};

export default Page;
