import { FilterReducer } from "./interfaces/interfaceReducers";

const initialState: FilterReducer = {
    propertyType: null,
    rooms:null,
    maxPrice: null,
    city: null,
};


const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_PROPERTY_TYPE_FILTER":
      return { ...state, propertyType: action.payload };
    case "SET_ROOMS_FILTER":
      return { ...state, rooms: action.payload };
    case "SET_MAX_PRICE_FILTER":
      return { ...state, maxPrice: action.payload };
    case "SET_CITY_FILTER":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
  