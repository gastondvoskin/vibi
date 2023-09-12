import { FilterReducer } from "./interfaces/interfaceReducers";

const initialState: FilterReducer = {
    propertyType: null,
    minRooms: null,
    maxRooms: null,
    minPrice: null,
    maxPrice: null,
    city: null,
};


const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_PROPERTY_TYPE_FILTER":
      console.log("en reducer",action.payload);
      
      return { ...state, propertyType: action.payload };
    case "SET_MIN_ROOMS_FILTER":
      return { ...state, minRooms: action.payload };
    case "SET_MAX_ROOMS_FILTER":
      return { ...state, maxRooms: action.payload };
    case "SET_MIN_PRICE_FILTER":
      return { ...state, minPrice: action.payload };
    case "SET_MAX_PRICE_FILTER":
      return { ...state, maxPrice: action.payload };
    case "SET_CITY_FILTER":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
  