import {ERROR, QUESTIONS, LOADING, WAITING} from './action';

export const intialState = {
  waiting: false,
  loading: false,
  error: false,
  modal: false,
  questions: [],
  index: 0,
  score: 0,
  quiz: {amount: 10, category: 'sports', difficulty: 'easy'},
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true, waiting: false};
    case WAITING:
      return {...state, waiting: true, loading: false};
    case QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
        waiting: false,
        modal: false,
      };
    case ERROR:
      return {...state, error: 'no any datas, please enter different type'};
  }
};

export default reducer;
