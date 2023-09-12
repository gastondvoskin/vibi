// filterActions.ts

export const setPropertyTypeFilter = (propertyType: string | null) => ({
    type: "SET_PROPERTY_TYPE_FILTER",
    payload: propertyType,
  });
  
  export const setRoomsFilter = (rooms: number | null) => ({
    type: "SET_ROOMS_FILTER",
    payload: rooms,
  });
  
  export const setMaxPriceFilter = (maxPrice: number | null) => ({
    type: "SET_MAX_PRICE_FILTER",
    payload: maxPrice,
  });
  
  export const setCityFilter = (city: string | null) => ({
    type: "SET_CITY_FILTER",
    payload: city,
  });
  
  