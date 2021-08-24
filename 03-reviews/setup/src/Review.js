import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, image, text, job} = people[index];

  // if 절들 따로 새로운 함수에 빼서 적어줄 때
  const checkIndex = (index) => {
    if (index < 0) {
      return people.length - 1;
    }
    if (index > people.length - 1) {
      return 0;
    }
    return index;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      //만약 함수를 쓰지 않는다면 조건이 이렇게 된다.
      // if (newIndex < 0) {
      //   return people.length - 1;
      // }
      // return newIndex;
      return checkIndex(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      //만약 함수를 쓰지 않는다면 조건이 이렇게 된다.
      // if (newIndex > people.length - 1) {
      //   return 0;
      // }
      // return newIndex;
      return checkIndex(newIndex);
    });
  };

  const RandomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = index + 1;
    }
    setIndex(checkIndex(newIndex));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          {' '}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container ">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={RandomPerson} className="random-btn">
        suprised me
      </button>
    </article>
  );
};

export default Review;
