import {createStore} from "redux";

export default function storeGenerator (reducer, initState) {
  return createStore(reducer, initState);
}
