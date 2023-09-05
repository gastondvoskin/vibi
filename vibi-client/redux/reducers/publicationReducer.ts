
import { GET_PUBLICATIONS, action } from "../actions/actions-types";

const initialState = {
  publications: [],
};


const publicationReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_PUBLICATIONS: {
      const publications = action.payload.publications;
      return {...state, publications};
    }

    default:
      return {
        ...state,
      };
  }
};

export default publicationReducer;
