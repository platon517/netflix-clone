import {PUSH_FAV} from "../constants/constants";
import {ADD_MOVIE} from "../constants/constants";
import {ASYNC_TEST_START} from "../constants/constants";

const initialState = {
  movies: [{title: 'Godzilla', isFav: false}, {title: 'Shrek', isFav: false}, {title: 'Inception', isFav: false}]
};

export default (state = initialState, action) => {
  let newState = state;
  switch (action.type){
    case PUSH_FAV:
      newState = JSON.parse(JSON.stringify(state));
      newState.movies.forEach((item) => {
        if (item.title === action.payload.title) item.isFav = !item.isFav;
      });
      return newState;
    case ADD_MOVIE:
      newState = Object.assign({}, state, {movies: state.movies.concat({title: action.payload, isFav: false})});
      return newState;
    case ASYNC_TEST_START:
      return newState;
    default:
      return state;
  }
}