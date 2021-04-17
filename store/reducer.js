import { combineReducers } from "redux";

const counterReducter = (state = 0, { type }) => {
  switch (type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    case "RESET":
      state = 0;
      return state;
    default:
      return state;
  }
};

const reducer = {
  counter: counterReducter,
};

export default combineReducers(reducer);
