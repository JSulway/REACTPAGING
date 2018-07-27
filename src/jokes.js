import { search } from './api';

// saving response to the reducer. start by declaring some initial state
const initialState = {
  page: 1,
  limit: 10,
  totalPages: 1,
  filters: { term: "" },
  results: []
};

function setFilter(state, action){
  return {
    ...state,
    filters: {
        ...state.filters,
        [action.filter]: action.value
    }
  };
}

function nextPage(state){
  return{
    ...state,
    page: Math.min(state.page + 1, state.totalPages)
  };
}

function previousPage(state){
  return{
    ...state,
    page: Math.max(state.page - 1, 1)
  };
}

function received(state, action){
  const { jokes } = action;

  return {
    ...state,
    totalPages: jokes.total_pages,
    results: jokes.results
  }
}



// constant for the action type that will dispatch when the data is received
const RECEIVED = "RECEIVED";
const NEXT_PAGE = "NEXT_PAGE";
const PREVIOUS_PAGE = "PREVIOUS_PAGE";
const SET_FILTER = "SET_FILTER";

export function reducer(state = initialState, action){
  switch (action.type){
    case RECEIVED:
      return received(state, action);
    case NEXT_PAGE:
      return nextPage(state);
    case PREVIOUS_PAGE:
      return previousPage(state);
    case SET_FILTER:
      return setFilter(state, action);
    default:
      return state;
  }
}

// next our actions object will have a single search function
// accepting a term, page no and limit for page size
// it returns a function that accepts the dispatch
// this executes our search api passing in the incoming parametrs
// as members of a js object
// Then when we received our response we dispatch our RECEIVED action managed
// put the jokes data in the jokes key of the data payload

export const actions = {
  setFilter: (filter, value) => ({ type: SET_FILTER, filter, value }),
  next: () => ({ type: NEXT_PAGE }),
  previous: () => ({ type: PREVIOUS_PAGE }),
  search: (term, page, limit) => dispatch =>
   search({ term, page, limit }).then(resp => dispatch({ type: RECEIVED, jokes: resp.data })
  )
};