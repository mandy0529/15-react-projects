import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';

const List = ({list, removeItem, editItem}) => {
  return (
    <h3>
      {list.map((item) => {
        const {id, name} = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title"> {name}</p>
            <div className="btn-container">
              <button onClick={() => editItem(id)} className="edit-btn">
                <FaEdit />
              </button>
              <button onClick={() => removeItem(id)} className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </h3>
  );
};

export default List;
