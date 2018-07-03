import {ADD_MOVIE} from "../constants/constants";

export function addMovie (title){
  return{
    type: ADD_MOVIE,
    payload: title
  }
}