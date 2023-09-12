// filterActions.ts

export const setPropertyTypeFilter = (propertyType: string | null) => (
    
    {
    type: "SET_PROPERTY_TYPE_FILTER",
    payload: propertyType,
  }
  
  
  );
  
  export const setMinRoomsFilter = (minRooms: number | null) => ({
    type: "SET_MIN_ROOMS_FILTER",
    payload: minRooms,
  });
  
export const setMaxRoomsFilter = (maxRooms: number | null) => ({
    type: "SET_MAX_ROOMS_FILTER",
    payload: maxRooms,
  });
  
  export const setMinPriceFilter = (minPrice: number | null) => ({
    type: "SET_MIN_PRICE_FILTER",
    payload: minPrice,
  });
  
  export const setMaxPriceFilter = (maxPrice: number | null) => ({
    type: "SET_MAX_PRICE_FILTER",
    payload: maxPrice,
  });
  
  export const setCityFilter = (city: string | null) => ({
    type: "SET_CITY_FILTER",
    payload: city,
  });
  
  