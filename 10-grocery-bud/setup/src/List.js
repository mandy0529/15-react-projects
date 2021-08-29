import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';

const List = ({list, removeItem, editItem}) => {
  return (
    <div class="grocery-list">
      {list.map((item) => {
        const {id, title} = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div class="btn-container">
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
    </div>
  );
};

export default List;
