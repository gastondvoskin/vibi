// reducers/counter.ts
import { INCREMENT, DECREMENT, CounterActionTypes } from "./actions-types"

const initialState = { value: 0 };

const counterReducer = (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default counterReducer;
