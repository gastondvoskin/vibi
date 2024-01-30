import { Dispatch } from 'redux';
import instance from "../../utils/axiosconfig";
import { CreatePublication, GET_PUBLICATIONS, GetPublicationsAction, SET_CURRENTPAGE, SetCurrentPage } from "./actions-types-publication";
import { FilterReducer } from '../reducers/interfaces/interfaceReducers';


 export const setCurrentPageAction  = ( currentPage:number) => {
  return {
    type: SET_CURRENTPAGE,
    payload:currentPage,
  };
 }  

export const getPublicationsAction = (page:number,filters:FilterReducer) => {
  const { city, maxPrice, propertyType, rooms } = filters;
  // console.log("filters en action", filters)
  let queryParams = [];

  if (city) {
    queryParams.push(`city=${encodeURIComponent(city)}`);
  }

  if (maxPrice !== null) {
    queryParams.push(`maxPrice=${maxPrice}`);
  }

  if (propertyType) {
    queryParams.push(`propertyType=${encodeURIComponent(propertyType)}`);
  }

  if (rooms !== null) {
    queryParams.push(`rooms=${rooms}`);
  }

// Combina los parámetros en una cadena de consulta
  const queryString = queryParams.join('&');

  // Construye la URL de la solicitud
  const API_URL = `publication/?page=${page}${queryString ? `&${queryString}` : ''}`;

  
  return async (dispatch: Dispatch<GetPublicationsAction>) => {
    try {
      //!FALTA PONER UN TIPADO PARA EL GET
      const response = await instance.get(API_URL); 
      const publications = response.data;
      dispatch({
        type: GET_PUBLICATIONS,
        payload:publications,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};


export type publicationActions = GetPublicationsAction | CreatePublication | SetCurrentPage