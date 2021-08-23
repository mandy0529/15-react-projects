import React from 'react';

const List = ({person}) => {
  return (
    <>
      {person &&
        person.map((item) => {
          const {id, name, image, age} = item;
          return (
            <article key={id} className="person">
              <img src={image} alt={name}></img>

              <div>
                <p>{age} years</p>
                <p>{name}</p>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default List;
