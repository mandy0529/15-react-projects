import React from 'react';

const paginate = (data) => {
  const itemsPerPage = 13;
  const pages = Math.ceil(data.length / itemsPerPage);
  const newFollowers = Array.from({length: pages}, (one, index) => {
    const startPoint = index * itemsPerPage;
    return data.slice(startPoint, startPoint + itemsPerPage);
  });
  console.log(newFollowers);
  return newFollowers;
};

export default paginate;
