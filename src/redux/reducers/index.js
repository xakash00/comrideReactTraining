import { SET_COUNTER, INCREMENT, DECREMENT } from "../action/types";

const initialState = {
  count: 10,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        count: action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
