
import { GET_PUBLICATIONS } from "./actions-types";

const initialState = {
  publications: [],
};


const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PUBLICATIONS: {
      const publications = action.payload;
      return {...state, publications};
    }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
