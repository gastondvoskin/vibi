
import { CREATE_PUBLICATION, GET_PUBLICATIONS, action } from "../actions/actions-types";
import { PublicationReducer } from "./interfaces/interfaceReducers";

const initialState : PublicationReducer = {
  publications: [],
  form:{
    property:{
      condition:"",
      description:"",
      final_price:0,
      urls_photos:[],
      urls_videos:[]
    },
    propertyInformation:{
      baths:0,
      constrution_year:0,
      half_bath:0,
      m2_indoor:0,
      m2_total:0,
      rooms:0
    },
    publication:{
      plan:"",
      pro_analysis:false,
      pro_contracts:false,
      pro_photos:false,
      pro_quoted:false,
      pro_sign:false,
      pro_tour:false,
      pro_videos:false
    },
  }
};


const publicationReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_PUBLICATIONS: {
      const publications = action.payload.publications;
      return {...state, publications};
    }
    case CREATE_PUBLICATION: {
      const form = action.payload
      return {...state, form}
    } 

    default:
      return {
        ...state,
      };
  }
};

export default publicationReducer;
