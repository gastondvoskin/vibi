
import { CREATE_PUBLICATION, GET_PUBLICATIONS } from "../actions/actions-types-publication";
import { publicationActions } from "../actions/publicationActions";
import { PublicationReducer } from "./interfaces/interfaceReducers";

const initialState : PublicationReducer = {
  publications: [],
  totalPages:0,
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


const publicationReducer = (state = initialState, action: publicationActions) => {
  switch (action.type) {
    case GET_PUBLICATIONS: {
      const publications = action.payload.publications;
      const totalPages = action.payload.totalPages
      const newState = totalPages? {...state, publications, totalPages} : {...state, publications}
      return newState;
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
