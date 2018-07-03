import {ASYNC_TEST_START} from "../constants/constants";
import {ADD_MOVIE} from "../constants/constants";

export const asyncTest = (id) => (dispatch) => {
  dispatch({
    type: ASYNC_TEST_START
  });
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      if (!response.ok) throw new Error('fetch error');
      return response.json();
    })
    .then((response) => {
      dispatch({
        type: ADD_MOVIE,
        payload: response.title
      })
    })
    .catch(err => {console.log(err)});
};