import { Dispatch } from 'redux';
import instance from "../../utils/axiosconfig";
import { GET_PUBLICATIONS } from "./actions-types";

interface GetPublicationsAction {
  type: 'GET_PUBLICATIONS';
  payload: [];
}
interface CreatePublication {
  type: 'CREATE_PUBLICATION',
  payload: {}
}

export const getPublicationsAction = (page:number) => {
  const API_URL = `publication/?page=${page}`;
  return async (dispatch: Dispatch<GetPublicationsAction>) => {
    try {
      //!FALTA PONER UN TIPADO PARA EL GET
      const response = await instance.get(API_URL); 
      const publications = response.data;
      dispatch({
        type: GET_PUBLICATIONS,
        payload: publications.publications,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export type publicationActions = GetPublicationsAction | CreatePublication


/* export const filterByCreator = (creator) => {
    return {
        type: FILTER_BY_CREATOR,
        payload: creator
    };
}; */
