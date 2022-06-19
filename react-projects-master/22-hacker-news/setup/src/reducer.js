import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
      }
    case REMOVE_STORY:
      const newHits = state.hits.filter(item => item.objectID !== action.payload.id);
      return {
        ...state,
        hits: newHits,
      }
    case HANDLE_SEARCH:
      return {
        ...state,
        page: 0,
        query: action.payload.query
      }
    case HANDLE_PAGE:
      let nextPage, prevPage;
      if (action.payload.userAction === 'INC') {
        nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage }
      }

      if (action.payload.userAction === 'DEC') {
        prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage }
      }

    default:
      throw new Error(`No matching ${action.type} actions type`)

  }
}
export default reducer
