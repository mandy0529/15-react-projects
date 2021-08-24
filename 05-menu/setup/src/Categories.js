import React from 'react';

const Categories = ({filterItem, catetory}) => {
  console.log(filterItem);
  return (
    <div className="btn-container">
      {catetory.map((item, index) => (
        <button
          key={index}
          className="filter-btn"
          onClick={() => filterItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
