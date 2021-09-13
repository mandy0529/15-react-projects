import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};

    case SET_STORIES:
      return {
        ...state,
        loading: false,
        news: action.payload.hits,
        numberPage: action.payload.nbPages,
      };

    case REMOVE_STORY:
      const filterItem = state.news.filter((item) => {
        return item.objectID !== action.payload;
      });
      return {...state, news: filterItem};

    case HANDLE_SEARCH:
      return {...state, query: action.payload, page: 0};

    case HANDLE_PAGE:
      if (action.payload === 'des') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.numberPage - 1;
        }
        return {...state, page: prevPage};
      }
      if (action.payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.numberPage - 1) {
          nextPage = 0;
        }
        return {...state, page: nextPage};
      }

    default:
      throw new Error(`no matched that my action type is ${action.type}`);
  }
};
export default reducer;
